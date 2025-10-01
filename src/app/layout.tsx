import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import SmoothScroll from "../components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = localFont({
  src: [
    {
      path: "../fonts/CormorantSC-Bold.ttf",
      weight: "900",
      style: "bold",
    },
    {
      path: "../fonts/CormorantSC-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const encoded = localFont({
  src: [
    {
      path: "../fonts/EncodeSansExpanded-Thin.ttf",
      weight: "200",
      style: "thin",
    },
    {
      path: "../fonts/EncodeSansExpanded-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/EncodeSansExpanded-ExtraBold.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-encoded",
  display: "swap",
});

const rocGrotesk = localFont({
  src: [
    {
      path: "../fonts/RocGrotesk_Bold.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/RocGrotesk_Heavy.otf",
      weight: "900",
      style: "bold",
    },
  ],
  variable: "--font-rocGrotesk",
  display: "swap",
});

const panther = localFont({
  src: [
    {
      path: "../fonts/panther.ttf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-panther",
  display: "swap",
});

const bstyle = localFont({
  src: "../fonts/BStyle-B.ttf",
  weight: "800",
  style: "bold",
  variable: "--font-bstyle",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christoph Renz – Design & Development",
  description:
    "Ich entwickle und gestalte moderne Webseiten für Unternehmen und Selbstständige. Fokus auf Design, Performance und Nutzererlebnis.",
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "Frontend-Development",
    "Programmieren",
    "Freelancer",
    "Selbstständiger Entwickler",
  ],
  authors: [{ name: "Christoph Renz", url: "https://christophrenz.de" }],
  creator: "Christoph Renz",
  publisher: "Christoph Renz",
  openGraph: {
    title: "Christoph Renz – Design & Development",
    description:
      "Moderne Webseiten, maßgeschneidertes Design & professionelle Entwicklung.",
    url: "https://christophrenz.de",
    siteName: "Christoph Renz",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview-Bild der Website",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/image/favicon-16x16.png",
    apple: "/imgage/apple-touch-icon.png",
  },
  metadataBase: new URL("https://christophrenz.de"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${encoded.variable} ${bstyle.variable} ${panther.variable} ${rocGrotesk.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
        <SpeedInsights />
        <Analytics />
        <footer className="p-6 bg-[#151515] text-gray-300 text-center text-sm space-x-6 border-t border-gray-700">
          <Link
            href="/impressum"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            Datenschutz
          </Link>
        </footer>
      </body>
    </html>
  );
}
