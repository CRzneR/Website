import { FiCode, FiLayers, FiMonitor, FiTrendingUp } from "react-icons/fi";
import type { IconType } from "react-icons";
import Reveal from "@/components/Effects/Reveal";

const services: { title: string; text: string; Icon: IconType }[] = [
  {
    title: "Webdesign",
    text: "Moderne, klare Designs mit Fokus auf Nutzererlebnis.",
    Icon: FiMonitor,
  },
  {
    title: "Entwicklung",
    text: "Saubere und performante Websites und Anwendungen.",
    Icon: FiCode,
  },
  {
    title: "Web Apps",
    text: "Individuelle Plattformen von der Idee bis zur Umsetzung.",
    Icon: FiLayers,
  },
  {
    title: "SEO",
    text: "Bessere Sichtbarkeit und nachhaltiges Wachstum.",
    Icon: FiTrendingUp,
  },
];

export default function Leistungen() {
  return (
    <section id="services" className="px-5 py-8 md:px-[6.5vw] md:py-12">
      <Reveal
        as="ul"
        stagger={0.1}
        distance={20}
        className="grid grid-cols-1 gap-8 rounded-2xl border border-accent/25 bg-white/[0.02] p-6 shadow-[0_0_50px_-25px_rgba(245,252,123,0.35)] sm:grid-cols-2 md:p-8 lg:grid-cols-4 lg:gap-0"
      >
        {services.map(({ title, text, Icon }, i) => (
          <li
            key={title}
            className={`lg:px-8 ${i === 0 ? "lg:pl-2" : "lg:border-l lg:border-white/10"}`}
          >
            <Icon
              aria-hidden="true"
              className="h-8 w-8 text-accent drop-shadow-[0_0_8px_rgba(245,252,123,0.6)]"
              strokeWidth={1.5}
            />
            <h2 className="mt-5 font-display text-xl text-white">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-soft">{text}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
