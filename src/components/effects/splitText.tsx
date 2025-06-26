"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface SplitTextAnimationProps {
  text: string;
  tag?: React.ElementType;
  className?: string;
  charClass?: string;
  animation?: {
    y?: number;
    opacity?: number;
    duration?: number;
    stagger?: number;
    ease?: string;
    scrub?: boolean;
  };
  scrollTrigger?: {
    start?: string;
    end?: string;
    toggleActions?: string;
    markers?: boolean;
  };
}

const SplitTextAnimation = ({
  text,
  tag: Wrapper = "div",
  className = "",
  charClass = "",
  animation = {},
  scrollTrigger = {},
}: SplitTextAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<GSAPAnimation>(null);

  // Default Animation Werte
  const {
    y = 130,
    opacity = 1,
    duration = 1,
    stagger = 0.05,
    ease = "back.out",
    scrub = false,
  } = animation;

  // Default ScrollTrigger Werte
  const {
    start = "top 80%",
    end = "bottom 10%",
    toggleActions = "play reverse play reverse",
    markers = false,
  } = scrollTrigger;

  useEffect(() => {
    if (!containerRef.current) return;

    const split = new SplitText(containerRef.current, {
      type: "chars",
      charsClass: `char ${charClass}`, // Tailwind Klassen für einzelne Chars
    });

    const animationConfig = {
      yPercent: y,
      opacity: opacity,
      stagger: stagger,
      ease: ease,
      duration: duration,
    };

    if (scrub) {
      // Flüssige, scroll-gesteuerte Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          scrub: true,
          markers,
        },
      });
      tl.from(split.chars, animationConfig);
      animationRef.current = tl;
    } else {
      // Toggle-basierte Animation
      animationRef.current = gsap.from(split.chars, {
        ...animationConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          toggleActions,
          markers,
        },
      });
    }

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animationRef.current?.kill();
    };
  }, [
    text,
    charClass,
    y,
    opacity,
    duration,
    stagger,
    ease,
    scrub,
    start,
    end,
    toggleActions,
    markers,
  ]);

  return (
    <Wrapper
      ref={containerRef}
      className={`inline-block overflow-hidden ${className}`}
    >
      {text}
    </Wrapper>
  );
};

export default SplitTextAnimation;
