import Reveal from "@/components/Effects/Reveal";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative isolate overflow-hidden px-5 py-24 md:px-[6.5vw] md:py-32 lg:py-40"
    >
      {/* ---------- Hintergrund: Planet mit gelbem Lichtrand ---------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Planet – nur der obere Bogen ist sichtbar */}
        <div className="absolute left-[-30%] top-[52%] aspect-square w-[160%] rounded-full bg-[radial-gradient(circle_at_60%_0%,#2A2A17_0%,#1A1A14_35%,#151515_65%)] shadow-[inset_0_2px_0_rgba(245,252,123,0.55),inset_0_40px_80px_-40px_rgba(245,252,123,0.25),0_-20px_80px_-30px_rgba(245,252,123,0.45)] md:left-[5%] md:top-[12%] md:w-[75%]" />

        {/* Lichtreflex auf dem Rand */}
        <div className="absolute left-[55%] top-[49%] h-32 w-32 -translate-x-1/2 rounded-full bg-accent/40 blur-3xl md:left-[42%] md:top-[10%] md:h-48 md:w-48" />
        <div className="absolute left-[55%] top-[51.5%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_20px_6px_rgba(245,252,123,0.8)] md:left-[42%] md:top-[12.5%]" />

        {/* Abdunklung, damit Text links und rechts gut lesbar bleibt */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/70 via-transparent to-[#151515]/80" />
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
        {/* ---------- Headline ---------- */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-5 w-5 rounded-full border border-accent/70 shadow-[0_0_12px_rgba(245,252,123,0.4)]"
            />
            <p className="text-sm text-accent">{"// 07"}</p>
          </div>

          <p className="mt-5 font-display text-3xl text-white md:text-4xl lg:text-5xl">
            Work together?
          </p>
          <h2 className="mt-2 font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            <span className="text-accent drop-shadow-[0_0_24px_rgba(245,252,123,0.25)]">
              Let’s build
            </span>
            <br />
            <span className="text-white/20">something GREAT.</span>
          </h2>
        </Reveal>

        {/* ---------- Text + Button ---------- */}
        <Reveal delay={0.2} className="max-w-sm">
          <p className="text-base leading-relaxed text-soft lg:text-lg">
            Du hast eine Idee, ein Projekt oder einfach Lust auf Austausch? Ich freue mich auf deine
            Nachricht.
          </p>

          <a
            href="mailto:kontakt@christophrenz.de"
            className="group mt-8 inline-flex items-center gap-6 rounded-xl border border-accent/70 bg-[#151515]/60 px-7 py-4 text-sm text-white shadow-[0_0_30px_-10px_rgba(245,252,123,0.5)] backdrop-blur-sm transition-colors duration-300 hover:bg-accent hover:text-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:text-base"
          >
            Jetzt Kontakt aufnehmen
            <span
              aria-hidden="true"
              className="text-accent transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#151515]"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
