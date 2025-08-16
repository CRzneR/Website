"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MdSubdirectoryArrowRight } from "react-icons/md";
import HorizontalScrollLifas from "./HorizontalScrollLifas";

gsap.registerPlugin(ScrollTrigger);

export function DescriptionLifas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<(HTMLDivElement | null)[]>([]); // Changed to div
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headings = headingRefs.current.filter(Boolean) as HTMLDivElement[];

    if (headings.length > 0) {
      gsap.set(headings, {
        x: 100,
        opacity: 0,
      });

      headings.forEach((heading, index) => {
        gsap.to(heading, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${index * 100} 75%`,
            end: "top 50%",
            scrub: 0.2,
            markers: false,
            toggleActions: "play none none none",
          },
        });
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    headingRefs.current[index] = el;
  };

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="flex px-20 z-20 pb-[100vh]">
        <div>
          <Image
            src="/image/lifasTitelbild.png"
            alt="Lifas Plattform"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div ref={descriptionRef} className="w-[40%] pl-20">
          Lifas ist eine Plattform, auf der Privatpersonen Werbeflächen in ihrem
          Besitz online zur Verfügung stellen können. Die Plattform funktioniert
          wie ein Online-Marktplatz: Nutzer können Inserate für ihre Grundstücke
          oder Flächen erstellen und diese zur Vermarktung anbieten. <br />
          Unternehmen haben die Möglichkeit, auf diese Inserate ein Angebot
          abzugeben und die Flächen anzumieten. Kommt es zu einer Einigung,
          entsteht ein Vertrag zwischen den Parteien. Das Modell richtet sich
          insbesondere an lokale Unternehmen, die für ihre Angebote in der
          Region werben möchten.
        </div>
        <div className="text-3xl pl-24">
          <div ref={(el) => addToRefs(el, 0)} className="flex items-center">
            <MdSubdirectoryArrowRight className="mr-2" />
            Research
          </div>
          <div ref={(el) => addToRefs(el, 1)} className="flex items-center">
            <MdSubdirectoryArrowRight className="mr-2" />
            Architektur
          </div>
          <div ref={(el) => addToRefs(el, 2)} className="flex items-center">
            <MdSubdirectoryArrowRight className="mr-2" />
            Prototyping
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 left-0 z-10">
        <HorizontalScrollLifas />
      </div>
    </div>
  );
}
