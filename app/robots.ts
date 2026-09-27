import type { MetadataRoute } from "next";

// Beim Static Export wird robots.txt einmalig beim Build erzeugt
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://christophrenz.de/sitemap.xml",
  };
}
