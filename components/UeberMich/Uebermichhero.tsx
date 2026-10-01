import Image from "next/image";
import { Allura } from "next/font/google";
import Reveal from "@/components/Effects/Reveal";

export default function UeberMichHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-12 md:px-[6.5vw] md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-8">
        {/* ---------- Text ---------- */}
        <Reveal className="relative z-10 border-l border-accent/30 pl-5 md:pl-8">
          <p className="font-mono text-sm text-soft">{"// 01"}</p>
          <div className="mt-3 flex items-center gap-6">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">Über mich</p>
            <span aria-hidden="true" className="h-px w-20 bg-accent/50 md:w-32" />
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-white md:text-6xl lg:text-7xl">
            Ideen in echte
            <br />
            <span className="text-accent drop-shadow-[0_0_24px_rgba(245,252,123,0.25)]">
              Ergebnisse verwandeln.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-soft lg:text-lg">
            Ich bin Christoph Renz, ein kreativer Webentwickler mit Fokus auf modernes Webdesign,
            saubere Entwicklung und digitale Lösungen, die wirklich funktionieren.
          </p>

          <a
            href="#weg"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-[#151515] shadow-[0_0_30px_-8px_rgba(245,252,123,0.7)] transition-shadow duration-300 hover:shadow-[0_0_40px_-4px_rgba(245,252,123,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Mehr über meinen Weg
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>

        {/* ---------- Porträt mit Leuchtrahmen ---------- */}
        <Reveal from="none" scale={0.96} duration={1.4} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[32rem]">
            {/* Leuchtende Rahmen hinter dem Porträt */}
            <div
              aria-hidden="true"
              className="absolute left-[12%] top-[4%] h-[72%] w-[46%] rounded-lg border border-accent/80 bg-gradient-to-b from-accent/20 to-transparent shadow-[0_0_50px_-5px_rgba(245,252,123,0.45),inset_0_0_40px_rgba(245,252,123,0.15)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[46%] top-[16%] h-[58%] w-[38%] rounded-lg border border-accent/50 bg-gradient-to-b from-accent/10 to-transparent shadow-[0_0_40px_-10px_rgba(245,252,123,0.35)]"
            />

            {/* Lichtschein am Boden */}
            <div
              aria-hidden="true"
              className="absolute bottom-[2%] left-1/2 h-[14%] w-[85%] -translate-x-1/2 rounded-[50%] bg-accent/20 blur-3xl"
            />

            {/* Porträt */}
            <Image
              src="/images/christoph-portrait.png"
              alt="Christoph Renz"
              width={693}
              height={980}
              priority
              sizes="(min-width: 768px) 32rem, 90vw"
              className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain [-webkit-mask-image:linear-gradient(to_bottom,#000_75%,transparent)] [mask-image:linear-gradient(to_bottom,#000_75%,transparent)]"
            />

            {/*  Name */}
            <div className="absolute bottom-[6%] right-0 text-right">
              <p className="mt-2 font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-soft">
                Christoph Renz
                <br />
                Web Developer
              </p>
            </div>
          </div>

          {/* Stichworte (ab lg) */}
          <ul className="absolute right-0 top-20 hidden border-y border-white/20 py-2 font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-soft/80 xl:block">
            <li>Design</li>
            <li>Development</li>
            <li>Web Apps</li>
            <li>Real Results</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
