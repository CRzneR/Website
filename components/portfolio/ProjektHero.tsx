import { FiCode, FiImage, FiArrowUpRight } from "react-icons/fi";
import GlowPanel from "@/components/Effects/GlowPanel";
import Reveal from "@/components/Effects/Reveal";

/* Stilisierte Bergsilhouette für die große Karte – reines SVG, kein Bild nötig */
function Mountains() {
  return (
    <svg
      viewBox="0 0 400 160"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-3/5 w-full"
    >
      <defs>
        <linearGradient id="peak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5FC7B" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#3B3C1A" stopOpacity="0.9" />
          <stop offset="1" stopColor="#151515" />
        </linearGradient>
        <radialGradient id="sky" cx="0.65" cy="0.2" r="0.6">
          <stop offset="0" stopColor="#F5FC7B" stopOpacity="0.35" />
          <stop offset="1" stopColor="#F5FC7B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="160" fill="url(#sky)" />
      <path
        d="M0 160 L70 95 L110 120 L170 60 L205 85 L260 20 L300 70 L340 50 L400 110 L400 160 Z"
        fill="url(#peak)"
      />
      <path
        d="M0 160 L90 120 L150 140 L230 100 L290 130 L400 125 L400 160 Z"
        fill="#151515"
        opacity="0.9"
      />
    </svg>
  );
}

export default function ProjekteHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-12 md:px-[6.5vw] md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-8">
        {/* ---------- Text ---------- */}
        <Reveal className="relative z-10 border-l border-accent/30 pl-5 md:pl-8">
          <p className="font-mono text-sm text-soft">{"// 02"}</p>
          <div className="mt-3 flex items-center gap-6">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">Portfolio</p>
            <span aria-hidden="true" className="h-px w-20 bg-accent/50 md:w-40" />
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-white md:text-6xl lg:text-7xl">
            Projekte, die Ideen
            <br />
            <span className="text-accent drop-shadow-[0_0_24px_rgba(245,252,123,0.25)]">
              Realität machen.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-soft lg:text-lg">
            Eine Auswahl meiner aktuellen Projekte – von modernen Websites über individuelle Web
            Apps bis hin zu SEO-Optimierungen.
          </p>
        </Reveal>

        {/* ---------- 3D-Visual ---------- */}
        <Reveal from="none" scale={0.94} duration={1.4} className="relative">
          <ul className="absolute bottom-0 right-0 hidden border-y border-white/20 py-2 font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-soft/80 xl:block">
            <li>Websites</li>
            <li>Web Apps</li>
            <li>Branding</li>
            <li>SEO</li>
          </ul>

          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[5/4] w-full max-w-[34rem] [perspective:1200px]"
          >
            <div className="absolute bottom-[2%] left-1/2 h-[16%] w-[85%] -translate-x-1/2 rounded-[50%] bg-accent/20 blur-3xl" />

            <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateY(-20deg)_rotateX(8deg)]">
              {/* Hintere Panels */}
              <GlowPanel
                float
                floatDelay={2}
                className="left-[2%] top-[22%] h-[52%] w-[30%] opacity-80"
              >
                <FiCode
                  className="h-1/3 w-1/3 text-accent drop-shadow-[0_0_10px_rgba(245,252,123,0.8)]"
                  strokeWidth={1.5}
                />
              </GlowPanel>
              <GlowPanel
                float
                floatDelay={4}
                className="left-[70%] top-[20%] h-[56%] w-[30%] opacity-80"
              >
                <FiImage
                  className="h-1/3 w-1/3 text-accent drop-shadow-[0_0_10px_rgba(245,252,123,0.8)]"
                  strokeWidth={1.5}
                />
              </GlowPanel>

              {/* Große Karte vorne */}
              <GlowPanel float className="left-[18%] top-[4%] h-[82%] w-[58%]">
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <Mountains />
                  <p className="absolute left-[8%] top-[10%] font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-white/90 md:text-xs">
                    Ideas
                    <br />
                    Design
                    <br />
                    Development
                    <br />
                    <span className="text-white">Real Results.</span>
                  </p>
                  <span className="absolute right-[7%] top-[9%] rounded-full border border-accent/60 px-2.5 py-0.5 font-mono text-[0.65rem] text-accent">
                    2025
                  </span>
                  <span className="absolute left-[8%] top-[48%] h-px w-[20%] bg-accent/70" />
                  <span className="absolute bottom-[7%] right-[7%] flex h-8 w-8 items-center justify-center rounded-full border border-accent/60 text-accent">
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </GlowPanel>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
