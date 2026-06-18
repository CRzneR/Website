"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINES = [
  { text: "Christoph Renz", goesLeft: false, color: "#1D2E11" },
  { text: "Webentwickler", goesLeft: true, color: "#FBFF83" },
  { text: "Christoph Renz", goesLeft: false, color: "#1D2E11" },
  { text: "Appentwickler", goesLeft: true, color: "#FBFF83" },
];

const LIST_ITEMS = ["UX Design", "Strategie", "Webentwicklung", "UI Design"];

const CERTS = [
  { title: "Zertifikat 1", issuer: "Anbieter", year: "2024" },
  { title: "Zertifikat 2", issuer: "Anbieter", year: "2024" },
  { title: "Zertifikat 3", issuer: "Anbieter", year: "2023" },
  { title: "Zertifikat 4", issuer: "Anbieter", year: "2023" },
];

export default function MorphSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const outer = outerRef.current;
    const box = boxRef.current;
    const list = listRef.current;
    const certs = certsRef.current;

    if (!outer || !box || !list || !certs) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      tl.fromTo(
        box,
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
      );

      linesRef.current.forEach((line, i) => {
        if (!line) return;
        const { goesLeft } = LINES[i];
        tl.fromTo(
          line,
          { x: goesLeft ? "105%" : "-105%" },
          { x: goesLeft ? "-105%" : "105%", duration: 6, ease: "none" },
          i === 0 ? "<0.5" : "<",
        );
      });

      tl.to({}, { duration: 1.5 });

      tl.to(
        box,
        {
          borderRadius: "32px",
          width: "360px",
          height: "480px",
          duration: 3.5,
          ease: "power2.inOut",
        },
        ">",
      );

      tl.fromTo(
        list,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
        "<1.5",
      );
      tl.fromTo(
        certs,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
        "<",
      );

      return () => ScrollTrigger.getAll().forEach((st) => st.kill());
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={outerRef} className="relative h-[700vh]" style={{ background: "#151515" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center gap-8">
          {/* ── Links: Aufzählung ── */}
          <div
            ref={listRef}
            className="flex flex-col gap-4 select-none flex-shrink-0"
            style={{ opacity: 0, width: "200px" }}
          >
            {LIST_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-sm" style={{ color: "#444" }}>
                  —
                </span>
                <span
                  className="text-base md:text-lg font-medium uppercase tracking-wide"
                  style={{ color: "#CEC9C9" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* ── Mitte: Haupt-Box ── */}
          <div
            ref={boxRef}
            className="relative flex items-center justify-center overflow-hidden flex-shrink-0"
            style={{
              width: "90vw",
              height: "85vh",
              borderRadius: "24px",
              background: "#FEFFA4",
              opacity: 0,
              willChange: "transform, border-radius, width, height, opacity",
            }}
          >
            {LINES.map(({ text, color }, i) => {
              const topPct = 20 + (i / (LINES.length - 1)) * 60;
              return (
                <div
                  key={i}
                  ref={(el) => {
                    linesRef.current[i] = el;
                  }}
                  className="absolute w-full pointer-events-none select-none"
                  style={{ top: `${topPct}%`, transform: "translateY(-50%)" }}
                >
                  <span
                    className="whitespace-nowrap font-black uppercase tracking-tighter leading-none"
                    style={{ fontSize: "clamp(36px, 7vw, 100px)", color }}
                  >
                    {text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── Rechts: Zertifikat-Kacheln ── */}
          <div
            ref={certsRef}
            className="grid grid-cols-2 gap-3 flex-shrink-0"
            style={{ opacity: 0, width: "200px" }}
          >
            {CERTS.map((cert, i) => (
              <div
                key={i}
                className="flex flex-col justify-between p-3 rounded-2xl"
                style={{
                  background: "#1e1e1e",
                  border: "1px solid #2e2e2e",
                  aspectRatio: "1 / 1",
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "#FEFFA422" }}
                >
                  <span style={{ fontSize: "14px" }}>🏅</span>
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight" style={{ color: "#CEC9C9" }}>
                    {cert.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#555" }}>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
