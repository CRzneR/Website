import Image from "next/image";
import Reveal from "./Effects/Reveal";

type App = {
  title: string;
  description: string;
  tags: string[];
  logo: string;
  logoWidth: number;
  logoHeight: number;
  background: string;
  href: string;
};

const apps: App[] = [
  {
    title: "Bilanzbalance",
    description: "Persönliches Haushaltsbuch spezialisiert auf Fixkosten.",
    tags: ["Web App", "Development", "Finanzen"],
    logo: "/projects/bilanzbalance-logo.png",
    logoWidth: 140,
    logoHeight: 120,
    background: "/projects/bilanzbalance-app.png",
    href: "https://bilanzbalance.de/pages/login.html",
  },
  {
    title: "BeerpongSportsTec",
    description: "Plattform mit Turnierfunktion und Statistik-Erfassung.",
    tags: ["Web App", "Development", "Community"],
    logo: "/projects/beerpong-logo.png",
    logoWidth: 225,
    logoHeight: 195,
    background: "/projects/beerpong-app.png",
    href: "https://www.beerpongsportstec.de",
  },
];

/** Optional: Ziel für „Alle Anwendungen ansehen“ – ohne Wert wird der Link nicht angezeigt */
const ALL_APPS_HREF: string | null = null;

export default function PersonalApps() {
  return (
    <section className="px-5 py-20 md:px-[6.5vw] md:py-28">
      {/* ---------- Kopfbereich ---------- */}
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-accent">{"// 03"}</p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl">
            My personal
            <br />
            <span className="text-accent">Web Applications</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-soft lg:text-lg">
            Hier findest du meine selbst entwickelten Plattformen – von der Idee bis zur Umsetzung.
          </p>
        </div>

        {ALL_APPS_HREF && (
          <a
            href={ALL_APPS_HREF}
            className="group inline-flex items-center gap-2 self-start text-sm text-white transition-colors hover:text-accent md:self-auto"
          >
            Alle Anwendungen ansehen
            <span
              aria-hidden="true"
              className="text-accent transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        )}
      </Reveal>

      {/* ---------- Karten ---------- */}
      <Reveal
        as="div"
        stagger={0.2}
        className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:gap-8"
      >
        {apps.map((app) => (
          /* Die ganze Karte ist der Link – bleibt direktes Kind von Reveal, damit stagger greift */
          <a
            key={app.title}
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${app.title} – Anwendung öffnen (neues Fenster)`}
            className="group relative flex min-h-[24rem] flex-col overflow-hidden rounded-2xl border border-accent/20 bg-[#1A1A1A] p-6 transition-[border-color,box-shadow] duration-500 hover:border-accent/60 hover:shadow-[0_0_60px_-15px_rgba(245,252,123,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:min-h-[24rem] lg:min-h-[26rem] lg:p-8"
          >
            {/* Hintergrundbild rechts, läuft nach links weich in die Karte aus */}
            <div className="absolute inset-y-0 right-0 w-full [-webkit-mask-image:linear-gradient(to_right,transparent,#000_55%)] [mask-image:linear-gradient(to_right,transparent,#000_55%)] md:w-[70%]">
              <Image
                src={app.background}
                alt=""
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover opacity-70 transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
              />
            </div>

            {/* Abdunklung, damit der Text immer lesbar bleibt */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />

            {/* Feiner Lichtschein oben links in Akzentfarbe */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-60" />

            {/* Inhalt */}
            <div className="relative flex max-w-[85%] flex-1 flex-col md:max-w-[60%]">
              <Image
                src={app.logo}
                alt=""
                width={app.logoWidth}
                height={app.logoHeight}
                className="h-16 w-auto self-start object-contain lg:h-20"
              />

              <h3 className="mt-6 font-display text-3xl leading-none text-white lg:text-4xl">
                {app.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-soft">{app.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* „Zur Anwendung“ unten rechts */}
            <span className="relative mt-8 inline-flex items-center gap-2 self-end text-sm text-white">
              Zur Anwendung
              <span
                aria-hidden="true"
                className="text-accent transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
