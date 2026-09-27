import type { MetadataRoute } from "next";

// Beim Static Export wird sitemap.xml einmalig beim Build erzeugt
export const dynamic = "force-static";

const baseUrl = "https://christophrenz.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/impressum/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
