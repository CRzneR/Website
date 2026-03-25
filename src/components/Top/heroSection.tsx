"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeadingEffect from "./HeadingEffect";
import LogoAnimation from "./LogoAnimation";

export default function HeroSection() {
  const pRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const tl = gsap.timeline();

    // h2 Texte einblenden
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 4, // nach deinem Heading Effekt
        ease: "power3.out",
      }
    );

    // scroll text danach
    tl.fromTo(
      pRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

   return (
    <section className="relative h-screen bg-[#151515] overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <LogoAnimation />
      </div>

      <div className="relative flex flex-col justify-center h-full">
        <div className=" mx-auto">
          <HeadingEffect />

          <div ref={textRef} className="text-center text-[#828282] text-2xl sm:text-3xl opacity-0 pt-8 sm:pt-0">
            <h2>Designing the experiences around them.</h2>
            <h2>Developing modern websites & web apps.</h2>
          </div>

          <div className="absolute bottom-0 left-0 w-full text-center text-[#D9D9D9] pb-8">
            <p ref={pRef} style={{ opacity: 0 }}>
              scroll to explore <span>&darr;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}