"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoBackgroundScrollProps {
  videoSrc: string;
  children: React.ReactNode;
}

const VideoBackgroundScroll: React.FC<VideoBackgroundScrollProps> = ({
  videoSrc,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // scroll-based animation
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="relative h-[3000px]" ref={containerRef}>
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Foreground Content */}
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center px-8 text-white"
        style={{ opacity }}
      >
        <div className="max-w-3xl text-center space-y-6">{children}</div>
      </motion.div>
    </div>
  );
};

export default VideoBackgroundScroll;
