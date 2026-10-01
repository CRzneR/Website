import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.christophrenz.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolio/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about/`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/kontakt/`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
