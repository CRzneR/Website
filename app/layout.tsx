import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// ─── Basisdaten ──────────────────────────────────────────────────────────────

const siteUrl = "https://www.christophrenz.de";
const siteName = "Christoph Renz";
const siteDescription =
  "Christoph Renz – Webentwickler aus München für moderne Websites, Web-Apps und SEO. Next.js, React, Tailwind CSS und TypeScript – durchdacht im Konzept, sauber im Code.";

const profiles = [
  "https://github.com/CRzneR",
  "https://www.linkedin.com/in/christoph-renz-806822388/",
];

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} – Webentwickler aus München`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

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
    title: `${siteName} – Webentwickler aus München`,
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
    title: `${siteName} – Webentwickler aus München`,
    description: siteDescription,
    images: ["/og.jpg"],
  },

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

// Färbt auf dem Handy die Browserleiste passend zur Seite
export const viewport: Viewport = {
  themeColor: "#151515",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/og.jpg`,
      jobTitle: "Webentwickler & Frontend Developer",
      email: "mailto:kontakt@christophrenz.de",
      address: {
        "@type": "PostalAddress",
        addressLocality: "München",
        addressCountry: "DE",
      },
      sameAs: profiles,
      knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Webdesign", "SEO"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: `${siteName} – Webentwicklung`,
      url: siteUrl,
      image: `${siteUrl}/og.jpg`,
      description: siteDescription,
      founder: { "@id": `${siteUrl}/#person` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "München",
        addressCountry: "DE",
      },
      areaServed: "DE",
      serviceType: ["Webdesign", "Webentwicklung", "Web Apps", "SEO"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "de-DE",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${anton.variable} ${inter.variable} bg-bg font-sans text-white`}>
        {/* Strukturierte Daten für Google – "<" wird maskiert, damit nichts aus dem Script ausbrechen kann */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
