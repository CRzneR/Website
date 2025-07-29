"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "../../UxProjects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCardListVert = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useGSAP(() => {
    // Animation NUR für die zweite Karte (Vert City)
    const secondCard = cardsRef.current[1];
    if (secondCard) {
      const secondContent = secondCard.querySelector(".content");
      const tlSecond = gsap.timeline({
        scrollTrigger: {
          trigger: secondCard,
          start: "center center",
          end: "bottom 80%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      });

      tlSecond.to(secondCard, {
        scale: 6,
        transformOrigin: "center center",
        ease: "power1.out",
      });

      if (secondContent) {
        tlSecond.to(secondContent, { opacity: 0, ease: "power1.out" }, "<");
      }
    }
  }, []);

  return (
    <div className="flex gap-6 justify-center items-center">
      {/* Linke Karte (Lifas) – OHNE Animation */}
      <div ref={(el) => addToRefs(el, 0)}>
        <ProjectCard
          title="Lifas"
          subtitle="Online Marketplace"
          logo="/image/lifas/LifasLogo.png"
        />
      </div>

      {/* Rechte Karte (Vert City) – MIT Animation */}
      <div ref={(el) => addToRefs(el, 1)}>
        <ProjectCard
          title="Vert City"
          subtitle="Service Application"
          logo="/image/vert/VertLogo.svg"
        />
      </div>
    </div>
  );
};
