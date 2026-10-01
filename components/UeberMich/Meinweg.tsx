import { FiCode } from "react-icons/fi";
import GlowPanel from "@/components/Effects/GlowPanel";
import Reveal from "@/components/Effects/Reveal";

const steps = [
  {
    year: "2024",
    title: "Erste Schritte",
    text: "Erste eigene Projekte und tiefer Einstieg in Webentwicklung.",
  },
  {
    year: "2025",
    title: "Fokus & Spezialisierung",
    text: "Vertiefung meines Fachwissens durch Zertifizierungen und praxisnahe Weiterbildung.",
  },
  {
    year: "2026",
    title: "Eigene Projekte",
    text: "Umsetzung eigener Web Apps und Plattformen und erste Kundenprojekte.",
  },
  {
    year: "Heute",
    title: "Kreative Lösungen",
    text: "Freelance-Entwicklung mit Fokus auf Qualität, Performance und Nutzererlebnis.",
  },
];

export default function MeinWeg() {
  return (
    <section id="weg" className="relative overflow-hidden px-5 py-20 md:px-[6.5vw] md:py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr_0.85fr] lg:items-center lg:gap-10">
        {/* ---------- Text ---------- */}
        <Reveal className="border-l border-accent/30 pl-5 md:pl-8">
          <p className="font-mono text-sm text-soft">{"// 02"}</p>
          <div className="mt-3 flex items-center gap-6">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">Mein Weg</p>
            <span aria-hidden="true" className="h-px w-20 bg-accent/50" />
          </div>

          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-white md:text-5xl">
            Neugier.
            <br />
            Lernen.
            <br />
            <span className="text-accent">Umsetzen.</span>
          </h2>

          <p className="mt-6 max-w-sm text-base leading-relaxed text-soft">
            Schon früh hat mich die Kombination aus Kreativität und Technik fasziniert. Heute
            entwickle ich digitale Lösungen, die nicht nur gut aussehen, sondern echten Mehrwert
            bieten.
          </p>
        </Reveal>

        {/* ---------- Zeitstrahl ---------- */}
        <Reveal as="ol" stagger={0.15} distance={20} className="relative flex flex-col gap-8">
          {steps.map((step, i) => {
            const isNow = i === steps.length - 1;
            return (
              <li key={step.year} className="grid grid-cols-[3.5rem_1.25rem_1fr] gap-x-3">
                <span className={`pt-0.5 font-mono text-sm ${isNow ? "text-accent" : "text-soft"}`}>
                  {step.year}
                </span>

                {/* Punkt + Linie */}
                <span className="relative flex justify-center">
                  <span
                    className={`relative z-10 mt-1.5 h-3 w-3 rounded-full border ${
                      isNow
                        ? "border-accent bg-accent shadow-[0_0_12px_rgba(245,252,123,0.9)]"
                        : "border-accent/70 bg-[#151515]"
                    }`}
                  />
                  {!isNow && (
                    <span
                      aria-hidden="true"
                      className="absolute top-5 h-[calc(100%+1.25rem)] w-px bg-accent/30"
                    />
                  )}
                </span>

                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{step.text}</p>
                </div>
              </li>
            );
          })}
        </Reveal>

        {/* ---------- Code-Panels ---------- */}
        <Reveal
          from="none"
          scale={0.94}
          duration={1.4}
          className="relative hidden md:block xl:pt-24"
        >
          <div
            aria-hidden="true"
            className="relative mx-auto aspect-square w-full max-w-[22rem] [perspective:1000px]"
          >
            <div className="absolute bottom-[4%] left-1/2 h-[16%] w-[80%] -translate-x-1/2 rounded-[50%] bg-accent/20 blur-3xl" />
            <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateY(-24deg)_rotateX(6deg)]">
              <GlowPanel
                float
                floatDelay={2}
                className="left-[8%] top-[6%] h-[62%] w-[56%] opacity-60"
              />
              <GlowPanel float className="left-[26%] top-[20%] h-[66%] w-[60%]">
                <FiCode
                  className="h-1/2 w-1/2 text-accent drop-shadow-[0_0_10px_rgba(245,252,123,0.8)]"
                  strokeWidth={1.5}
                />
              </GlowPanel>
            </div>
          </div>

          <ul className="absolute right-0 top-0 hidden border-y border-white/20 py-2 font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-soft/80 xl:block">
            <li>Ideas</li>
            <li>Concepts</li>
            <li>Development</li>
            <li>Real Results</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
