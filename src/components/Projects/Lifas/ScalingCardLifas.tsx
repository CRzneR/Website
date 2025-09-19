"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteLifas } from "./SiteLifas";
import { ProjectCard } from "../../UxProjects/ProjectCard";

// Plugin registrieren
gsap.registerPlugin(ScrollTrigger);

const ScalingCardLifas = () => {
  const scaleBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scaleBox = scaleBoxRef.current;

    const animation = gsap.to(scaleBox, {
      scaleX: 7,
      scaleY: 7,
      scrollTrigger: {
        trigger: scaleBox,
        start: "top top",
        end: "+=2000",
        scrub: true,
        markers: false,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div className="h-[650vh] relative bg-[#151515]">
      {/* spacer */}
      <div className="h-[7%]" />

      {/* nur Hintergrund wird gescaled */}
      <div
        ref={scaleBoxRef}
        className="sticky top-[20%] h-[400px] w-[350px] mx-auto flex items-center justify-center"
      >
        {/* Hintergrund separat */}
        <div className="absolute inset-0 bg-[#CEC9C9]" />

        {/* Inhalt bleibt gleich */}
        <div className="relative z-10">
          <ProjectCard
            title="Lifas"
            subtitle="Online Marketplace"
            logo="/image/lifas/LifasLogo.png"
          />
        </div>
      </div>

      {/* spacer */}
      <div className="h-[14%]" />

      <section className="relative z-10 mb-20">
        <SiteLifas />
      </section>
    </div>
  );
};

export default ScalingCardLifas;
