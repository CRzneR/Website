"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HorizontalImageScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Berechne den benötigten Scroll-Bereich
    const contentWidth = content.scrollWidth;
    const containerWidth = container.offsetWidth;
    const scrollDistance = contentWidth - containerWidth;

    // Animation mit GSAP
    gsap.to(content, {
      x: () => -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const images = [
    "/image/pokemon.png",
    "/image/pokemon.png",
    "/image/pokemon.png",
    "/image/pokemon.png",
    "/image/pokemon.png",
    "/image/pokemon.png",
    "/image/pokemon.png",
    "/image/pokemon.png",
  ];

  return (
    <section className="h-screen overflow-hidden">
      <div ref={containerRef} className="h-full w-full relative">
        <div
          ref={contentRef}
          className="absolute h-full flex items-center gap-8 px-8"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-[35vh] w-[50vh] flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Bild ${index + 1}`}
                fill
                className="object-cover shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalImageScroll;
