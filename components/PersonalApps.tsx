import Image from "next/image";
import Reveal from "./Effects/Reveal";

const apps = [
  {
    title: "Bilanzbalance",
    description: "Persönliches Haushaltsbuch spezialisiert auf Fixkosten",
    tags: ["Finanzen", "Webapp", "Webapp"],
    logo: "/projects/bilanzbalance-logo.png",
    logoWidth: 140,
    logoHeight: 120,
    background: "/projects/bilanzbalance-app.png",
    href: "https://bilanzbalance.de/pages/login.html",
  },
  {
    title: "BeerpongSportsTec",
    description: "Plattform mit Tunierfunktion und Statistik erfassung",
    tags: ["Finanzen", "Webapp", "Webapp"],
    logo: "/projects/beerpong-logo.png",
    logoWidth: 225,
    logoHeight: 195,
    background: "/projects/beerpong-app.png",
    href: "https://www.beerpongsportstec.de",
  },
];

export default function PersonalApps() {
  return (
    <section className="py-[10vw]">
      <h2 className="px-5 text-base font-regular uppercase text-accent md:px-0 md:pl-[8.6vw] md:text-[1.5vw]">
        // my personal Web Aplications
      </h2>

      <Reveal
        as="div"
        stagger={0.2}
        className="mt-6 grid grid-cols-1 gap-4 px-5 md:mt-[3vw] md:grid-cols-2 md:gap-[2.9vw] md:px-[6.5vw]"
      >
        {apps.map((app) => (
          <a
            key={app.title}
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${app.title} – App öffnen (neues Fenster)`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:aspect-[698/443] md:rounded-[1.2vw]"
          >
            <Image
              src={app.background}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

            <div className="relative flex h-full flex-col p-5 md:p-[2.2vw]">
              <Image
                src={app.logo}
                alt=""
                width={app.logoWidth}
                height={app.logoHeight}
                className="h-12 w-auto object-contain object-left md:h-[6.2vw]"
              />

              <h3 className="mt-3 font-display text-3xl leading-none text-white md:mt-[1vw] md:text-[2.5vw]">
                {app.title}
              </h3>
              <p className="mt-2 max-w-[85%] text-sm text-soft md:mt-[0.8vw] md:max-w-[60%] md:text-[1vw]">
                {app.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 md:mt-[1.2vw] md:gap-[0.6vw]">
                {app.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-[#4A4A4A] px-3 py-1 text-xs text-white md:px-[0.9vw] md:py-[0.35vw] md:text-[0.8vw]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pfeil */}
              <span
                aria-hidden="true"
                className="mt-auto flex h-10 w-10 items-center justify-center self-end rounded-full border border-white/70 text-white transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-[#151515] md:h-[3vw] md:w-[3vw]"
              >
                →
              </span>
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
