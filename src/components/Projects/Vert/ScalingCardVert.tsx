"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteVert } from "./SiteVert";
import { ProjectCard } from "../../UxProjects/ProjectCard";

// GSAP Plugin registrieren
gsap.registerPlugin(ScrollTrigger);

const ScalingCardVert = () => {
  const scaleBoxRef1 = useRef(null);

  useEffect(() => {
    const scaleBox1 = scaleBoxRef1.current;

    const animation = gsap.to(scaleBox1, {
      scaleX: 7, // Skaliert nur horizontal
      scaleY: 7, // Skaliert nur vertikal
      scrollTrigger: {
        trigger: scaleBox1,
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
    <div className="h-[600vh] relative bg-[#151515] ">
      <div className="h-[10%]"></div>

      <div
        ref={scaleBoxRef1}
        className="sticky top-[20%] h-[400px] w-[350px] bg-[#CEC9C9] mx-auto  flex items-center justify-center "
      >
        <ProjectCard
          title="Vert City"
          subtitle="Online Marketplace"
          logo="/image/vert/VertLogo.svg"
        />
      </div>

      <div className="h-[14%]"></div>

      <section className=" relative z-10">
        <SiteVert />
      </section>
    </div>
  );
};

export default ScalingCardVert;
