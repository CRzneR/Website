"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeadingEffect() {
  const designerRef = useRef<HTMLHeadingElement>(null);
  const developerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!designerRef.current || !developerRef.current) return;

    // Initialzustand
    gsap.set([designerRef.current, developerRef.current], {
      opacity: 0,
    });

    gsap.set(designerRef.current, {
      y: 100,
    });

    gsap.set(developerRef.current, {
      y: -100,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 4, // ⏳ Verzögerung in Sekunden
    });

    tl.to(
      designerRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      0
    );

    tl.to(
      developerRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="text-left mx-auto relative z-10 w-full max-w-screen-xl">
        <h1
          ref={designerRef}
          className="text-5xl  lg:text-8xl xl:text-[167px] font-bold text-[#D9D9D9] leading-tight break-words"
        >
          DESIGNER
        </h1>
        <h1
          ref={developerRef}
          className="md:pl-20 lg:pl-40 xl:pl-60 text-5xl  lg:text-8xl xl:text-[167px] font-bold text-[#D9D9D9] leading-tight break-words"
        >
          DEVELOPER
        </h1>
      </div>
    </div>
  );
}
