"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalScroll from "./HorizontalScroll";

gsap.registerPlugin(ScrollTrigger);

export function Description() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headings = headingRefs.current.filter(
      Boolean
    ) as HTMLParagraphElement[];

    if (headings.length > 0) {
      // Initialzustand: Elemente rechts außerhalb und unsichtbar
      gsap.set(headings, {
        x: 100,
        opacity: 0,
      });

      // ScrollTrigger für jedes Element mit progressiver Verzögerung
      headings.forEach((heading, index) => {
        gsap.to(heading, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${index * 100} 75%`, // Progressiver Startpunkt
            end: "top 50%",
            scrub: 0.5, // Sanftes Scroll-Linking
            markers: false,
            toggleActions: "play none none none",
          },
        });
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addToRefs = (el: HTMLParagraphElement | null, index: number) => {
    headingRefs.current[index] = el;
  };

  return (
    <div className="relative w-full">
      {/* Hauptinhalt */}
      <div ref={containerRef} className="flex px-20 z-20 pb-[100vh]">
        {" "}
        {/* pb für Platz am Ende */}
        <div>
          <Image
            src="/image/lifasTitelbild.png"
            alt="Lifas Plattform"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div ref={descriptionRef} className="w-[400px] pl-20">
          Lifas ist eine Plattform, auf der Privatpersonen Werbeflächen, die
          sich in ihrem Besitz befinden, online zur Verfügung stellen können.
          Unternehmen haben die Möglichkeit, diese Werbeflächen bei ihnen zu
          mieten. Das Modell zielt besonders auf lokale Unternehmen ab, die für
          ihre Angebote werben möchten.
        </div>
        <div className="text-3xl pl-40">
          <p ref={(el) => addToRefs(el, 0)}>Research</p>
          <p ref={(el) => addToRefs(el, 1)}>Architektur</p>
          <p ref={(el) => addToRefs(el, 2)}>Prototyping</p>
        </div>
      </div>

      {/* HorizontalScroll ganz unten */}
      <div className="sticky bottom-0 left-0  z-10">
        <HorizontalScroll />
      </div>
    </div>
  );
}
