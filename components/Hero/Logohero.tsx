"use client";

import { useEffect, useId, useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import styles from "./LogoHero.module.css";

// Pfade aus CR.svg – gemeinsames Koordinatensystem 430 × 493
const VIEWBOX = "0 0 430 493";
const W = 430;
const H = 493;
const A = "245, 252, 123"; // Akzent #F5FC7B

type LetterKey = "C" | "R";

type LetterConfig = {
  d: string;
  edge: string;
  glow: number;
  back: string;
  side: string;
  faceTop: string;
  faceBottom: string;
  portal?: { x: number; y: number; w: number; h: number };
};

const LETTERS: Record<LetterKey, LetterConfig> = {
  C: {
    d: "M331.75 66.625V188.056H251.185V95.9029H144.245V464.037H251.185V331.566H331.75V491.875H47.375V66.625H331.75Z",
    edge: `rgba(${A}, .42)`, // vordere Kante (Grundleuchten)
    glow: 3, // Glow-Stärke
    back: `rgba(${A}, .3)`, // hintere Kante
    side: `rgba(${A}, .035)`, // Seitenwände (Glas)
    faceTop: "rgba(21, 21, 21, .18)",
    faceBottom: `rgba(${A}, .07)`,
    portal: { x: 144.245, y: 95.9029, w: 106.94, h: 368.134 }, // Lichtschacht im C
  },
  R: {
    d: "M1 56.5859V1H428.875V222.385L397.696 254.97L428.875 284.68V371.652V458.625H340.134V323.015H242.759V453.833H155.937V105.942H242.759V196.509H340.134V56.5859H1Z",
    edge: `rgba(${A}, .24)`,
    glow: 2.5,
    back: `rgba(${A}, .18)`,
    side: `rgba(${A}, .025)`,
    faceTop: "rgba(21, 21, 21, .15)",
    faceBottom: `rgba(${A}, .03)`,
  },
};

const LAYERS = 24; // Schichten pro Buchstabe
const STEP = 2; // Tiefe pro Schicht (Logo-Einheiten)
const MAX_Y = 22; // Grad links/rechts
const MAX_X = 14; // Grad oben/unten
const MAX_SPLIT = 5; // max. Versatz der Farbanteile (Lichtbrechung)
const CENTER = { x: W / 2, y: H / 2 };

const SERVICES = ["Webdesign", "Entwicklung", "Web Apps", "SEO"];

// Licht-Typen: Radius (Logo-Einheiten) + Stops [offset, farbe, max. deckkraft]
type LightType = "core" | "dispA" | "dispB" | "side" | "face";
type LightStop = [offset: number, color: string, max: number];

const LIGHTS: Record<LightType, { r: number; stops: LightStop[] }> = {
  core: {
    r: 120,
    stops: [
      [0, "#FFFFFF", 1],
      [0.3, "#FAFFC2", 0.95],
      [0.65, "#F5FC7B", 0.45],
      [1, "#F5FC7B", 0],
    ],
  },
  dispA: {
    r: 115,
    stops: [
      [0, "#6CFFE0", 1],
      [0.5, "#6CFFE0", 0.4],
      [1, "#6CFFE0", 0],
    ],
  },
  dispB: {
    r: 115,
    stops: [
      [0, "#FFB84D", 1],
      [0.5, "#FFB84D", 0.35],
      [1, "#FFB84D", 0],
    ],
  },
  side: {
    r: 130,
    stops: [
      [0, "#FAFFC2", 0.55],
      [0.5, "#F5FC7B", 0.15],
      [1, "#F5FC7B", 0],
    ],
  },
  face: {
    r: 160,
    stops: [
      [0, "#F5FC7B", 0.22],
      [1, "#F5FC7B", 0],
    ],
  },
};

function LightGradient({ id, type }: { id: string; type: LightType }) {
  const cfg = LIGHTS[type];
  return (
    <radialGradient
      id={id}
      gradientUnits="userSpaceOnUse"
      cx="-999"
      cy="-999"
      r={cfg.r}
      data-light=""
    >
      {cfg.stops.map(([offset, color, max]) => (
        <stop
          key={offset}
          offset={offset}
          stopColor={color}
          stopOpacity="0"
          {...(max > 0 ? { "data-max": max } : {})}
        />
      ))}
    </radialGradient>
  );
}

function Layer({ depth, children }: { depth: number; children: ReactNode }) {
  return (
    <svg
      viewBox={VIEWBOX}
      className={styles.layer}
      style={{ "--d": depth } as CSSProperties}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ExtrudedLetter({
  letter,
  className,
  uid,
}: {
  letter: LetterKey;
  className: string;
  uid: string;
}) {
  const data = LETTERS[letter];
  const p = `${uid}-${letter}`; // eindeutiges ID-Präfix
  const sideIndices = Array.from({ length: LAYERS - 1 }, (_, i) => LAYERS - 1 - i); // hinten → vorne

  return (
    <div className={`${styles.letter} ${className}`}>
      {data.portal && (
        <Layer depth={(LAYERS - 1) * STEP}>
          <defs>
            <linearGradient id={`${p}-portal`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={`rgba(${A}, 0)`} />
              <stop offset=".55" stopColor={`rgba(${A}, .10)`} />
              <stop offset="1" stopColor={`rgba(${A}, .6)`} />
            </linearGradient>
          </defs>
          <rect
            x={data.portal.x}
            y={data.portal.y}
            width={data.portal.w}
            height={data.portal.h}
            fill={`url(#${p}-portal)`}
          />
        </Layer>
      )}

      {sideIndices.map((i) => {
        const isBack = i === LAYERS - 1;
        const lightId = `${p}-side-${i}`;
        return (
          <Layer key={i} depth={i * STEP}>
            <defs>
              <LightGradient id={lightId} type="side" />
            </defs>
            <path
              d={data.d}
              fill="none"
              stroke={isBack ? data.back : data.side}
              strokeWidth={isBack ? 1.4 : 2.4}
            />
            <path d={data.d} fill="none" stroke={`url(#${lightId})`} strokeWidth={2.4} />
          </Layer>
        );
      })}

      <Layer depth={0}>
        <defs>
          <linearGradient id={`${p}-face`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={data.faceTop} />
            <stop offset="1" stopColor={data.faceBottom} />
          </linearGradient>
          <filter id={`${p}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={data.glow} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <LightGradient id={`${p}-l-face`} type="face" />
          <LightGradient id={`${p}-l-core`} type="core" />
          <LightGradient id={`${p}-l-a`} type="dispA" />
          <LightGradient id={`${p}-l-b`} type="dispB" />
        </defs>

        {/* Glasfläche + Schimmer im Glas */}
        <path d={data.d} fill={`url(#${p}-face)`} />
        <path d={data.d} fill={`url(#${p}-l-face)`} />
        {/* Grundleuchten der Kante */}
        <path
          d={data.d}
          fill="none"
          stroke={data.edge}
          strokeWidth={1.6}
          filter={`url(#${p}-glow)`}
        />
        {/* Gebrochenes Licht: zwei farbige, versetzte Kopien */}
        <path d={data.d} fill="none" stroke={`url(#${p}-l-a)`} strokeWidth={1.8} data-disp="a" />
        <path d={data.d} fill="none" stroke={`url(#${p}-l-b)`} strokeWidth={1.8} data-disp="b" />
        {/* Heller Lichtkern auf der Kante */}
        <path
          d={data.d}
          fill="none"
          stroke={`url(#${p}-l-core)`}
          strokeWidth={3}
          filter={`url(#${p}-glow)`}
        />
      </Layer>
    </div>
  );
}

export default function LogoHero() {
  const heroRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    const hero = heroRef.current;
    const logo = logoRef.current;
    const scene = sceneRef.current;
    if (!hero || !logo || !scene) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // ---------- Licht ----------
    const gradients = Array.from(hero.querySelectorAll<SVGRadialGradientElement>("[data-light]"));
    const stops = Array.from(
      hero.querySelectorAll<SVGStopElement>("[data-light] stop[data-max]"),
    ).map((s) => ({
      el: s,
      max: parseFloat(s.dataset.max ?? "0"),
    }));
    const dispA = Array.from(hero.querySelectorAll<SVGPathElement>('[data-disp="a"]'));
    const dispB = Array.from(hero.querySelectorAll<SVGPathElement>('[data-disp="b"]'));

    const light = { x: CENTER.x, y: CENTER.y, i: 0 };
    const target = { x: CENTER.x, y: CENTER.y, i: 0 };
    const EASE = reduceMotion ? 1 : 0.16;
    let rafId: number | null = null;
    let driftId: number | null = null;

    const renderLight = () => {
      const cx = light.x.toFixed(1);
      const cy = light.y.toFixed(1);
      for (const g of gradients) {
        g.setAttribute("cx", cx);
        g.setAttribute("cy", cy);
      }
      for (const s of stops) s.el.setAttribute("stop-opacity", (s.max * light.i).toFixed(3));

      const vx = CENTER.x - light.x;
      const vy = CENTER.y - light.y;
      const len = Math.hypot(vx, vy) || 1;
      const k = Math.min(len / 180, 1) * MAX_SPLIT;
      const dx = ((vx / len) * k).toFixed(2);
      const dy = ((vy / len) * k).toFixed(2);
      for (const p of dispA) p.setAttribute("transform", `translate(${-dx} ${-dy})`);
      for (const p of dispB) p.setAttribute("transform", `translate(${dx} ${dy})`);
    };

    const tick = () => {
      light.x += (target.x - light.x) * EASE;
      light.y += (target.y - light.y) * EASE;
      light.i += (target.i - light.i) * EASE;
      renderLight();
      const settled =
        Math.abs(target.x - light.x) < 0.1 &&
        Math.abs(target.y - light.y) < 0.1 &&
        Math.abs(target.i - light.i) < 0.005;
      rafId = settled ? null : requestAnimationFrame(tick);
    };
    const wake = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    // Bildschirmposition → Logo-Koordinaten (Frontalprojektion der Bühne)
    const setLightFromPointer = (clientX: number, clientY: number) => {
      const r = logo.getBoundingClientRect();
      target.x = ((clientX - r.left) / r.width) * W;
      target.y = ((clientY - r.top) / r.height) * H;
      target.i = 1;
      wake();
    };

    if (!canHover && !reduceMotion) {
      // Touch: Licht wandert langsam über die Kanten
      target.i = 0.8;
      let t = 0;
      const drift = () => {
        t += 0.006;
        target.x = CENTER.x + Math.cos(t) * 190;
        target.y = CENTER.y + Math.sin(t * 1.3) * 210;
        wake();
        driftId = requestAnimationFrame(drift);
      };
      driftId = requestAnimationFrame(drift);
    }

    // ---------- Kippen ----------
    const ctx = gsap.context(() => {
      gsap.set(scene, { rotationX: 0, rotationY: 0 });
      if (reduceMotion) return;

      gsap.from(scene, { rotationY: -55, rotationX: 22, duration: 1.8, ease: "expo.out" });

      if (!canHover) {
        gsap.to(scene, {
          keyframes: [
            { rotationY: 12, rotationX: -4, duration: 3 },
            { rotationY: -12, rotationX: 4, duration: 6 },
            { rotationY: 0, rotationX: 0, duration: 3 },
          ],
          delay: 1.8,
          ease: "sine.inOut",
          repeat: -1,
        });
      }
    }, hero);

    const toX =
      !reduceMotion && canHover
        ? gsap.quickTo(scene, "rotationX", { duration: 0.9, ease: "power3.out" })
        : null;
    const toY =
      !reduceMotion && canHover
        ? gsap.quickTo(scene, "rotationY", { duration: 0.9, ease: "power3.out" })
        : null;

    const onMove = (e: PointerEvent) => {
      setLightFromPointer(e.clientX, e.clientY);
      if (toX && toY) {
        const r = hero.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1; // -1 … 1
        const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
        toY(nx * MAX_Y);
        toX(-ny * MAX_X);
      }
    };
    const onLeave = () => {
      target.i = 0;
      wake();
      if (toX && toY) {
        toX(0);
        toY(0);
      }
    };

    if (canHover) {
      hero.addEventListener("pointermove", onMove);
      hero.addEventListener("pointerleave", onLeave);
    }

    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
      if (driftId) cancelAnimationFrame(driftId);
      gsap.killTweensOf(scene);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Dünne Leiste links als Akzent (ab md) */}
      <span aria-hidden="true" className={styles.rail} />

      {/* ---------- Text links ---------- */}
      <div className={styles.intro}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowIndex}>{"// 01"}</span>
          Digital Development
        </p>
        <h1 className={styles.title}>
          Digitale
          <br />
          <span className={styles.titleAccent}>Lösungen.</span>
        </h1>
        <p className={styles.text}>
          Ich entwickle performante Websites und digitale Erlebnisse – authentisch im Konzept,
          sauber im Code und mit Fokus auf echte Ergebnisse.
        </p>
        <a href="#portfolio" className={styles.cta}>
          Projekte entdecken
          <span aria-hidden="true" className={styles.ctaArrow}>
            →
          </span>
        </a>
      </div>

      {/* ---------- 3D-Logo ---------- */}
      <div ref={logoRef} className={styles.logo} role="img" aria-label="Logo Christoph Renz">
        <div ref={sceneRef} className={styles.scene}>
          <div className={styles.floor} />
          <ExtrudedLetter letter="R" className={styles.letterR} uid={uid} />
          <ExtrudedLetter letter="C" className={styles.letterC} uid={uid} />
        </div>
      </div>

      {/* ---------- Leistungen unten links ---------- */}
      <ul className={styles.services} aria-label="Leistungen">
        {SERVICES.map((service, i) => (
          <li key={service} className={styles.service}>
            {service}
            <span className={styles.serviceIndex}>{String(i + 1).padStart(2, "0")}</span>
          </li>
        ))}
      </ul>

      {/* ---------- Spalte rechts (ab md) ---------- */}
      <div className={styles.aside}>
        <ol className={styles.steps} aria-label="Arbeitsweise">
          <li>Think</li>
          <li>Design</li>
          <li>Develop</li>
          <li>Deploy</li>
          <li>Repeat</li>
        </ol>
        <p className={styles.system}>
          System / 001
          <br />
          Christoph Renz
        </p>
        <a href="#about" className={styles.scroll}>
          <span className={styles.scrollLabel}>Scroll</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
