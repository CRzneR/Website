import type { CSSProperties, ReactNode } from "react";
import { FaTiktok, FaGithub, FaLinkedin, FaEnvelope, FaCube } from "react-icons/fa";
import type { IconType } from "react-icons";

const contacts: {
  label: string;
  value: string;
  Icon: IconType;
  color: string;
  /** Optional: Ziel des Links – ohne href ist die Zeile nicht klickbar */
  href?: string;
}[] = [
  {
    label: "TikTok",
    value: "Tiktok.Com/@FactoryLNG",
    Icon: FaTiktok,
    color: "#EE1D52", // TikTok-Rosa
    href: "https://www.tiktok.com/@factoryLNG",
  },
  {
    label: "GitHub",
    value: "Github.Com/CRzneR",
    Icon: FaGithub,
    color: "#181717", // offizielles GitHub-Schwarz (GitHub hat keine "bunte" Markenfarbe)
    href: "https://github.com/CRzneR",
  },
  {
    label: "LinkedIn",
    value: "Linkedin.Com/In/ChristophRenz",
    Icon: FaLinkedin,
    color: "#0A66C2", // offizielles LinkedIn-Blau
    href: "https://www.linkedin.com/in/christophrenz/",
  },
  {
    label: "E-Mail",
    value: "kontakt@ChristophRenz.de",
    Icon: FaEnvelope,
    color: "#EA4335", // generisches "Mail-Rot", keine echte Marke dahinter
    href: "mailto:kontakt@christophrenz.de",
  },
  {
    label: "Cults",
    value: "Https://Cults3d.Com/En/Users/FactoryLNG/3d-Models",
    // Cults3D hat kein Icon in gängigen Icon-Sets — Cube als thematischer Ersatz
    // (3D-Druck-Plattform). Farbe ist eine eigene Wahl, keine verifizierte Markenfarbe.
    Icon: FaCube,
    color: "#FF7A30",
    href: "https://cults3d.com/en/users/FactoryLNG/3d-models",
  },
];

const rowClass =
  "group flex items-center gap-4 self-start md:gap-[8.6vw] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

/*
  Mobil: Größen in rem, damit Icons und Text auf kleinen Screens gut lesbar sind.
  Ab md: die bisherigen vw-Werte.
*/
export default function ContactList() {
  return (
    <section id="kontakt" className="py-12 md:py-[4vw]">
      <h2 className="px-5 text-base font-regular uppercase text-accent md:px-0 md:pl-[10.8vw] md:text-[1.5vw]">
        // Kontakt List
      </h2>

      <div className="mt-8 flex flex-col gap-6 px-5 md:mt-[6vw] md:gap-[3.6vw] md:px-0 md:pl-[27.3vw]">
        {contacts.map((contact) => {
          const Icon = contact.Icon;

          const content: ReactNode = (
            <>
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D9D9D9] md:h-[5vw] md:w-[5vw]"
                style={{ "--hover-color": contact.color } as CSSProperties}
              >
                <Icon className="h-6 w-6 text-[#4A4A4A] transition-colors duration-300 group-hover:text-[color:var(--hover-color)] md:h-[2.2vw] md:w-[2.2vw]" />
              </div>
              {/* min-w-0 + break-words: lange URLs (z. B. Cults) brechen mobil um statt über den Rand zu laufen */}
              <div className="min-w-0">
                <p className="font-display text-lg uppercase text-white md:text-[1.3vw]">
                  {contact.label}
                </p>
                <p className="break-words text-sm text-soft transition-colors duration-300 group-hover:text-white md:text-[1.1vw]">
                  {contact.value}
                </p>
              </div>
            </>
          );

          // Ohne Link: normale Zeile
          if (!contact.href) {
            return (
              <div key={contact.label} className={rowClass}>
                {content}
              </div>
            );
          }

          // Externe Seiten im neuen Tab, mailto: im selben Fenster (öffnet das Mailprogramm)
          const isExternal = contact.href.startsWith("http");

          return (
            <a
              key={contact.label}
              href={contact.href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={rowClass}
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}
