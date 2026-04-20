"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tween = gsap.to(barRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        scroller: window,
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "3px" }}>
      <div ref={barRef} style={{ height: "100%", width: "0%", background: "#828282" }} />
    </div>
  );
}
