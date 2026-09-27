import Image from "next/image";
import Reveal from "@/components/Effects/Reveal";

type Project = {
  name: string;
  role: string;
  src: string;

  href?: string;
};

const projects: Project[] = [
  {
    name: "CelesteHomeDesign",
    role: "Webdesign/ Entwicklung/ Self Management",
    src: "/projects/celestehomedesign.png",
    href: "https://celestehomedesign.de",
  },
  {
    name: "Kevin Kamin",
    role: "Webdesign/ Entwicklung",
    src: "/projects/kevin-kamin.png",
  },
];

const frameClass =
  "group relative block aspect-[827/395] w-full shrink-0 overflow-hidden md:w-[32.1vw]";

export default function ClientProjects() {
  return (
    <section id="portfolio" className="py-[10vw]">
      <h2 className="px-5 text-base font-regular uppercase text-accent md:px-0 md:pl-[8.6vw] md:text-[1.5vw]">
        // CLIENT PROJEKTS
      </h2>

      <div className="mt-6 flex flex-col gap-4 md:mt-[4vw] md:gap-[6.2vw]">
        {projects.map((project, i) => {
          const image = (
            <Image
              src={project.src}
              alt={project.name}
              fill
              sizes="(min-width: 768px) 32vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          );

          return (
            <Reveal
              as="div"
              key={project.name}
              stagger={0.35}
              distance={50}
              duration={1}
              className={`flex flex-col md:flex-row-reverse md:items-center md:justify-end md:gap-[1.2vw] ${
                i % 2 === 1 ? "md:pl-[39.2vw]" : "md:pl-[7.1vw]"
              }`}
            >
              <div className="hidden md:block">
                <p className="whitespace-nowrap font-display text-[5vw] uppercase leading-[0.9] text-[#EAE9EA]">
                  {project.name}
                </p>
                <p className="mt-[0.5vw] text-[1.1vw] uppercase text-[#EAE9EA]">{project.role}</p>
              </div>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} – Website öffnen (neues Fenster)`}
                  className={`${frameClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
                >
                  {image}
                </a>
              ) : (
                <div className={frameClass}>{image}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
