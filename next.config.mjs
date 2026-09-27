/** @type {import('next').NextConfig} */
const nextConfig = {
  // Baut die komplette Seite als statisches HTML in den Ordner "out"
  output: "export",

  // Erzeugt /impressum/index.html statt /impressum.html,
  // damit IONOS die Unterseiten ohne Server-Konfiguration findet
  trailingSlash: true,

  images: {
    // next/image-Optimierung braucht einen Server – beim Export deaktivieren
    unoptimized: true,
  },
};

export default nextConfig;
