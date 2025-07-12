"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollHeadingsProps {
  headings: string[];
  headingStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const Leistungen: React.FC<ScrollHeadingsProps> = ({
  headings,
  headingStyle = {},
  containerStyle = {},
}) => {
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !headingsRef.current.length) return;

    const validHeadings = headingsRef.current.filter(
      Boolean
    ) as HTMLHeadingElement[];

    // Master Timeline
    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 55%",
        end: "top 30%",
        scrub: 2,
        markers: false,
      },
    });

    // Animations-Phasen für alle Überschriften
    validHeadings.forEach((heading, index) => {
      // Phase 1: Einblenden auf 70%
      masterTL.fromTo(
        heading,
        { opacity: 0 },
        { opacity: 0.5, duration: 0.8 },
        index * 0.3
      );

      // Phase 2: Auf 100% hervorheben
      masterTL.to(
        heading,
        { opacity: 1, duration: 0.6 },
        `+=${0.2 + index * 0.1}`
      );

      // Phase 3: Zurück auf 80%
      masterTL.to(heading, { opacity: 0.5, duration: 0.9 }, `+=0.1`);
    });

    // Phase 4: Alle gemeinsam ausblenden
    masterTL.to(
      validHeadings,
      {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      },
      ">0.5" // 0.5s nach der letzten Einzelanimation
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [headings]);

  return (
    <div
      ref={containerRef}
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        ...containerStyle,
      }}
    >
      {headings.map((text, index) => (
        <h2
          key={`heading-${index}`}
          ref={(el) => {
            headingsRef.current[index] = el;
          }}
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            margin: "0 0 1rem 0",
            opacity: 0,
            lineHeight: "1.0",
            ...headingStyle,
          }}
        >
          {text}
        </h2>
      ))}
      <div style={{ height: "50vh" }} />
    </div>
  );
};

export default Leistungen;
