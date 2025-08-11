import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.pathfinding.com.ar";
  const routes = [
    "",
    "/products",
    "/fbatoolkit-extension",
    "/mercadotoolkit-extension",
    "/mercadotoolkit-extension-br",
    "/git",
    "/tools",
    "/cody",
    "/branding",
    "/creative",
    "/ieu",
    "/sla",
    "/assistance-request",
    "/gp-privacy-policy",
    "/qualitypolicy",
  ];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}


