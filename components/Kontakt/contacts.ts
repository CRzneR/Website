import { FaTiktok, FaGithub, FaLinkedin, FaEnvelope, FaCube } from "react-icons/fa";
import type { IconType } from "react-icons";

export type Contact = {
  label: string;
  /** Kurzform, die in der Code-Liste in Anführungszeichen steht */
  value: string;
  Icon: IconType;
  href: string;
  /** In der Icon-Leiste "Direkt kontaktieren" anzeigen? */
  quick?: boolean;
};

/** Zentrale Kontaktdaten – hier ändern, gilt überall auf der Kontaktseite */
export const CONTACT_EMAIL = "kontakt@christophrenz.de";

export const contacts: Contact[] = [
  {
    label: "TikTok",
    value: "TikTok/FactoryLNG",
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@factoryLNG",
    quick: true,
  },
  {
    label: "GitHub",
    value: "GitHub/CRzneR",
    Icon: FaGithub,
    href: "https://github.com/CRzneR",
    quick: true,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn/ChristophRenz",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/christophrenz/",
    quick: true,
  },
  {
    label: "E-Mail",
    value: CONTACT_EMAIL,
    Icon: FaEnvelope,
    href: `mailto:${CONTACT_EMAIL}`,
    quick: true,
  },
  {
    label: "Cults",
    value: "FactoryLNG",
    Icon: FaCube,
    href: "https://cults3d.com/en/users/FactoryLNG/3d-models",
  },
];

/** Externe Seiten im neuen Tab, mailto: im selben Fenster */
export const linkProps = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
