import { FaTiktok, FaGithub, FaLinkedin, FaEnvelope, FaCube } from "react-icons/fa";
import type { IconType } from "react-icons";

const contacts: {
  label: string;
  value: string;
  Icon: IconType;
  color: string;
}[] = [
  {
    label: "TikTok",
    value: "Github.Com/ChristophRenz",
    Icon: FaTiktok,
    color: "#EE1D52", // TikTok-Rosa
  },
  {
    label: "GitHub",
    value: "Github.Com/ChristophRenz",
    Icon: FaGithub,
    color: "#181717", // offizielles GitHub-Schwarz (GitHub hat keine "bunte" Markenfarbe)
  },
  {
    label: "LinkedIn",
    value: "Github.Com/ChristophRenz",
    Icon: FaLinkedin,
    color: "#0A66C2", // offizielles LinkedIn-Blau
  },
  {
    label: "E-Mail",
    value: "kontakt@ChristophRenz.de",
    Icon: FaEnvelope,
    color: "#EA4335", // generisches "Mail-Rot", keine echte Marke dahinter
  },
  {
    label: "Cults",
    value: "Https://Cults3d.Com/En/Users/FactoryLNG/3d-Models",
    // Cults3D hat kein Icon in gängigen Icon-Sets — Cube als thematischer Ersatz
    // (3D-Druck-Plattform). Farbe ist eine eigene Wahl, keine verifizierte Markenfarbe.
    Icon: FaCube,
    color: "#FF7A30",
  },
];

export default function ContactList() {
  return (
    <section id="kontakt" className="py-[4vw]">
      <h2 className="pl-[10.8vw] font-regular text-[1.5vw] uppercase text-accent uppercase">
        // Kontakt List
      </h2>

      <div className="mt-[6vw] flex flex-col gap-[3.6vw] pl-[27.3vw]">
        {contacts.map((contact) => {
          const Icon = contact.Icon;
          return (
            <div key={contact.label} className="group flex items-center gap-[8.6vw]">
              <div
                className="flex h-[5vw] w-[5vw] shrink-0 items-center justify-center rounded-full bg-[#D9D9D9]"
                style={{ "--hover-color": contact.color } as React.CSSProperties}
              >
                <Icon className="h-[2.2vw] w-[2.2vw] text-[#4A4A4A] transition-colors duration-300 group-hover:text-[color:var(--hover-color)]" />
              </div>
              <div>
                <p className="font-display text-[1.3vw] uppercase text-white">{contact.label}</p>
                <p className="text-[1.1vw] text-soft">{contact.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
