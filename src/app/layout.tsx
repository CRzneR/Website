import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Analytics from "../components/analytics";
import CustomCursor from "../components/CustomCursor";

// ─── Fonts ───────────────────────────────────────────────────────────────────

const cormorant = localFont({
  src: [
    { path: "../fonts/CormorantSC-Bold.ttf", weight: "900", style: "normal" },
    { path: "../fonts/CormorantSC-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const encoded = localFont({
  src: [
    { path: "../fonts/EncodeSansExpanded-Thin.ttf", weight: "200", style: "normal" },
    { path: "../fonts/EncodeSansExpanded-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/EncodeSansExpanded-ExtraBold.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-encoded",
  display: "swap",
  preload: true,
});

const rocGrotesk = localFont({
  src: [
    { path: "../fonts/RocGrotesk_Bold.otf", weight: "400", style: "normal" },
    { path: "../fonts/RocGrotesk_Heavy.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-rocGrotesk",
  display: "swap",
  preload: false, // Nur Hauptschriften preloaden
});

const panther = localFont({
  src: [{ path: "../fonts/panther.ttf", weight: "400", style: "normal" }],
  variable: "--font-panther",
  display: "swap",
  preload: false,
});

const bstyle = localFont({
  src: "../fonts/BStyle-B.ttf",
  weight: "800",
  style: "normal",
  variable: "--font-bstyle",
  display: "swap",
  preload: false,
});

// ─── Metadata ────────────────────────────────────────────────────────────────

const siteUrl = "https://www.christophrenz.de";
const siteName = "Christoph Renz";
const siteDescription =
  "Portfolio von Christoph Renz – Webentwickler & Frontend Developer für moderne Websites und Web-Apps mit Next.js, React, Tailwind CSS und TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} – Webentwickler & Frontend Developer`,
    template: `%s | ${siteName}`, // Unterseiten: "Impressum | Christoph Renz"
  },

  description: siteDescription,

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
    url: siteUrl,
    title: `${siteName} – Webentwickler & Frontend Developer`,
    description: siteDescription,
    siteName,
    locale: "de_DE",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} – Webentwickler Portfolio`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Webentwickler & Frontend Developer`,
    description: siteDescription,
    images: ["/og.jpg"],
  },

  keywords: [
    "Christoph Renz",
    "Webentwickler",
    "Frontend Developer",
    "Next.js Entwickler",
    "React Entwickler",
    "Tailwind CSS",
    "TypeScript",
    "Webentwicklung Deutschland",
    "Portfolio Webentwickler",
    "moderne Websites",
    "Web-App Entwicklung",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  jobTitle: "Webentwickler & Frontend Developer",
  description: siteDescription,
  image: `${siteUrl}/og.jpg`,
  sameAs: ["https://github.com/crzner", "https://www.linkedin.com/in/christoph-renz-806822388/"],
  knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Development"],
};

// ─── Layout ──────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`
          ${cormorant.variable}
          ${encoded.variable}
          ${bstyle.variable}
          ${panther.variable}
          ${rocGrotesk.variable}
          antialiased
        `}
      >
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
