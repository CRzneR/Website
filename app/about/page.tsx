import type { Metadata } from "next";
import UeberMichHero from "@/components/UeberMich/Uebermichhero";
import Leistungen from "@/components/UeberMich/Leistungen";
import MeinWeg from "@/components/UeberMich/Meinweg";
import SkillsPhilosophie from "@/components/UeberMich/Skillphilosophie";
import Certificates from "@/components/Certificates";

export const metadata: Metadata = {
  title: "Über mich – Christoph Renz",
  description:
    "Christoph Renz – kreativer Webentwickler mit Fokus auf modernes Webdesign, saubere Entwicklung und digitale Lösungen.",
};

export default function UeberMichPage() {
  return (
    <main className="bg-[#151515]">
      <UeberMichHero />
      <Leistungen />
      <MeinWeg />
      <Certificates />
      <SkillsPhilosophie />
    </main>
  );
}
