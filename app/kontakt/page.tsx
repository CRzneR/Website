import type { Metadata } from "next";
import KontaktHero from "@/components/Kontakt/KontaktHero";
import KontaktFormular from "@/components/Kontakt/KontaktFormular";
import KontaktStandort from "@/components/Kontakt/KontaktStandort";

export const metadata: Metadata = {
  title: "Kontakt – Christoph Renz",
  description:
    "Du hast eine Idee oder ein Projekt? Schreib mir – ich freue mich auf deine Nachricht.",
};

export default function KontaktPage() {
  return (
    <main className="bg-[#151515]">
      <KontaktHero />
      <KontaktFormular />
      <KontaktStandort />
    </main>
  );
}
