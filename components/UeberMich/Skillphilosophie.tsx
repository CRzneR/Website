import { FiBarChart2, FiZap } from "react-icons/fi";
import { SiFigma, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import Reveal from "@/components/Effects/Reveal";

const skills: { label: string; Icon: IconType }[] = [
  { label: "Figma", Icon: SiFigma },
  { label: "VS Code", Icon: VscVscode },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "React", Icon: SiReact },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "SEO", Icon: FiBarChart2 },
  { label: "Performance", Icon: FiZap },
];

/* Kleine Überschrift mit Nummer, Label und Linie – wie in den anderen Sections */
function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <>
      <p className="font-mono text-sm text-soft">{`// ${index}`}</p>
      <div className="mt-3 flex items-center gap-6">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">{label}</p>
        <span aria-hidden="true" className="h-px flex-1 max-w-[10rem] bg-accent/50" />
      </div>
    </>
  );
}

export default function SkillsPhilosophie() {
  return (
    <section className="px-5 pb-24 pt-8 md:px-[6.5vw] md:pb-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ---------- Skills & Tools ---------- */}
        <div className="border-l border-accent/30 pl-5 md:pl-8">
          <Reveal>
            <SectionLabel index="03" label="Skills & Tools" />
          </Reveal>

          <Reveal
            as="ul"
            stagger={0.06}
            distance={20}
            className="mt-8 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          >
            {skills.map(({ label, Icon }) => (
              <li
                key={label}
                className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-xl sm:gap-3 border border-white/10 bg-white/[0.03] text-center transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_-10px_rgba(245,252,123,0.5)]"
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8 md:h-9 md:w-9"
                />
                <span className="px-1 text-[0.65rem] leading-tight text-soft sm:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </Reveal>
        </div>

        {/* ---------- Philosophie ---------- */}
        <Reveal delay={0.15} className="border-l border-accent/30 pl-5 md:pl-8">
          <SectionLabel index="04" label="Meine Philosophie" />

          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-white md:text-5xl">
            Technik ist ein Werkzeug.
            <br />
            <span className="text-accent">Menschen stehen im Mittelpunkt.</span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-soft lg:text-lg">
            Ich glaube an moderne, ehrliche und funktionale Lösungen. Klare Kommunikation, saubere
            Umsetzung und langfristige Ergebnisse sind für mich die Basis guter Zusammenarbeit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
