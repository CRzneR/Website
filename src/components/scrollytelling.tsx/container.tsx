"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollVideoSectionProps {
  videoSrc: string;
  sectionHeight?: string;
  videoHeight?: string;
}

const ScrollVideoSection: React.FC<ScrollVideoSectionProps> = ({
  videoSrc,
  sectionHeight = "300vh",
  videoHeight = "100vh",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current || !videoContainerRef.current)
      return;

    const video = videoRef.current;
    video.currentTime = 0;

    const ctx = gsap.context(() => {
      // Video-Animation
      gsap.to(video, {
        currentTime: video.duration || 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 80%",
          scrub: 1,
          pin: videoContainerRef.current,
          pinSpacing: false,
          markers: false,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: sectionHeight }}
    >
      {/* Sticky Video-Container */}
      <div
        ref={videoContainerRef}
        className="sticky top-0 w-full"
        style={{ height: videoHeight, zIndex: 0 }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
