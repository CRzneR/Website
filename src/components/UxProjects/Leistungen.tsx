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

  useEffect(() => {
    if (typeof window === "undefined" || !headingsRef.current.length) return;

    const validHeadings = headingsRef.current.filter(
      Boolean
    ) as HTMLHeadingElement[];

    validHeadings.forEach((heading) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 70%",
          end: "top 50%",
          scrub: 0.5,
          markers: false,
        },
      });

      tl.fromTo(
        heading,
        { color: "#808080" },
        { color: "#000000", duration: 0.5 }
      ).to(heading, { color: "#808080", duration: 0.5 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [headings]);

  return (
    <div
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
            fontSize: "4rem",
            fontWeight: 700,
            margin: "0 0 1rem 0",
            color: "#808080",
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
