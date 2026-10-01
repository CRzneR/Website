import type { IconType } from "react-icons";
import { LuCodeXml, LuFileSearch, LuLightbulb, LuRocket } from "react-icons/lu";
import Reveal from "@/components/Effects/Reveal";

const steps: { title: string; text: string; Icon: IconType }[] = [
  {
    title: "Analyse",
    text: "Wir besprechen deine Ziele, Zielgruppe und Anforderungen.",
    Icon: LuFileSearch,
  },
  {
    title: "Konzept",
    text: "Ich entwickle ein individuelles Konzept und ein klares Vorgehen.",
    Icon: LuLightbulb,
  },
  {
    title: "Umsetzung",
    text: "Design, Entwicklung und Optimierung werden umgesetzt.",
    Icon: LuCodeXml,
  },
  {
    title: "Launch",
    text: "Nach Testing und Feinschliff geht dein Projekt live.",
    Icon: LuRocket,
  },
];

export default function Prozess() {
  return (
    <section className="px-5 py-20 md:px-[6.5vw] md:py-28">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">{"// Prozess"}</p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white md:text-5xl">
            So entsteht ein Projekt
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-soft md:text-base">
          Von der ersten Idee bis zum erfolgreichen Launch – transparent, strukturiert und auf
          Augenhöhe.
        </p>
      </Reveal>

      <Reveal
        as="ol"
        stagger={0.12}
        distance={30}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
      >
        {steps.map(({ title, text, Icon }, i) => (
          <li
            key={title}
            className="group relative rounded-2xl border border-accent/25 bg-white/[0.02] p-6 transition-[border-color,box-shadow] duration-500 hover:border-accent/60 hover:shadow-[0_0_40px_-15px_rgba(245,252,123,0.5)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl text-white">{title}</h3>
              </div>
              <Icon
                aria-hidden="true"
                className="h-9 w-9 text-accent drop-shadow-[0_0_10px_rgba(245,252,123,0.6)]"
                strokeWidth={1.4}
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-soft">{text}</p>

            {/* Pfeil zum nächsten Schritt (nur ab lg, zwischen den Karten) */}
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-accent lg:block"
              >
                →
              </span>
            )}
          </li>
        ))}
      </Reveal>
    </section>
  );
}
