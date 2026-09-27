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

    // Seitenhöhe kann sich ändern (Bilder laden, Sections klappen auf)
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

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#151515]/80 px-[6.5vw] py-[1vw] backdrop-blur-md">
      <Image
        src="/logo.png"
        alt="Christoph Renz Logo"
        width={45}
        height={49}
        className="h-[2vw] w-auto min-h-[22px]"
        priority
      />
      <nav className="flex items-center gap-[2.4vw]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[0.95vw] text-muted transition-colors hover:text-white"
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
