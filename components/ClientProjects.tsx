import Image from "next/image";
import Reveal from "@/components/Effects/Reveal";

const projects = [
  {
    name: "CelesteHomeDesign",
    role: "Webdesign/ Entwicklung/ Self Management",
    src: "/projects/celestehomedesign.png",
  },
  {
    name: "Kevin Kamin",
    role: "Webdesign/ Entwicklung",
    src: "/projects/kevin-kamin.png",
  },
];

export default function ClientProjects() {
  return (
    <section id="portfolio" className="py-[10vw]">
      <h2 className="pl-[8.6vw] font-regular text-[1.5vw] uppercase text-accent">
        // CLIENT PROJEKTS
      </h2>

      <div className="mt-[4vw] flex flex-col gap-[6.2vw]">
        {projects.map((project, i) => (
          /*
            Layout wie in der Vorlage: Bild links, Text direkt daneben, vertikal mittig.
            Jede zweite Zeile ist eingerückt und beginnt dort, wo das Bild darüber endet
            (7.1vw + 32.1vw Bildbreite = 39.2vw).

            flex-row-reverse + justify-end: Im Code steht der Text VOR dem Bild,
            angezeigt wird das Bild trotzdem links. So blendet Reveal mit stagger
            weiterhin zuerst den Text und danach das Bild ein.
          */
          <Reveal
            as="div"
            key={project.name}
            stagger={0.35}
            distance={50}
            duration={1}
            className={`flex flex-row-reverse items-center justify-end gap-[1.2vw] ${
              i % 2 === 1 ? "pl-[39.2vw]" : "pl-[7.1vw]"
            }`}
          >
            <div>
              <p className="whitespace-nowrap font-display text-[5vw] uppercase leading-[0.9] text-[#EAE9EA]">
                {project.name}
              </p>
              <p className="mt-[0.5vw] text-[1.1vw] uppercase text-[#EAE9EA]">{project.role}</p>
            </div>

            {/* Einheitlicher Bildrahmen – unterschiedliche Screenshot-Formate werden per object-cover zugeschnitten */}
            <div className="relative aspect-[827/395] w-[32.1vw] shrink-0 overflow-hidden">
              <Image
                src={project.src}
                alt={project.name}
                fill
                sizes="32vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
