"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type ScrollWordsProps = {
  /** Der Text – wird in einzelne Wörter zerlegt */
  children: string;
  /** HTML-Element, das gerendert wird (Standard: p) */
  as?: ElementType;
  className?: string;
  /** Deckkraft der noch nicht "erreichten" Wörter (wird ignoriert, wenn dimColor gesetzt ist) */
  dim?: number;
  /** Farbe der noch nicht "erreichten" Wörter, z. B. "#151515". Blendet dann per Farbe statt Deckkraft über */
  dimColor?: string;
  /** true = hängt direkt am Scroll; Zahl = Nachziehen in Sekunden */
  scrub?: boolean | number;

  /* ---------- ohne Pin ---------- */
  /** ScrollTrigger-Start: Oberkante des Texts erreicht 80 % der Viewporthöhe */
  start?: string;
  /** ScrollTrigger-Ende: Unterkante des Texts erreicht 45 % der Viewporthöhe */
  end?: string;

  /* ---------- mit Pin ---------- */
  /** Block festhalten, während die Wörter erscheinen */
  pin?: boolean;
  /** Selektor des Elements, das festgehalten wird (per closest() gesucht). Ohne Angabe: der Text selbst */
  pinTarget?: string;
  /** Scrollstrecke, über die der Block festgehalten wird */
  pinLength?: string;
  /** Element, unter dem der Block andockt (z. B. dein sticky Header). Seine Höhe wird als Abstand genutzt */
  offsetSelector?: string;
  /** Anteil der Scrollstrecke, in dem der fertige Text noch stehen bleibt, bevor es weitergeht */
  hold?: number;
};

export default function ScrollWords({
  children,
  as: Tag = "p",
  className,
  dim = 0.15,
  dimColor,
  scrub = true,
  start = "top 80%",
  end = "bottom 45%",
  pin = false,
  pinTarget,
  pinLength = "+=150%",
  offsetSelector = "header",
  hold = 0.2,
}: ScrollWordsProps) {
  const ref = useRef<HTMLElement>(null);

  // JSX-Zeilenumbrüche und Einrückungen werden zu einfachen Leerzeichen
  const words = useMemo(() => children.trim().split(/\s+/), [children]);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Bei reduzierter Bewegung bleibt der Text vollständig sichtbar und nichts wird gepinnt
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-word]");
    const pinEl = pin ? ((pinTarget ? el.closest<HTMLElement>(pinTarget) : null) ?? el) : null;

    const ctx = gsap.context(() => {
      const scrollTrigger: ScrollTrigger.Vars = pinEl
        ? {
            trigger: pinEl,
            // Andocken direkt unter dem Header – wird bei Resize neu gemessen
            start: () => {
              const offset = document.querySelector<HTMLElement>(offsetSelector)?.offsetHeight ?? 0;
              return `top top+=${offset}`;
            },
            end: pinLength,
            pin: pinEl,
            scrub,
            invalidateOnRefresh: true,
          }
        : { trigger: el, start, end, scrub };

      const tl = gsap.timeline({ scrollTrigger });

      // Zielfarbe = die normale Textfarbe des Elements (z. B. text-white)
      const fromVars: gsap.TweenVars = dimColor ? { color: dimColor } : { opacity: dim };
      const toVars: gsap.TweenVars = dimColor
        ? { color: getComputedStyle(el).color }
        : { opacity: 1 };

      tl.fromTo(targets, fromVars, { ...toVars, ease: "none", duration: 0.5, stagger: 0.1 });

      // Kurze Pause am Ende, damit der fertige Text sichtbar stehen bleibt, bevor der Pin endet
      if (pinEl && hold > 0) {
        tl.to({}, { duration: tl.duration() * hold });
      }
    }, el);

    return () => ctx.revert();
  }, [words, dim, dimColor, scrub, start, end, pin, pinTarget, pinLength, offsetSelector, hold]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} data-word="">
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
