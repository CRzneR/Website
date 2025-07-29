"use client";

import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "../../UxProjects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCardList = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useGSAP(() => {
    const firstCard = cardsRef.current[0];
    if (!firstCard) return;

    const content = firstCard.querySelector(".content");

    // Timeline für Card + Inhalt
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstCard,
        start: "center center",
        end: "bottom  80%",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
    });

    // Skaliere die Card
    tl.to(firstCard, {
      scale: 6,
      transformOrigin: "center center",
      ease: "power1.out",
    });

    // Verstecke den Inhalt parallel
    if (content) {
      tl.to(
        content,
        {
          opacity: 0,
          ease: "power1.out",
        },
        "<" // startet gleichzeitig mit der Skalierung
      );
    }
  }, []);

  return (
    <div className="flex gap-6 justify-center items-center">
      <div ref={(el) => addToRefs(el, 0)}>
        <ProjectCard
          title="Lifas"
          subtitle="Online Marketplace"
          logo="/image/lifas/LifasLogo.png"
        />
      </div>
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
