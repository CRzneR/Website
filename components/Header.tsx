"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const navItems = [
  { label: "Über Mich", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    // Max. ein Update pro Frame
    const requestUpdate = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(document.body);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      resizeObserver.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  /*
    Feste Größen statt vw:
    - Mobil:     Logo 28 px, Text 14 px
    - ab md:     Logo 32 px, Text 14 px
    - ab lg:     Logo 40 px, Text 16 px (Desktop)
    Der seitliche Abstand bleibt ab md bei 6.5vw, damit der Header bündig mit den Sections ist.
  */
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#151515]/80 px-5 py-3 backdrop-blur-md md:px-[6.5vw] lg:py-4">
      <Image
        src="/logo.png"
        alt="Christoph Renz Logo"
        width={45}
        height={49}
        className="h-7 w-auto md:h-8 lg:h-10"
        priority
      />
      <nav className="flex items-center gap-5 md:gap-7 lg:gap-10">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-muted transition-colors hover:text-white lg:text-base"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Scroll-Fortschritt */}
      <div
        ref={barRef}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#F5FC7B]"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
