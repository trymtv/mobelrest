import {
  type RouteConfig,
  index,
  layout, route,
} from "@react-router/dev/routes";

export default [
  layout("layout/index.tsx", [
      index("routes/index.tsx"),
      route("*", "routes/index.tsx", {
        id: "not-found",
      })
  ]),
] satisfies RouteConfig;
