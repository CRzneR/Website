"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Startseite", href: "/#home" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Über Mich", href: "/about" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const barRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Scroll-Fortschritt */
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

  /* Menü schließen bei Routenwechsel */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Menü schließen: Escape, Klick außerhalb, Wechsel auf Desktop-Breite (md) */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const mql = window.matchMedia("(min-width: 768px)");
    const onBreakpointChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    mql.addEventListener("change", onBreakpointChange);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      mql.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 flex items-center justify-between bg-[#151515]/80 px-5 py-3 backdrop-blur-md md:px-[6.5vw] lg:py-4"
    >
      {/* Logo führt zurück zur Startseite */}
      <Link href="/" aria-label="Zur Startseite">
        <Image
          src="/logo.png"
          alt="Christoph Renz Logo"
          width={45}
          height={49}
          className="h-7 w-auto md:h-8 lg:h-10"
          priority
        />
      </Link>

      {/* Desktop-Navigation (ab md) */}
      <nav aria-label="Hauptnavigation" className="hidden items-center md:flex md:gap-7 lg:gap-10">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm text-muted transition-colors hover:text-white lg:text-base"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Burger-Button (nur unterhalb md) */}
      <button
        ref={buttonRef}
        type="button"
        data-open={open}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((prev) => !prev)}
        className="group relative -mr-2 size-10 cursor-pointer md:hidden [-webkit-tap-highlight-color:transparent]"
      >
        <span
          aria-hidden="true"
          className="absolute left-[9px] top-[13px] h-0.5 w-[22px] rounded-full bg-white transition-all duration-300 ease-in-out motion-reduce:transition-none group-data-[open=true]:top-[19px] group-data-[open=true]:rotate-45"
        />
        <span
          aria-hidden="true"
          className="absolute left-[9px] top-[19px] h-0.5 w-[22px] rounded-full bg-white transition-all duration-300 ease-in-out motion-reduce:transition-none group-data-[open=true]:opacity-0"
        />
        <span
          aria-hidden="true"
          className="absolute left-[9px] top-[25px] h-0.5 w-[22px] rounded-full bg-white transition-all duration-300 ease-in-out motion-reduce:transition-none group-data-[open=true]:top-[19px] group-data-[open=true]:-rotate-45"
        />
      </button>

      {/* Mobile-Navigation */}
      <nav
        id="mobile-nav"
        aria-label="Mobile Navigation"
        data-open={open}
        className="pointer-events-none invisible absolute inset-x-0 top-full -translate-y-2 border-t border-white/10 bg-[#151515]/[0.98] px-5 pb-6 pt-1 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none data-[open=true]:pointer-events-auto data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block border-b border-white/10 py-4 text-lg text-muted transition-colors hover:text-white"
          >
            {item.label}
          </Link>
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
