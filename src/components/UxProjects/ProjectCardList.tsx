"use client";

// components/ProjectCardList.tsx
import React, { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const ProjectCardList = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Unterschiedliche Startpositionen
      const fromY = 100 + index * 50; // 100, 150, 200

      // Gleiche Endposition für alle Cards
      const toY = -30;

      gsap.fromTo(
        card,
        { y: fromY, opacity: 0.8 },
        {
          y: toY,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "center 80%", // Früheres Ende
            scrub: true,
            // markers: true,
          },
          duration: 1,
        }
      );
    });
  }, []);

  return (
    <div className="flex gap-6 justify-center items-center">
      <div ref={(el) => addToRefs(el, 0)}>
        <ProjectCard title="LIFAS" subtitle="Online Marketplace" />
      </div>
      <div ref={(el) => addToRefs(el, 1)}>
        <ProjectCard title="Verte City" subtitle="Service Application" />
      </div>
      <div ref={(el) => addToRefs(el, 2)}>
        <ProjectCard
          title="Titel of the project"
          subtitle="Now it´s your turn"
        />
      </div>
    </div>
  );
};
