"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const targetSize = useRef(40);
  const currentSize = useRef(40);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Globaler Style – überschreibt cursor: pointer auf Buttons/Links
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isLarge = el?.closest("button, a, h1, h2, h3, h4, h5, h6");
      targetSize.current = isLarge ? 80 : 40;
    };

    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.12;
      current.current.y += (pos.current.y - current.current.y) * 0.12;
      currentSize.current += (targetSize.current - currentSize.current) * 0.1;

      if (cursorRef.current) {
        const s = currentSize.current;
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
        cursorRef.current.style.width = `${s}px`;
        cursorRef.current.style.height = `${s}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.head.removeChild(style); // Style wieder entfernen
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        willChange: "transform",
      }}
    />
  );
}
