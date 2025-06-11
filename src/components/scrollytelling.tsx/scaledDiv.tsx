"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScalingContainer: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current || !containerRef.current) return;

    const div = divRef.current;
    const container = containerRef.current;
    const windowWidth = window.innerWidth;
    const targetWidth = windowWidth - 40;
    const scaleFactor = targetWidth / 300;

    // GSAP Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: "+=100px",
        scrub: true,
        onUpdate: (self) => {
          // Aktuellen Skalierungsfaktor berechnen
          const progress = self.progress;
          const currentScale = 1 + (scaleFactor - 1) * progress;

          // Container-Größe dynamisch anpassen
          container.style.width = `${300 * currentScale}px`;
          container.style.height = `${400 * currentScale}px`;
        },
      },
    });

    tl.to(div, {
      scale: scaleFactor,
      ease: "power1.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div
        ref={containerRef}
        className="flex justify-center items-center"
        style={{
          width: "300px",
          height: "400px",
          transition: "width 0.3s ease-out, height 0.3s ease-out",
        }}
      >
        <div
          ref={divRef}
          className="w-[300px] h-[400px] bg-blue-400 origin-center relative rounded-lg shadow-xl flex items-center justify-center"
        >
          <span className="text-white font-bold text-xl">Scroll down</span>
        </div>
      </div>
    </div>
  );
};

export default ScalingContainer;
