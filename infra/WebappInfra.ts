import * as cdk from 'aws-cdk-lib'

import { Construct } from 'constructs';

export class Webapp extends cdk.Stack { 
  constructor(scope: Construct, id: string, props?: cdk.StackProps) { 
    super(scope, id, props); 
    
    const s3Bucket = new cdk.aws_s3.Bucket(this, "s3-bucket-content", {
        blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        encryption: cdk.aws_s3.BucketEncryption.S3_MANAGED,
        enforceSSL: true,
        removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const originAccessIdentity = new cdk.aws_cloudfront.OriginAccessIdentity(
    this,
    "cloudfront-origin-access-identity"
    );
    s3Bucket.grantRead(originAccessIdentity);

    const cloudfrontS3Origin = new cdk.aws_cloudfront_origins.S3Origin(
    s3Bucket, {
        originAccessIdentity: originAccessIdentity,
    }
    );
    const distribution = new cdk.aws_cloudfront.Distribution(
    this,
    "cloudfront-content-distribution", {
        defaultBehavior: {
        origin: cloudfrontS3Origin,
        },
        defaultRootObject: "index.html",
        priceClass: cdk.aws_cloudfront.PriceClass.PRICE_CLASS_100,
    }
    );
  }
}

const app = new cdk.App()
new Webapp(app, 'website-stack')
