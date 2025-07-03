import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // Standardwert
  basePath: "", // Nur ändern, wenn Unterverzeichnis genutzt wird
  assetPrefix: "", // Nur bei CDN nötig
};

export default nextConfig;
