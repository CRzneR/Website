import type { CSSProperties } from "react";
import { FaTiktok, FaGithub, FaLinkedin, FaEnvelope, FaCube } from "react-icons/fa";
import type { IconType } from "react-icons";
import Reveal from "@/components/Effects/Reveal";

type Contact = {
  label: string;
  value: string;
  Icon: IconType;
  color: string;
  href: string;
};

const contacts: Contact[] = [
  {
    label: "TikTok",
    value: "TikTok/FactoryLNG",
    Icon: FaTiktok,
    color: "#EE1D52",
    href: "https://www.tiktok.com/@factoryLNG",
  },
  {
    label: "GitHub",
    value: "GitHub/CRzneR",
    Icon: FaGithub,
    color: "#FFFFFF", // GitHub-Schwarz wäre auf dem dunklen Hintergrund unsichtbar
    href: "https://github.com/CRzneR",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn/ChristophRenz",
    Icon: FaLinkedin,
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/christoph-renz-806822388",
  },
  {
    label: "E-Mail",
    value: "kontakt@christophrenz.de",
    Icon: FaEnvelope,
    color: "#EA4335",
    href: "mailto:kontakt@christophrenz.de",
  },
  {
    label: "Cults",
    value: "FactoryLNG",
    Icon: FaCube,
    color: "#8D27FF",
    href: "https://cults3d.com/en/users/FactoryLNG/3d-models",
  },
];

const linkProps = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

const panel =
  "rounded-2xl border border-accent/20 bg-white/[0.02] shadow-[0_0_40px_-20px_rgba(245,252,123,0.25)]";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function ContactList() {
  return (
    <section id="kontakt-liste" className="px-5 py-20 md:px-[6.5vw] md:py-28">
      {/* ---------- Kopfbereich ---------- */}
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="relative pl-5 pt-3">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-12 w-6 border-l border-t border-accent/60"
          />
          <p className="text-sm text-accent">{"// 06"}</p>
          <h2 className="mt-1 font-display text-4xl uppercase leading-none text-white md:text-5xl lg:text-6xl">
            Kontakt Liste <span className="text-accent">{"{"}</span>
          </h2>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-soft md:mb-1 md:text-right">
          <span className="text-accent">{"// "}</span>
          Lass uns ein Projekt starten oder einfach vernetzen.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-[1.5fr_1fr]">
        {/* ---------- Links: Liste im Code-Stil ---------- */}
        <Reveal className={`${panel} p-6 md:p-10`}>
          <ul className="flex flex-col gap-4 md:gap-5">
            {contacts.map((contact, i) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  {...linkProps(contact.href)}
                  className={`group grid grid-cols-1 items-baseline gap-x-4 gap-y-0.5 rounded-md text-base md:grid-cols-[2.5rem_6rem_3.5rem_1.25rem_1fr] md:text-lg ${focus}`}
                >
                  <span className="hidden text-muted md:inline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white">{contact.label}</span>
                  <span className="hidden whitespace-pre text-soft md:inline">
                    [ <span className="text-accent">{i}</span> ]
                  </span>
                  <span className="hidden text-soft md:inline">=</span>
                  <span className="min-w-0 break-words text-sm text-soft transition-colors duration-300 group-hover:text-accent md:text-lg">
                    &quot;{contact.value}&quot;
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p aria-hidden="true" className="mt-5 text-lg text-white md:text-xl">
            {"}"}
          </p>
        </Reveal>

        {/* ---------- Rechts ---------- */}
        <div className="flex flex-col gap-5">
          {/* Icon-Leiste */}
          <Reveal
            as="div"
            stagger={0.08}
            distance={20}
            className={`${panel} flex items-center justify-between gap-2 p-5 md:gap-3 md:p-6`}
          >
            {contacts.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                {...linkProps(href)}
                aria-label={label}
                title={label}
                style={{ "--hover-color": color } as CSSProperties}
                className={`group flex h-11 w-11 shrink-0 items-center justify-center rounded-full md:h-14 md:w-14 border border-white/15 bg-white/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-accent/70 hover:shadow-[0_0_20px_-4px_rgba(245,252,123,0.5)] ${focus}`}
              >
                <Icon className="h-5 w-5 text-white md:h-6 md:w-6 transition-colors duration-300 group-hover:text-[color:var(--hover-color)]" />
              </a>
            ))}
          </Reveal>

          {/* Verfügbarkeit + Button */}
          <Reveal delay={0.15} className={`${panel} flex-1 p-6 md:p-8`}>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {"// Available for new projects"}
            </p>
            <p className="mt-4 text-xl leading-snug text-white md:text-2xl">
              Lass uns gemeinsam
              <br />
              <span className="text-accent">etwas Großartiges bauen.</span>
            </p>

            <a
              href="mailto:kontakt@christophrenz.de"
              className={`group mt-8 inline-flex items-center gap-6 rounded-xl border border-accent/70 px-7 py-4 text-sm text-white shadow-[0_0_30px_-10px_rgba(245,252,123,0.5)] transition-colors duration-300 hover:bg-accent hover:text-[#151515] ${focus}`}
            >
              Kontakt aufnehmen
              <span
                aria-hidden="true"
                className="text-accent transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-[#151515]"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
