"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteLifas } from "./SiteLifas";
import { ProjectCard } from "../../UxProjects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ScalingCardLifas = () => {
  const scaleBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scaleBox = scaleBoxRef.current;
    if (!scaleBox) return;

    let animation: gsap.core.Tween;

    const setup = () => {
      animation?.scrollTrigger?.kill();
      animation?.kill();

      const elementWidth = scaleBox.offsetWidth;
      const targetScale = window.innerWidth / elementWidth;

      animation = gsap.to(scaleBox, {
        scaleX: targetScale,
        scaleY: targetScale,
        scrollTrigger: {
          trigger: scaleBox,
          start: "top top",
          end: "+=1800",
          scrub: true,
          markers: false,
        },
      });
    };

    setup();

    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      animation?.scrollTrigger?.kill();
      animation?.kill();
    };
  }, []);

  return (
    <div className="h-[650vh] relative bg-[#151515]">
      <div className="h-[7%]" />
      <div
        ref={scaleBoxRef}
        className="sticky top-[20%] h-[400px] w-[350px] mx-auto flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#CEC9C9]" />
        <div className="relative z-10">
          <ProjectCard
            title="Lifas"
            subtitle="Online Marketplace"
            logo="/image/lifas/LifasLogo.png"
          />
        </div>
      </div>
      <div className="h-[14%]" />
      <section className="relative z-10 mb-20">
        <SiteLifas />
      </section>
    </div>
  );
};

export default ScalingCardLifas;
