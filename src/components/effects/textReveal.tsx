"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TextReveal() {
  const [lettersRef, setlettersRef] = useArrayRef() as [
    React.RefObject<(HTMLSpanElement | null)[]>,
    (ref: HTMLSpanElement | null) => void
  ];
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    lettersRef.current = [];
    return [
      lettersRef,
      (ref: HTMLSpanElement | null) => ref && lettersRef.current.push(ref),
    ];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        markers: true,
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
  }, []);

  return (
    <>
      <div ref={triggerRef}>
        {text.split("").map((letter, index) => (
          <span
            className="text-6xl font-bold text-black"
            key={index}
            ref={setlettersRef}
          >
            {letter}
          </span>
        ))}
      </div>
    </>
  );
}

export default TextReveal;
