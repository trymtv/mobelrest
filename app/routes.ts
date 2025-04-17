import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export const mainRoutes = [
  route("om-verkstedet", "routes/home.tsx", { id: "Om verkstedet" }),
  route("tjenester", "routes/home.tsx", { id: "Tjenester" }),
  route("bildegalleri", "routes/home.tsx", { id: "Bildegalleri" }),
  route("kontakt", "routes/home.tsx", { id: "Kontakt" }),
] satisfies RouteConfig;

export default [
  layout("layout/index.tsx", [index("routes/home.tsx"), ...mainRoutes]),
] satisfies RouteConfig;
