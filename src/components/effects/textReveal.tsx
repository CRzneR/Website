"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

function TextReveal() {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        markers: false,
        start: "top 80%",
        end: "bottom 95%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });

    return () => {
      anim.kill();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={triggerRef}>
      {text.split("").map((letter, index) => (
        <span
          className="text-6xl font-bold text-black"
          key={index}
          ref={(el) => {
            lettersRef.current[index] = el;
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

export default TextReveal;
