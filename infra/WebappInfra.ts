import * as cdk from 'aws-cdk-lib'

import { Construct } from 'constructs';

export class Webapp extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // OIDC provider is usually already set up in your account.
    const provider =
      cdk.aws_iam.OpenIdConnectProvider.fromOpenIdConnectProviderArn(
        this,
        "GitHubOIDC",
        "arn:aws:iam::968382676337:oidc-provider/token.actions.githubusercontent.com"
      );

    const githubActionsRole = new cdk.aws_iam.Role(this, "GithubActionsRole", {
      roleName: "github-actions-s3-deploy",
      assumedBy: new cdk.aws_iam.WebIdentityPrincipal(
        provider.openIdConnectProviderArn,
        {
          StringLike: {
            "token.actions.githubusercontent.com:sub":
              "repo:trymtv/mobelrest:*",
          },
        }
      ),
      description: "Role assumed by GitHub Actions",
    });

    const stack = cdk.Stack.of(this);
    const stackArn = `arn:aws:cloudformation:${stack.region}:${stack.account}:stack/${stack.stackName}/*`;

    githubActionsRole.addToPolicy(
      new cdk.aws_iam.PolicyStatement({
        actions: [
          "cloudformation:DescribeStacks",
          "cloudformation:DescribeStackResources",
          "cloudformation:DescribeStackEvents",
          "cloudformation:GetTemplate",
          "cloudformation:GetTemplateSummary",
        ],
        resources: [stackArn],
      })
    );

    const s3Bucket = new cdk.aws_s3.Bucket(this, "s3-bucket-content", {
      blockPublicAccess: new cdk.aws_s3.BlockPublicAccess({
        blockPublicAcls: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
        blockPublicPolicy: false,
      }),
      encryption: cdk.aws_s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
    });

    s3Bucket.grantReadWrite(githubActionsRole);

    const cloudfrontS3Origin =
      new cdk.aws_cloudfront_origins.S3StaticWebsiteOrigin(s3Bucket);

    const distribution = new cdk.aws_cloudfront.Distribution(
      this,
      "cloudfront-content-distribution",
      {
        defaultBehavior: {
          origin: cloudfrontS3Origin,
        },
        defaultRootObject: "index.html",
        priceClass: cdk.aws_cloudfront.PriceClass.PRICE_CLASS_100,
      }
    );

    distribution.grantCreateInvalidation(githubActionsRole);
  }
}

const app = new cdk.App()
new Webapp(app, 'website-stack')
