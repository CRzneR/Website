"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteVert } from "./SiteVert";
import { ProjectCard } from "../../UxProjects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ScalingCardVert = () => {
  const scaleBoxRef1 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scaleBox1 = scaleBoxRef1.current;
    if (!scaleBox1) return;

    let animation: gsap.core.Tween;

    const setup = () => {
      animation?.scrollTrigger?.kill();
      animation?.kill();

      const elementWidth = scaleBox1.offsetWidth;
      const targetScale = window.innerWidth / elementWidth;

      console.log("elementWidth:", elementWidth, "targetScale:", targetScale);

      if (elementWidth === 0 || !isFinite(targetScale)) {
        return;
      }

      animation = gsap.to(scaleBox1, {
        scaleX: targetScale,
        scaleY: targetScale,
        scrollTrigger: {
          trigger: scaleBox1,
          start: "top top",
          end: "+=2000",
          scrub: true,
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      });

      ScrollTrigger.refresh();
    };

    const raf = requestAnimationFrame(setup);
    window.addEventListener("resize", setup);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setup);
      animation?.scrollTrigger?.kill();
      animation?.kill();
    };
  }, []);

  return (
    <div className="h-[600vh] relative bg-[#151515]">
      <div className="h-[10%]"></div>
      <div
        ref={scaleBoxRef1}
        className="sticky top-[20%] h-[400px] w-[350px] bg-[#CEC9C9] mx-auto flex items-center justify-center"
      >
        <ProjectCard
          title="Vert City"
          subtitle="Online Marketplace"
          logo="/image/vert/VertLogo.svg"
        />
      </div>
      <div className="h-[14%]"></div>
      <section className="relative z-10">
        <SiteVert />
      </section>
    </div>
  );
};

export default ScalingCardVert;
