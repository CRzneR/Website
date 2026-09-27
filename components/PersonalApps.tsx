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
  },
  {
    title: "BeerpongSportsTec",
    description: "Plattform mit Tunierfunktion und Statistik erfassung",
    tags: ["Finanzen", "Webapp", "Webapp"],
    logo: "/projects/beerpong-logo.png",
    logoWidth: 225,
    logoHeight: 195,
    background: "/projects/beerpong-app.png",
  },
];

export default function PersonalApps() {
  return (
    <section className="py-[10vw]">
      <h2 className="pl-[8.6vw] font-regular text-[1.5vw] uppercase text-accent">
        // my personal Web Aplications
      </h2>

      <Reveal>
        <div className="mt-[3vw] grid grid-cols-2 gap-[2.9vw] px-[6.5vw]">
          {apps.map((app, i) => (
            <div key={i} className="relative aspect-[698/443] overflow-hidden rounded-[1.2vw]">
              <Image src={app.background} alt={app.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

              <div className="relative flex h-full flex-col p-[2.2vw]">
                <Image
                  src={app.logo}
                  alt=""
                  width={app.logoWidth}
                  height={app.logoHeight}
                  className="h-[6.2vw] w-auto object-contain object-left"
                />

                <h3 className="mt-[1vw] font-display text-[2.5vw] leading-none text-white">
                  {app.title}
                </h3>
                <p className="mt-[0.8vw] max-w-[60%] text-[1vw] text-soft">{app.description}</p>

                <div className="mt-[1.2vw] flex gap-[0.6vw]">
                  {app.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#4A4A4A] px-[0.9vw] py-[0.35vw] text-[0.8vw] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  aria-label="Mehr erfahren"
                  className="mt-auto flex h-[3vw] w-[3vw] items-center justify-center self-end rounded-full border border-white/70 text-white"
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
