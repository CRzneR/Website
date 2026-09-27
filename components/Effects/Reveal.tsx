"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// useLayoutEffect im Browser (Startzustand wird vor dem Zeichnen gesetzt), useEffect auf dem Server
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type From = "bottom" | "top" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  /** HTML-Element, das gerendert wird (Standard: div) */
  as?: ElementType;
  /** Richtung, aus der der Inhalt kommt */
  from?: From;
  /** Weg in px */
  distance?: number;
  /** Dauer in Sekunden */
  duration?: number;
  /** Verzögerung in Sekunden */
  delay?: number;
  /** > 0: direkte Kinder nacheinander einblenden (Abstand in Sekunden) */
  stagger?: number;
  /** Startskalierung, z. B. 0.96 für leichtes Heranzoomen */
  scale?: number;
  /** Unschärfe beim Einblenden */
  blur?: boolean;
  /** true: nur einmal abspielen; false: beim Zurückscrollen wieder ausblenden */
  once?: boolean;
  /** ScrollTrigger-Startpunkt, z. B. "top 85%" = wenn die Oberkante 85 % der Viewporthöhe erreicht */
  start?: string;
  /** GSAP-Easing */
  ease?: string;
} & HTMLAttributes<HTMLElement>;

export default function Reveal({
  children,
  as: Tag = "div",
  from = "bottom",
  distance = 40,
  duration = 0.9,
  delay = 0,
  stagger = 0,
  scale = 1,
  blur = false,
  once = true,
  start = "top 85%",
  ease = "power3.out",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Bei reduzierter Bewegung bleibt der Inhalt einfach sichtbar
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = stagger > 0 ? Array.from(el.children) : [el];
    if (targets.length === 0) return;

    const offset: Record<From, gsap.TweenVars> = {
      bottom: { y: distance },
      top: { y: -distance },
      left: { x: -distance },
      right: { x: distance },
      none: {},
    };

    const fromVars: gsap.TweenVars = { autoAlpha: 0, ...offset[from] };
    const toVars: gsap.TweenVars = {
      autoAlpha: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: el,
        start,
        once,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    };

    if (scale !== 1) {
      fromVars.scale = scale;
      toVars.scale = 1;
    }
    if (blur) {
      fromVars.filter = "blur(10px)";
      toVars.filter = "blur(0px)";
    }
    // Nach einmaligem Abspielen Inline-Styles entfernen, damit nichts dauerhaft transformiert bleibt
    // (wichtig z. B. für position: sticky oder fixed in Kindelementen)
    if (once) {
      toVars.clearProps = "transform,filter";
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, toVars);
    }, el);

    return () => ctx.revert();
  }, [from, distance, duration, delay, stagger, scale, blur, once, start, ease]);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
