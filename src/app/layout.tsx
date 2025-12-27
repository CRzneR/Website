import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const cormorant = localFont({
  src: [
    { path: "../fonts/CormorantSC-Bold.ttf", weight: "900", style: "normal" },
    { path: "../fonts/CormorantSC-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const encoded = localFont({
  src: [
    { path: "../fonts/EncodeSansExpanded-Thin.ttf", weight: "200", style: "normal" },
    { path: "../fonts/EncodeSansExpanded-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/EncodeSansExpanded-ExtraBold.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-encoded",
  display: "swap",
});

const rocGrotesk = localFont({
  src: [
    { path: "../fonts/RocGrotesk_Bold.otf", weight: "400", style: "normal" },
    { path: "../fonts/RocGrotesk_Heavy.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-rocGrotesk",
  display: "swap",
});

const panther = localFont({
  src: [{ path: "../fonts/panther.ttf", weight: "400", style: "normal" }],
  variable: "--font-panther",
  display: "swap",
});

const bstyle = localFont({
  src: "../fonts/BStyle-B.ttf",
  weight: "800",
  style: "normal",
  variable: "--font-bstyle",
  display: "swap",
});

const siteUrl = "https://www.christophrenz.de";
const siteName = "Christoph Renz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: `${siteName} – Webentwickler & Frontend Developer (Next.js, React)`,
  description:
    "Portfolio und Blog von Christoph Renz – Webentwickler & Frontend Developer für moderne Websites und Web-Apps mit Next.js, React, Tailwind CSS und TypeScript.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    title: `${siteName} – Webentwickler & Frontend Developer`,
    description:
      "Moderne Web- und App-Entwicklung mit Next.js, React und Tailwind CSS. Projekte, Leistungen und Blog.",
    siteName,
    locale: "de_DE",
    images: [
      {
        url: "/og.jpg", // -> Datei in /public/og.jpg
        width: 1200,
        height: 630,
        alt: `${siteName} – Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Webentwickler & Frontend Developer`,
    description:
      "Portfolio und Blog: moderne Web- und App-Entwicklung mit Next.js, React und Tailwind CSS.",
    images: ["/og.jpg"],
    // optional, falls du einen Handle hast:
    // creator: "@deinhandle",
  },

  icons: {
    icon: "/favicon.ico",
    // optional:
    // apple: "/apple-touch-icon.png",
  },

  // optional, meist okay:
  keywords: [
    "Christoph Renz",
    "Webentwickler",
    "Frontend Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Webentwicklung",
    "Web-App",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // ✅ deutsch, wenn deine Seite deutsch ist
    <html lang="de">
      <body
        className={`${cormorant.variable} ${encoded.variable} ${bstyle.variable} ${panther.variable} ${rocGrotesk.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
