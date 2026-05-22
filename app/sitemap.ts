import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cpahustler.com";

  const routes = [
    "",
    "/cpa",
    "/curriculum",
    "/pricing",
    "/mentor",
    "/webinar",
    "/consultation",
    "/proofs",
    "/about",
    "/faq",
    "/terms",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}