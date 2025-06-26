"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type StickyScrollContainerProps = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string; // Tailwind-Klasse, z.B. 'bg-blue-100'
  pinDistance?: number; // Wie lange es sticky bleibt (in px), z.B. 300
};

const stickyContainer: React.FC<StickyScrollContainerProps> = ({
  children,
  className = "",
  backgroundColor = "bg-blue-100",
  pinDistance = 300,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${pinDistance}`,
      pin: true,
      pinSpacing: false,
      scrub: false,
    });

    return () => {
      trigger.kill();
    };
  }, [pinDistance]);

  return (
    <div
      ref={containerRef}
      className={`w-full ${backgroundColor} ${className}`}
    >
      {children}
    </div>
  );
};

export default stickyContainer;
