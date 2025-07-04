"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div ref={containerRef}>
      <div className="flex justify-between items-center px-[10%]">
        <Image
          src="/image/pokemon.png"
          alt="Image description"
          width={400}
          height={400}
        />
      </div>
      <div ref={descriptionRef} className="w-[400px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque
        tenetur obcaecati alias officiis pariatur error nulla unde aliquid ad
        blanditiis libero labore aperiam tempore, perspiciatis placeat repellat
        architecto omnis.
      </div>
      <div className="text-3xl">
        <p ref={(el) => addToRefs(el, 0)}>Überschrift 1</p>
        <p ref={(el) => addToRefs(el, 1)}>Überschrift 2</p>
        <p ref={(el) => addToRefs(el, 2)}>Überschrift 3</p>
      </div>
    </div>
  );
}
