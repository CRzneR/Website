import Image from "next/image";
import ScrollWords from "@/components/Scrollwords";

const certificates = [
  { name: "iSAQB® CPSA-F Foundation Level", src: "/certificates/isaqb.png" },
  { name: "CompTIA Tech+", src: "/certificates/comptia-techplus.png" },
  { name: "Microsoft Certified Fundamentals", src: "/certificates/ms-fundamentals.png" },
  { name: "OpenEDG JS Institute — WDE", src: "/certificates/openedg-wde.png" },
  { name: "OpenEDG JS Institute — JSE", src: "/certificates/openedg-jse.png" },
];

export default function About() {
  return (
    <section id="about" className="pb-[6vw] pt-[2vw]">
      {/*
        Name über die volle Breite: Schriftgröße so gewählt, dass der Schriftzug knapp
        in 87vw (100vw - 2 × 6.5vw Padding) passt. Der kleine Rest wird per Blocksatz
        in die Lücke zwischen den Wörtern verteilt, sodass beide Ränder exakt bündig sind.
        whitespace-nowrap verhindert einen Umbruch, falls es doch minimal zu breit wird.
      */}
      <h2 className="w-full whitespace-nowrap px-[6.5vw] text-justify font-display text-[15vw] uppercase leading-[0.85] tracking-tight text-accent [text-align-last:justify]">
        Christoph Renz
      </h2>

      <div className="relative mt-[1vw]">
        {/*
          top-[-7vw]: Porträt ragt in den Namen hinein.
          mask-image: Bild läuft nach unten in Transparenz aus – ab 60 % der Höhe
          wird es weicher, am unteren Rand ist es komplett unsichtbar.
        */}
        <Image
          src="/images/christoph-portrait.png"
          alt="Christoph Renz"
          width={693}
          height={980}
          className="absolute left-[3.4vw] top-[-7vw] z-0 h-auto w-[43vw] max-w-none [-webkit-mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)]"
          priority
        />

        <ScrollWords
          dimColor="#151515"
          className="relative z-10 pl-[39vw] pr-[6.5vw] pt-[10.7vw] text-[3.2vw] font-extrabold uppercase leading-[1.55] text-white"
        >
          Ich liebe es, aus einer Idee etwas Greifbares zu machen. Dabei verbinde ich kreatives
          Design mit sauberer Entwicklung und entwickle Websites und Webanwendungen, die klar,
          intuitiv und ein bisschen anders sind.
        </ScrollWords>

        <h3 className="relative z-10 mt-[3.5vw] pl-[31.4vw] font-display text-[1.7vw] text-accent">
          Zertifikate
        </h3>

        <div className="relative z-10 mt-[1.4vw] flex gap-[2.4vw] pl-[31.4vw]">
          {certificates.map((cert) => (
            <div
              key={cert.name}
              className="w-[10.4vw] shrink-0 overflow-hidden rounded-[0.9vw] bg-card-badge"
              title={cert.name}
            >
              <Image
                src={cert.src}
                alt={cert.name}
                width={173}
                height={198}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
