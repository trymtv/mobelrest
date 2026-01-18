import {
  type RouteConfig,
  index,
  layout, route,
} from "@react-router/dev/routes";

export default [
  layout("layout/index.tsx", [
      index("routes/home.tsx"),
      route("*", "routes/home.tsx", {
        id: "not-found",
      })
  ]),
] satisfies RouteConfig;
