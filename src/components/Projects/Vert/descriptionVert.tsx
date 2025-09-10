"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MdSubdirectoryArrowRight } from "react-icons/md";
import HorizontalScrollVert from "./HorizontalScrollVert";

gsap.registerPlugin(ScrollTrigger);

export function DescriptionVert() {
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
            src="/image/vert/VertTitel.png"
            alt="Bild von einem Laptop mit der Vertania City Webseite"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div ref={descriptionRef} className="w-[40%] pl-20">
          Vertania City ist eine fiktive Stadt, die sich selbst als grüne und
          mo- derne Stadt sieht. Für diese Stadt soll eine Homepage konzepiert
          und umgesetzt werden. Die Stadt legt dabei Ihren Fokus auf Tourismus
          und auf digitale Services. Die be- schreibt sich selbst als grüne und
          moderne Stadt. Es dreht sich hier- bei um moderne Services. Die Stadt
          möchte so viel wie möglich digi- talisieren und ein umfangreiches
          Angebot bieten.
        </div>
        <div className="text-3xl pl-24">
          <div ref={(el) => addToRefs(el, 0)} className="flex items-center">
            <MdSubdirectoryArrowRight className="mr-2" />
            Research
          </div>
          <div ref={(el) => addToRefs(el, 1)} className="flex items-center">
            <MdSubdirectoryArrowRight className="mr-2" />
            Anforderung
          </div>
          <div ref={(el) => addToRefs(el, 2)} className="flex items-center">
            <MdSubdirectoryArrowRight className="mr-2" />
            Architektur
          </div>
          <div ref={(el) => addToRefs(el, 3)} className="flex items-center">
            <MdSubdirectoryArrowRight className="mr-2" />
            Interaktionsdesign
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 left-0 z-10">
        <HorizontalScrollVert />
      </div>
    </div>
  );
}
