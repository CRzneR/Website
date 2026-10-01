import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServiceHero";
import ServicesList from "@/components/services/ServiceList";
import Prozess from "@/components/services/Prozess";
import ServicesCta from "@/components/services/ServiceCta";

export const metadata: Metadata = {
  title: "Services – Christoph Renz",
  description:
    "Web Design, Entwicklung, Web Apps und SEO – individuelle digitale Lösungen mit Fokus auf echte Ergebnisse.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#151515]">
      <ServicesHero />
      <ServicesList />
      <Prozess />
      <ServicesCta />
    </main>
  );
}
