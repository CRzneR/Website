import Image from "next/image";
import ScrollWords from "@/components/Scrollwords";

export default function About() {
  return (
    <section id="about" className="pb-[6vw] pt-[2vw]">
      <h2 className="w-full whitespace-nowrap px-[6.5vw] text-justify font-display text-[15vw] uppercase leading-[0.85] tracking-tight text-accent [text-align-last:justify]">
        Christoph Renz
      </h2>

      <div className="relative mt-[1vw]">
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
          className="relative z-10 min-h-[53vw] pl-[39vw] pr-[6.5vw] pt-[10.7vw] text-[3.2vw] font-extrabold uppercase leading-[1.55] text-white"
        >
          Ich liebe es, aus einer Idee etwas Greifbares zu machen. Dabei verbinde ich kreatives
          Design mit sauberer Entwicklung und entwickle Websites und Webanwendungen, die klar,
          intuitiv und ein bisschen anders sind.
        </ScrollWords>
      </div>
    </section>
  );
}
