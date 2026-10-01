import type { ReactNode } from "react";
import { FiMail, FiMessageSquare, FiSend, FiUser } from "react-icons/fi";
import Reveal from "@/components/Effects/Reveal";
import styles from "./KontaktHero.module.css";

/* Leuchtendes Glas-Panel mit sichtbarer Materialstärke */
function GlowPanel({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`absolute ${className}`}>
      {/* Rückseite, leicht versetzt – ergibt die Tiefe */}
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl border border-accent/30 bg-accent/[0.03]"
      />
      <div className="relative flex h-full w-full items-center justify-center rounded-xl border border-accent/80 bg-gradient-to-br from-accent/15 via-[#151515]/80 to-[#151515]/90 shadow-[0_0_40px_-5px_rgba(245,252,123,0.45),inset_0_0_30px_rgba(245,252,123,0.12)] backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}

const iconClass = "text-accent drop-shadow-[0_0_10px_rgba(245,252,123,0.8)]";

export default function KontaktHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 md:px-[6.5vw] md:pb-24 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
        {/* ---------- Text ---------- */}
        <Reveal>
          <p className="font-mono text-sm text-soft">{"// 06"}</p>
          <div className="mt-4 flex items-center gap-6">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-accent">Kontakt</p>
            <span aria-hidden="true" className="h-px w-24 bg-accent/50 md:w-40" />
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-white md:text-6xl lg:text-7xl">
            Lass uns gemeinsam
            <br />
            <span className="text-accent drop-shadow-[0_0_24px_rgba(245,252,123,0.25)]">
              etwas Großartiges bauen.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-soft lg:text-lg">
            Du hast eine Idee, ein Projekt oder einfach Lust auf Austausch? Ich freue mich auf deine
            Nachricht.
          </p>
        </Reveal>

        {/* ---------- 3D-Visual ---------- */}
        <Reveal from="none" scale={0.94} duration={1.4} className="relative">
          {/* Koordinaten + Stichworte als Tech-Details */}
          <p className="absolute left-0 top-0 font-mono text-[0.7rem] leading-relaxed text-soft/80">
            48.1351° N
            <br />
            11.5820° E
          </p>
          <ul className="absolute right-0 top-0 hidden border-y border-white/20 py-2 font-mono text-[0.7rem] uppercase leading-relaxed tracking-widest text-soft/80 lg:block">
            <li>Ideas</li>
            <li>Projects</li>
            <li>Collaboration</li>
            <li>Solutions</li>
          </ul>

          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[5/4] w-full max-w-[34rem] [perspective:1200px]"
          >
            {/* Lichtschein am Boden */}
            <div className="absolute bottom-[4%] left-1/2 h-[18%] w-[80%] -translate-x-1/2 rounded-[50%] bg-accent/25 blur-3xl" />

            <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateY(-18deg)_rotateX(6deg)]">
              {/* Großes Panel mit Umschlag */}
              <GlowPanel className={`${styles.float} left-[4%] top-[14%] h-[74%] w-[46%]`}>
                <FiMail className={`h-1/2 w-3/4 ${iconClass}`} strokeWidth={1.4} />
              </GlowPanel>

              {/* Sprechblase */}
              <GlowPanel
                className={`${styles.float} ${styles.delay1} left-[52%] top-[2%] h-[28%] w-[22%]`}
              >
                <FiMessageSquare className={`h-1/2 w-1/2 ${iconClass}`} strokeWidth={1.5} />
              </GlowPanel>

              {/* Papierflieger */}
              <GlowPanel
                className={`${styles.float} ${styles.delay2} left-[76%] top-[26%] h-[30%] w-[23%]`}
              >
                <FiSend className={`h-1/2 w-1/2 ${iconClass}`} strokeWidth={1.5} />
              </GlowPanel>

              {/* Person */}
              <GlowPanel
                className={`${styles.float} ${styles.delay3} left-[56%] top-[60%] h-[25%] w-[18%]`}
              >
                <FiUser className={`h-1/2 w-1/2 ${iconClass}`} strokeWidth={1.5} />
              </GlowPanel>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
