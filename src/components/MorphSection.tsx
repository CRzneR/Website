"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphSectionMobile from "./MorphSectionMobile";

gsap.registerPlugin(ScrollTrigger);

const PATTERN = [
  { text: "Christoph Renz", goesLeft: false, color: "#1D2E11" },
  { text: "Webdeveloper", goesLeft: true, color: "#f0f476" },
];

const LINE_COUNT = 6;
const CENTER_SPREAD = 6;

const LINES = Array.from({ length: LINE_COUNT }, (_, i) => PATTERN[i % PATTERN.length]);

const CERTS = [
  {
    title: "AZ-900",
    issuer: "Microsoft",
    year: "01/2025",
    image: "/image/certification/azure.png",
  },
  {
    title: "CompTIA Tech+ (V6)",
    issuer: "CompTIA",
    year: "10/2025",
    image: "/image/certification/compTIA.png",
  },
  {
    title: "WDE™",
    issuer: "JS Institute",
    year: "02/2025",
    image: "/image/certification/WDE.png",
  },
  {
    title: "JSE™",
    issuer: "JS Institute",
    year: "05/2025",
    image: "/image/certification/JSE.png",
  },
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
          { x: "0%", duration: 6, ease: "power2.out" },
          i === 0 ? "<0.5" : "<",
        );
      });

      tl.to({}, { duration: 1.5 });

      tl.to(
        box,
        {
          borderRadius: "32px",
          width: "432px",
          height: "576px",
          duration: 3.5,
          ease: "power2.inOut",
        },
        ">",
      );

      tl.fromTo(
        list,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
        ">0.3",
      );

      tl.fromTo(
        certs,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 2, ease: "power2.out" },
        ">0.3",
      );

      return () => ScrollTrigger.getAll().forEach((st) => st.kill());
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <div ref={outerRef} className="relative h-[850vh]" style={{ background: "#151515" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center gap-8">
            {/* ── Links: Beschreibungstext (nur Desktop) ── */}
            <div
              ref={listRef}
              className="hidden md:flex flex-col gap-4 select-none flex-shrink-0"
              style={{ opacity: 0, width: "280px" }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-1"
                style={{ color: "#FBFF83" }}
              >
                My profile
              </p>

              <p
                className="text-base md:text-lg font-medium leading-snug"
                style={{ color: "#CEC9C9" }}
              >
                I build web applications tailored to your needs, combining thoughtful UI & UX design
                with seamless functionality to create outstanding user experiences.
              </p>
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
                const topPct = 50 + (i - (LINE_COUNT - 1) / 2) * CENTER_SPREAD;
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      linesRef.current[i] = el;
                    }}
                    className="absolute pointer-events-none select-none"
                    style={{
                      top: `${topPct}%`,
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "max-content",
                      zIndex: i, // sorgt für definierte Stapel-Reihenfolge beim Überlappen
                    }}
                  >
                    <span
                      className="whitespace-nowrap uppercase leading-none"
                      style={{
                        fontSize: "clamp(90px, 16vw, 260px)",
                        fontWeight: 900,
                        letterSpacing: "-0.03em",
                        WebkitTextStroke: `1.5px ${color}`,
                        color,
                      }}
                    >
                      {text}
                    </span>
                  </div>
                );
              })}

              {/* ── Portrait – liegt über den Lines ── */}
              <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
                <img
                  src="/image/CR_gross.png"
                  alt="Christoph Renz"
                  className="h-[95%] w-auto object-contain object-bottom"
                  style={{ filter: "drop-shadow(0 0 40px rgba(0,0,0,0.25))" }}
                />
              </div>
            </div>

            {/* ── Rechts: Zertifikat-Kacheln (nur Desktop) ── */}

            <div
              ref={certsRef}
              className="hidden md:flex flex-col gap-3 flex-shrink-0"
              style={{ opacity: 0, width: "280px" }}
            >
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-1"
                style={{ color: "#FBFF83" }}
              >
                Certificates
              </p>
              <div className="grid grid-cols-2 gap-3">
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
                      className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden mx-auto p-1"
                      style={{ background: "#FEFFA422" }}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold leading-tight"
                        style={{ color: "#CEC9C9" }}
                      >
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
      </div>

      <MorphSectionMobile />
    </>
  );
}
