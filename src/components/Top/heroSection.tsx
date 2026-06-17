"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeadingEffect from "./HeadingEffect";
import LogoAnimation from "./LogoAnimation";

const HEADING_DELAY = 4;

export default function HeroSection() {
  const pRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !pRef.current) return;

    gsap.set([textRef.current, pRef.current], { opacity: 0 });

    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: HEADING_DELAY,
        ease: "power3.out",
      },
    ).fromTo(
      pRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen bg-[#151515] overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <LogoAnimation />
      </div>

      <div className="relative flex flex-col justify-center h-full">
        <div className="mx-auto">
          <HeadingEffect />

          <div
            ref={textRef}
            className="text-center text-[#828282] text-lg sm:text-3xl pt-8 sm:pt-0"
          >
            <p>Developing modern websites & web apps.</p>
            <p>Designing the experiences around them.</p>
          </div>

          <div className="absolute bottom-0 left-0 pb-8 pl-16">
            <p ref={pRef} style={{ opacity: 0 }} className="text-[#D9D9D9]">
              scroll to explore <span>&darr;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
