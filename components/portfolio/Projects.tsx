export type Category = "Websites" | "Web Apps" | "SEO" | "Branding";

export type Project = {
  title: string;
  /* Kleines Label über dem Titel */
  type: "Website" | "Web App";
  year: number;
  description: string;
  /* Angezeigte Tags */
  tags: string[];
  /* Für Filter */
  categories: Category[];
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Celeste HomeDesign",
    type: "Website",
    year: 2025,
    description:
      "Moderne Website mit individuellem CMS, das dem Kunden ermöglicht, Produkte und Inhalte selbstständig zu verwalten und aktuell zu halten.",
    tags: ["Webdesign", "Entwicklung", "SEO", "Branding"],
    categories: ["Websites", "SEO", "Branding"],
    image: "/projects/celestehomedesign.png",
    href: "https://celestehomedesign.de",
  },
  {
    title: "Bilanzbalance",
    type: "Web App",
    year: 2026,
    description:
      "Persönliches Haushaltsbuch mit intuitiver Benutzeroberfläche und leistungsstarker Datenanalyse.",
    tags: ["Web App", "UX/UI", "Entwicklung", "Finanzen"],
    categories: ["Web Apps"],
    image: "/projects/bilanzbalance-app.png",
    href: "https://bilanzbalance.de/pages/login.html",
  },
  {
    title: "Kevin Kamin",
    type: "Website",
    year: 2026,
    description:
      "Professionelle Website für einen selbstständigen Energieberater – mit klarer Leistungsdarstellung, moderner Gestaltung und intuitiver Nutzerführung für einen vertrauensvollen digitalen Auftritt.",
    tags: ["Webdesign", "Entwicklung", "SEO"],
    categories: ["Websites", "SEO"],
    image: "/projects/kevin-kamin.png",
  },
  {
    title: "BeerPong Sportstec",
    type: "Web App",
    year: 2026,
    description:
      "Zentrale Plattform für BeerPong mit integrierter Turnierverwaltung und persönlicher Statistik-App. Spieler können Turniere organisieren, eigene Leistungen tracken, ihre Entwicklung verfolgen und die Statistiken anderer Spieler einsehen.",
    tags: ["Web App", "Entwicklung", "Community", "UX/UI"],
    categories: ["Web Apps"],
    image: "/projects/beerpong-app.png",
    href: "https://www.beerpongsportstec.de",
  },
];

export const FILTERS: ("Alle Projekte" | Category)[] = [
  "Alle Projekte",
  "Websites",
  "Web Apps",
  "SEO",
  "Branding",
];
