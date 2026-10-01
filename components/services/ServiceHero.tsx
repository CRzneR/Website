import Reveal from "@/components/Effects/Reveal";

const C_PATH =
  "M331.75 66.625V188.056H251.185V95.9029H144.245V464.037H251.185V331.566H331.75V491.875H47.375V66.625H331.75Z";
const R_PATH =
  "M1 56.5859V1H428.875V222.385L397.696 254.97L428.875 284.68V371.652V458.625H340.134V323.015H242.759V453.833H155.937V105.942H242.759V196.509H340.134V56.5859H1Z";

const SERVICE_LINKS = [
  { label: "Web Design", href: "#webdesign" },
  { label: "Entwicklung", href: "#entwicklung" },
  { label: "Web Apps", href: "#webapps" },
  { label: "SEO", href: "#seo" },
];

/* Leuchtendes CR-Logo als Glas-Umriss – leichtgewichtig, ohne 3D-Logik */
function GlowLogo() {
  return (
    <svg viewBox="-20 -20 470 533" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="svc-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5FC7B" stopOpacity="0.04" />
          <stop offset="1" stopColor="#F5FC7B" stopOpacity="0.18" />
        </linearGradient>
        <filter id="svc-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* R hinten: versetzte Kopie für Tiefe + gedimmte Kante */}
      <path
        d={R_PATH}
        transform="translate(14 14)"
        fill="none"
        stroke="rgba(245,252,123,0.15)"
        strokeWidth="2"
      />
      <path
        d={R_PATH}
        fill="url(#svc-face)"
        stroke="rgba(245,252,123,0.45)"
        strokeWidth="2"
        filter="url(#svc-glow)"
      />

      {/* C vorne */}
      <path
        d={C_PATH}
        transform="translate(12 12)"
        fill="none"
        stroke="rgba(245,252,123,0.25)"
        strokeWidth="2"
      />
      <path d={C_PATH} fill="rgba(21,21,21,0.55)" />
      <path
        d={C_PATH}
        fill="url(#svc-face)"
        stroke="#F5FC7B"
        strokeWidth="2.5"
        filter="url(#svc-glow)"
      />

      {/* Lichtschacht im C */}
      <rect x="144" y="96" width="107" height="368" fill="url(#svc-face)" opacity="0.8" />
    </svg>
  );
}

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 md:px-[6.5vw] md:pb-24 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-8">
        {/* ---------- Text ---------- */}
        <Reveal className="relative z-10">
          <p className="font-mono text-sm uppercase tracking-widest text-accent">{"// Services"}</p>

          <h1 className="mt-5 font-display text-5xl uppercase leading-[1] text-white md:text-6xl lg:text-7xl">
            Digitale
            <br />
            <span className="text-accent drop-shadow-[0_0_24px_rgba(245,252,123,0.25)]">
              Lösungen.
            </span>
          </h1>
          <p className="mt-3 font-display text-xl uppercase text-accent md:text-2xl">
            Die Ideen sichtbar machen.
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-soft lg:text-lg">
            Ich entwickle individuelle Websites, Web-Applikationen und digitale Lösungen –
            durchdacht, modern und mit Fokus auf echte Ergebnisse.
          </p>

          <a
            href="#webdesign"
            className="group mt-8 inline-flex items-center gap-6 rounded-xl border border-accent/70 px-7 py-4 text-sm text-white shadow-[0_0_30px_-10px_rgba(245,252,123,0.5)] transition-colors duration-300 hover:bg-accent hover:text-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Meine Services entdecken
            <span
              aria-hidden="true"
              className="text-accent transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#151515]"
            >
              →
            </span>
          </a>

          {/* Sprungmarken zu den Services */}
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {SERVICE_LINKS.map((s, i) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="group flex flex-col gap-1.5 border-l border-accent/50 pl-3 text-sm uppercase tracking-wider text-white transition-colors hover:text-accent"
                >
                  {s.label}
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------- Logo ---------- */}
        <Reveal from="none" scale={0.94} duration={1.4} className="relative">
          <div className="relative mx-auto aspect-[430/493] w-full max-w-[16rem] md:max-w-[24rem]">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 left-1/2 h-16 w-[110%] -translate-x-1/2 rounded-[50%] bg-accent/25 blur-3xl"
            />
            <GlowLogo />
          </div>

          <ul className="absolute right-0 top-0 hidden font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-soft/80 xl:block">
            <li>Ideas</li>
            <li>Design</li>
            <li>Develop</li>
            <li>Optimize</li>
            <li>Grow</li>
          </ul>
          <p className="absolute bottom-6 right-0 hidden font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-accent xl:block">
            System / 001
            <br />
            Christoph Renz
          </p>
        </Reveal>
      </div>
    </section>
  );
}
