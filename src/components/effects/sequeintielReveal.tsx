"use client";

// components/ScrollRevealSequence.tsx
import React, { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollRevealSequenceProps {
  children: ReactNode[];
  delay?: number; // Verzögerung zwischen Elementen in ms
}

const ScrollRevealSequence: React.FC<ScrollRevealSequenceProps> = ({
  children,
  delay = 300,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (inView && revealedCount < children.length) {
      const interval = setInterval(() => {
        setRevealedCount((count) => {
          if (count < children.length) return count + 1;
          clearInterval(interval);
          return count;
        });
      }, delay);

      return () => clearInterval(interval);
    }
  }, [inView, revealedCount, children.length, delay]);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      {children.slice(0, revealedCount).map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * (delay / 1000) }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollRevealSequence;
