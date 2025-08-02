"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteLifas } from "./SiteLifas";
import { ProjectCard } from "../../UxProjects/ProjectCard";

// GSAP Plugin registrieren
gsap.registerPlugin(ScrollTrigger);

const ScalingCardLifas = () => {
  const scaleBoxRef = useRef(null);

  useEffect(() => {
    const scaleBox = scaleBoxRef.current;

    const animation = gsap.to(scaleBox, {
      scaleX: 8, // Skaliert nur horizontal
      scaleY: 5, // Skaliert nur vertikal
      scrollTrigger: {
        trigger: scaleBox,
        start: "top top", // Startet beim oberen Rand des Elements
        end: "=+2000", // Endet beim unteren Rand des Viewports
        scrub: true, // Sanfter Übergang beim Scrollen
        markers: false, // Debug-Marker anzeigen
        toggleActions: "play reverse play reverse",
      },
    });

    // Cleanup-Funktion
    return () => {
      animation.scrollTrigger?.kill(); // ScrollTrigger beenden
      animation.kill(); // GSAP-Animation beenden
    };
  }, []); // Leeres Array bedeutet, dass dieser Effekt nur einmal beim Mounten ausgeführt wird

  return (
    <div className="h-[650vh] relative bg-[#151515]">
      {/* spacer */}
      <div className="h-[7%]"></div>

      <div
        ref={scaleBoxRef}
        className="sticky top-[20%] h-[400px] w-[350px] bg-[#CEC9C9] mx-auto  flex items-center justify-center "
      >
        <ProjectCard
          title="Lifas"
          subtitle="Online Marketplace"
          logo="/image/lifas/LifasLogo.png"
        />
      </div>

      {/* spacer */}
      <div className="h-[14%]"></div>

      <section className=" relative z-10 mb-20">
        <SiteLifas />
      </section>
    </div>
  );
};

export default ScalingCardLifas;
