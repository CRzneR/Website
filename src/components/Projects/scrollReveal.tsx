// components/ScrollWordReveal.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollWordRevealProps {
  children: string; // String erforderlich, um Wörter zu splitten
  className?: string;
  start?: number;
  end?: number;
}

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  children,
  className = "",
  start = 0.2,
  end = 0.8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");
  const step = (end - start) / words.length;

  return (
    <section
      ref={containerRef}
      className="h-[300vh] relative bg-[#e9e6fb]" // langer Scrollbereich
    >
      <div
        className={`sticky top-1/2 -translate-y-1/2 flex flex-wrap gap-2 justify-center px-4 text-center ${className}`}
      >
        {words.map((word, index) => {
          const wordStart = start + step * index;
          const wordEnd = wordStart + step;

          const opacity = useTransform(
            scrollYProgress,
            [wordStart, wordEnd],
            [0, 1]
          );
          const y = useTransform(
            scrollYProgress,
            [wordStart, wordEnd],
            [20, 0]
          );

          return (
            <motion.span
              key={index}
              style={{ opacity, y }}
              className="inline-block text-4xl font-semibold text-gray-800 whitespace-nowrap"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
};
