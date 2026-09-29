"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Reveal from "@/components/Effects/Reveal";

type Certificate = {
  title: string;
  category: string;
  fullName: string;
  src: string;
  pdf?: string;
};

const certificates: Certificate[] = [
  {
    title: "iSAQB CPSA-F\nFoundation Level",
    category: "Architektur",
    fullName: "iSAQB® CPSA-F Foundation Level",
    src: "/certificates/isaqb.png",
    pdf: "/certificates/pdf/isaqb.pdf",
  },
  {
    title: "CompTIA\nTech+",
    category: "IT-Grundlagen",
    fullName: "CompTIA Tech+",
    src: "/certificates/comptia-techplus.png",
    pdf: "/certificates/pdf/CompTIA.pdf",
  },
  {
    title: "Microsoft Certified\nFundamentals",
    category: "Cloud",
    fullName: "Microsoft Certified Fundamentals",
    src: "/certificates/ms-fundamentals.png",
    pdf: "/certificates/pdf/Azure-900.png",
  },
  {
    title: "OpenEDG JS Institute\nWDE",
    category: "Web",
    fullName: "OpenEDG JS Institute — WDE",
    src: "/certificates/openedg-wde.png",
    pdf: "/certificates/pdf/WebDeveloper.pdf",
  },
  {
    title: "OpenEDG JS Institute\nJSE",
    category: "JavaScript",
    fullName: "OpenEDG JS Institute — JSE",
    src: "/certificates/openedg-jse.png",
    pdf: "/certificates/pdf/openedg-jse.pdf",
  },
];

export default function Certificates() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false); // passt die Reihe nicht in die Breite?
  const [atEnd, setAtEnd] = useState(false);

  // Prüfen, ob die Reihe überläuft und ob das Ende erreicht ist
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const check = () => {
      setCanScroll(el.scrollWidth > el.clientWidth + 1);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    const resizeObserver = new ResizeObserver(check);
    resizeObserver.observe(el);
    el.addEventListener("scroll", check, { passive: true });
    check();

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("scroll", check);
    };
  }, []);

  // Weiterblättern – am Ende zurück an den Anfang
  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="zertifikate" className="px-5 py-20 md:px-[6.5vw] md:py-28">
      {/* ---------- Kopfbereich ---------- */}
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:gap-10">
        <div className="relative shrink-0 pl-5 pt-3">
          {/* Eckige Klammer oben links als Akzent */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-12 w-6 border-l border-t border-accent/60"
          />
          <p className="text-sm text-accent">{"// 05"}</p>
          <h2 className="mt-1 font-display text-4xl uppercase leading-none text-white md:text-5xl lg:text-6xl">
            Zertifikate
          </h2>
        </div>

        {/* Linie, die nach rechts ausläuft */}
        <span
          aria-hidden="true"
          className="mb-4 hidden h-px flex-1 bg-gradient-to-r from-accent/70 via-white/20 to-transparent md:block"
        />

        <p className="max-w-xs text-sm leading-relaxed text-soft md:mb-2 lg:text-base">
          Kontinuierliches Lernen ist für mich selbstverständlich.
        </p>
      </Reveal>

      {/* ---------- Karten ---------- */}
      <div className="relative mt-10 md:mt-14">
        {/* Äußeres div scrollt horizontal, Reveal darin blendet die Karten nacheinander ein */}
        <div
          ref={scrollerRef}
          className="snap-x snap-mandatory overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <Reveal as="div" stagger={0.1} distance={30} className="flex w-max gap-4">
            {certificates.map((cert, i) => {
              const cardClass = `group relative flex w-44 shrink-0 snap-start flex-col items-center rounded-2xl border bg-white/[0.03] px-4 pb-6 pt-8 text-center transition-[border-color,box-shadow] duration-500 hover:border-accent/60 hover:shadow-[0_0_40px_-12px_rgba(245,252,123,0.35)] lg:w-52 ${
                i === 0 ? "border-accent/40" : "border-white/10"
              }`;

              const content: ReactNode = (
                <>
                  <div className="relative h-20 w-20 lg:h-24 lg:w-24">
                    <Image
                      src={cert.src}
                      alt={cert.fullName}
                      fill
                      sizes="96px"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-6 whitespace-pre-line text-sm leading-snug text-white lg:text-base">
                    {cert.title}
                  </p>
                  <p className="mt-3 text-xs text-muted">{cert.category}</p>

                  {cert.pdf && (
                    <span className="mt-4 inline-flex items-center gap-1 text-xs text-accent/70 transition-colors duration-300 group-hover:text-accent">
                      PDF ansehen
                      <span aria-hidden="true">↗</span>
                    </span>
                  )}
                </>
              );

              // Mit PDF: Karte ist ein Link und bleibt direktes Kind von Reveal (für stagger)
              return cert.pdf ? (
                <a
                  key={cert.fullName}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${cert.fullName} – PDF öffnen`}
                  aria-label={`${cert.fullName} – Zertifikat als PDF öffnen (neues Fenster)`}
                  className={`${cardClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
                >
                  {content}
                </a>
              ) : (
                <div key={cert.fullName} title={cert.fullName} className={cardClass}>
                  {content}
                </div>
              );
            })}
          </Reveal>
        </div>

        {/* Weiter-Button: nur sichtbar, wenn die Reihe breiter als der Bildschirm ist */}
        {canScroll && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex w-24 items-center justify-end bg-gradient-to-l from-[#151515] to-transparent">
            <button
              type="button"
              onClick={scrollNext}
              aria-label={atEnd ? "Zurück zum ersten Zertifikat" : "Weitere Zertifikate anzeigen"}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-[#1A1A1A] text-accent transition-colors duration-300 hover:bg-accent hover:text-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span
                aria-hidden="true"
                className={`transition-transform duration-300 ${atEnd ? "rotate-180" : ""}`}
              >
                →
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
