import type { Metadata } from "next";
import ProjekteHero from "@/components/portfolio/ProjektHero";
import ProjektListe from "@/components/portfolio/Projektliste";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Projekte – Christoph Renz",
  description:
    "Eine Auswahl meiner Projekte – von modernen Websites über individuelle Web Apps bis hin zu SEO-Optimierungen.",
};

export default function ProjektePage() {
  return (
    <main className="bg-[#151515]">
      {/* 1. Einstieg mit 3D-Visual */}
      <ProjekteHero />
      {/* 2. Projektliste mit Filter und Sortierung */}
      <ProjektListe />
      <Contact />
    </main>
  );
}
