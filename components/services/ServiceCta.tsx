import Link from "next/link";
import Reveal from "@/components/Effects/Reveal";

export default function ServicesCta() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-24 md:px-[6.5vw] md:py-32">
      {/* Planet mit gelbem Lichtrand im Hintergrund */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-40%] top-[30%] aspect-square w-[180%] rounded-full bg-[radial-gradient(circle_at_50%_0%,#2A2A17_0%,#1A1A14_35%,#151515_65%)] shadow-[inset_0_2px_0_rgba(245,252,123,0.55),inset_0_40px_80px_-40px_rgba(245,252,123,0.25),0_-20px_80px_-30px_rgba(245,252,123,0.45)] md:left-[-10%] md:top-[28%] md:w-[120%]" />
        <div className="absolute left-1/2 top-[27%] h-40 w-40 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            {"// Next Step"}
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase leading-none text-white md:text-5xl lg:text-6xl">
            Bereit für etwas Neues?
          </h2>
          <p className="mt-4 font-display text-2xl text-accent md:text-3xl">
            Lass uns etwas Großartiges bauen.
          </p>

          <Link
            href="/kontakt"
            className="group mt-10 inline-flex items-center gap-6 rounded-xl border border-accent/70 bg-[#151515]/60 px-7 py-4 text-sm text-white shadow-[0_0_30px_-10px_rgba(245,252,123,0.5)] backdrop-blur-sm transition-colors duration-300 hover:bg-accent hover:text-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Jetzt Kontakt aufnehmen
            <span
              aria-hidden="true"
              className="text-accent transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#151515]"
            >
              →
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="max-w-xs text-base leading-relaxed text-soft">
            Ob Website, Web App oder SEO – ich helfe dir, deine Idee in die Realität umzusetzen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
