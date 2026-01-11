import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export const mainRoutes = [
  route("om-meg", "routes/about.tsx", { id: "Om meg" }),
  route("tjenester", "routes/services.tsx", { id: "Tjenester" }),
  route("bildegalleri", "routes/home.tsx", { id: "Bildegalleri" }),
  route("kontakt", "routes/home.tsx", { id: "Kontakt" }),
] satisfies RouteConfig;

export default [
  layout("layout/index.tsx", [index("routes/home.tsx"), ...mainRoutes]),
] satisfies RouteConfig;
