import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// ─── Metadata ────────────────────────────────────────────────────────────────

const siteUrl = "https://www.christophrenz.de";
const siteName = "Christoph Renz";
const siteDescription =
  "Portfolio von Christoph Renz – Webentwickler & Frontend Developer für moderne Websites und Web-Apps mit Next.js, React, TailwindCSS und TypeScript.";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${anton.variable} ${inter.variable} bg-bg font-sans text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
