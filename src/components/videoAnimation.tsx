"use client";

// components/ScrollVideoPlayer.tsx
import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";

interface ScrollVideoPlayerProps {
  src: string;
  height?: number; // px
}

export const ScrollVideoPlayer: React.FC<ScrollVideoPlayerProps> = ({
  src,
  height = 2000, // Bereich, über den gescrollt werden muss
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // von ganz oben bis ganz unten
  });

  // Fortschritt umrechnen auf Videozeit
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = progress * video.duration;
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause(); // Kein automatisches Abspielen
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: `${height}px` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="w-full h-auto max-h-screen"
        />
      </div>
    </div>
  );
};
