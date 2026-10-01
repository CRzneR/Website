import ServiceBlock, { ServiceBlockProps } from "./ServiceBlock";
import { DevVisual, SeoVisual, WebAppVisual, WebDesignVisual } from "./Visuals";

const services: Omit<ServiceBlockProps, "index" | "flipped">[] = [
  {
    id: "webdesign",
    title: "Web",
    titleAccent: "Design",
    subtitle:
      "Moderne Websites mit klarem Design, starker Nutzerführung und einem Fokus auf deine Ziele.",
    text: "Ich gestalte moderne, individuelle Websites, die nicht nur gut aussehen, sondern auch funktionieren – responsiv, schnell und auf deine Zielgruppe abgestimmt.",
    points: [
      "Individuelles UI/UX-Design",
      "Responsiv für alle Geräte",
      "Conversion-optimierte Struktur",
      "Modern, minimal und zielgerichtet",
    ],
    cta: { label: "Web Design anfragen", href: "/kontakt" },
    visual: <WebDesignVisual />,
    keywordsTop: ["UI / UX", "Branding", "Figma", "Responsive", "Interaction"],
    keywordsBottom: ["Pixel", "to", "Results"],
  },
  {
    id: "entwicklung",
    title: "Entwicklung",
    subtitle: "Saubere, skalierbare und zukunftssichere Webentwicklung.",
    text: "Ich setze deine Ideen technisch präzise um – von statischen Websites bis hin zu komplexen Web-Anwendungen. Effizient, wartbar und performant.",
    points: [
      "Frontend- & Backend-Entwicklung",
      "Sauberer & moderner Code",
      "API-Integrationen & Schnittstellen",
      "Skalierbare Architektur",
    ],
    cta: { label: "Entwicklung anfragen", href: "/kontakt" },
    visual: <DevVisual />,
    keywordsTop: ["Frontend", "Backend", "Databases", "APIs", "Deployment"],
    keywordsBottom: ["Build", "Deploy", "Scale"],
  },
  {
    id: "webapps",
    title: "Web",
    titleAccent: "Apps",
    subtitle: "Individuelle Web-Applikationen für echte Mehrwerte.",
    text: "Ich entwickle maßgeschneiderte Web Apps, die Abläufe vereinfachen, Prozesse automatisieren und genau zu deinen Anforderungen passen.",
    points: [
      "Individuelle Web-Applikationen",
      "Dashboards & Datenvisualisierung",
      "Benutzerverwaltung & Rollen",
      "Automatisierung von Prozessen",
    ],
    cta: { label: "Web App anfragen", href: "/kontakt" },
    visual: <WebAppVisual />,
    keywordsTop: ["Web Apps", "Automation", "Dashboards", "Realtime"],
    keywordsBottom: ["Build", "Automate", "Grow"],
  },
  {
    id: "seo",
    title: "SEO",
    subtitle: "Mehr Sichtbarkeit. Mehr Reichweite. Mehr Möglichkeiten.",
    text: "Ich optimiere deine Website technisch und inhaltlich für Suchmaschinen – damit deine Ideen die Menschen erreichen, die danach suchen.",
    points: [
      "Technische SEO-Optimierung",
      "OnPage- & Content-Optimierung",
      "Performance & Core Web Vitals",
      "Langfristige Strategie",
    ],
    cta: { label: "SEO anfragen", href: "/kontakt" },
    visual: <SeoVisual />,
    keywordsTop: ["Technical SEO", "OnPage", "Content", "Performance", "Analytics"],
    keywordsBottom: ["Rank", "Grow", "Succeed"],
  },
];

export default function ServicesList() {
  return (
    <>
      {services.map((service, i) => (
        <ServiceBlock key={service.id} {...service} index={i + 1} flipped={i % 2 === 1} />
      ))}
    </>
  );
}
