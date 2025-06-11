"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollVideoSectionProps {
  videoSrc: string;
  overlay1Content?: React.ReactNode;
  overlay2Content?: React.ReactNode;
  sectionHeight?: string;
  videoHeight?: string;
}

const ScrollVideoSection: React.FC<ScrollVideoSectionProps> = ({
  videoSrc,
  overlay1Content = (
    <>
      <h2 className="text-2xl font-bold mb-4">Erster Inhalt</h2>
      <p>Dieser Inhalt erscheint und verschwindet beim Scrollen.</p>
    </>
  ),
  overlay2Content = (
    <>
      <h2 className="text-2xl font-bold mb-4">Zweiter Inhalt</h2>
      <p>Dieser Inhalt erscheint später und verschwindet wieder.</p>
    </>
  ),
  sectionHeight = "300vh",
  videoHeight = "100vh",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const overlay1Ref = useRef<HTMLDivElement>(null);
  const overlay2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current || !videoContainerRef.current)
      return;

    const video = videoRef.current;
    video.currentTime = 0;

    const ctx = gsap.context(() => {
      // Video-Animation (scrub durch Scrollen)
      gsap.to(video, {
        currentTime: video.duration || 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${sectionHeight}`,
          scrub: 1,
          pin: videoContainerRef.current, // Video-Container wird gepinnt
          pinSpacing: false, // Verhindert zusätzlichen Platzhalter
          markers: false, // Debug-Hilfe
        },
      });

      // Overlay-Animationen (unverändert)
      if (overlay1Ref.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "15% center",
              end: "80% center",
              scrub: 0.5,
            },
          })
          .fromTo(
            overlay1Ref.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.5 }
          )
          .to(
            overlay1Ref.current,
            { opacity: 0, y: -50, duration: 0.5 },
            "+=0.3"
          );
      }

      if (overlay2Ref.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "35% center",
              end: "90% center",
              scrub: 0.5,
            },
          })
          .fromTo(
            overlay2Ref.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.5 }
          )
          .to(
            overlay2Ref.current,
            { opacity: 0, x: 50, duration: 0.5 },
            "+=0.3"
          );
      }
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

      {/* Overlay-Inhalte (unverändert) */}
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-8 pointer-events-none px-4"
        style={{ zIndex: 10 }}
      >
        <div
          ref={overlay1Ref}
          className="bg-black bg-opacity-70 text-white p-6 md:p-8 rounded-lg max-w-md w-full mx-auto opacity-0 backdrop-blur-sm"
        >
          {overlay1Content}
        </div>
        <div
          ref={overlay2Ref}
          className="bg-white bg-opacity-90 text-black p-6 md:p-8 rounded-lg max-w-md w-full mx-auto opacity-0 backdrop-blur-sm"
        >
          {overlay2Content}
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
