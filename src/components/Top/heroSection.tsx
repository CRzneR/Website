"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeadingEffect from "./HeadingEffect";
import LogoAnimation from "./LogoAnimation";

export default function HeroSection() {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!pRef.current) return;

    gsap.fromTo(
      pRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        delay: 4.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden ">
      <div className="absolute inset-0 flex justify-center items-center">
        <LogoAnimation />
      </div>
      <div className="relative flex flex-col justify-center h-full px-8">
        <div className="text-left mx-auto">
          <HeadingEffect />
          <div className="absolute bottom-0 left-0 w-full text-center pb-8">
            <p ref={pRef} style={{ opacity: 0 }}>
              scroll to explore <span>&darr;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
