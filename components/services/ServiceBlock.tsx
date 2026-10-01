import Link from "next/link";
import type { ReactNode } from "react";
import { LuCircleCheck } from "react-icons/lu";
import Reveal from "@/components/Effects/Reveal";

export type ServiceBlockProps = {
  id: string;
  /** Laufende Nummer, z. B. 1 → "// 01" */
  index: number;
  /** Titel: erster Teil weiß, zweiter Teil gelb (optional) */
  title: string;
  titleAccent?: string;
  subtitle: string;
  text: string;
  points: string[];
  cta: { label: string; href: string };
  /** Mockup im rechten (bzw. linken) Rahmen */
  visual: ReactNode;
  /** Stichworte oben und unten im Rahmen */
  keywordsTop: string[];
  keywordsBottom: string[];
  /** Bild links, Text rechts */
  flipped?: boolean;
};

export default function ServiceBlock({
  id,
  index,
  title,
  titleAccent,
  subtitle,
  text,
  points,
  cta,
  visual,
  keywordsTop,
  keywordsBottom,
  flipped = false,
}: ServiceBlockProps) {
  const number = String(index).padStart(2, "0");

  return (
    <section id={id} className="relative scroll-mt-24 px-5 py-16 md:px-[6.5vw] md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* ---------- Text ---------- */}
        <Reveal className={`relative ${flipped ? "lg:order-2" : ""}`}>
          {/* Große Kontur-Nummer im Hintergrund */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[8rem] leading-none text-transparent [-webkit-text-stroke:1px_rgba(245,252,123,0.15)] md:text-[10rem]"
          >
            {number}
          </span>

          <p className="relative font-mono text-sm text-accent">{`// ${number}`}</p>
          <h2 className="relative mt-4 font-display text-5xl uppercase leading-[0.95] text-white md:text-6xl">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-accent">{titleAccent}</span>
              </>
            )}
          </h2>
          <p className="relative mt-5 max-w-md text-lg leading-snug text-white">{subtitle}</p>
          <p className="relative mt-4 max-w-md text-base leading-relaxed text-soft">{text}</p>

          <ul className="relative mt-6 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-base text-white">
                <LuCircleCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            href={cta.href}
            className="group relative mt-8 inline-flex items-center gap-6 rounded-xl border border-accent/70 px-7 py-4 text-sm text-white shadow-[0_0_30px_-10px_rgba(245,252,123,0.5)] transition-colors duration-300 hover:bg-accent hover:text-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {cta.label}
            <span
              aria-hidden="true"
              className="text-accent transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#151515]"
            >
              →
            </span>
          </Link>
        </Reveal>

        {/* ---------- Mockup im Leuchtrahmen ---------- */}
        <Reveal from="none" scale={0.96} duration={1.2} className={flipped ? "lg:order-1" : ""}>
          <div
            aria-hidden="true"
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-accent/30 bg-white/[0.02] shadow-[0_0_60px_-25px_rgba(245,252,123,0.45)]"
          >
            {/* Stichworte in den Ecken */}
            <ul
              className={`absolute top-5 z-10 font-mono text-[0.6rem] uppercase leading-relaxed tracking-widest text-soft/70 md:text-[0.65rem] ${
                flipped ? "left-5" : "right-5 text-right"
              }`}
            >
              {keywordsTop.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <ul
              className={`absolute bottom-5 z-10 font-mono text-[0.6rem] uppercase leading-relaxed tracking-widest text-soft/70 md:text-[0.65rem] ${
                flipped ? "left-5" : "right-5 text-right"
              }`}
            >
              {keywordsBottom.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>

            {/* Lichtschein */}
            <div className="absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-[50%] bg-accent/15 blur-3xl" />

            {visual}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
