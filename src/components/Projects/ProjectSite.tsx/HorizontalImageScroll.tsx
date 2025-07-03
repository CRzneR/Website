"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        markers: false, // Zum Debuggen auf true setzen
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
              <img
                src={src}
                alt={`Bild ${index + 1}`}
                className="w-full h-full object-cover  shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalImageScroll;
