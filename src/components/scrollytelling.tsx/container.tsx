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
  stickyDistance?: number;
}

const ScrollVideoSection: React.FC<ScrollVideoSectionProps> = ({
  videoSrc,
  overlay1Content = (
    <>
      <h2 className="text-2xl font-bold mb-4 font-cormorant">
        This is my story
      </h2>
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
  stickyDistance = 200,
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
          markers: true,
        },
      });

      // Overlay 1 - Links positioniert
      if (overlay1Ref.current) {
        const overlay1 = overlay1Ref.current;

        // Initiale Position links
        gsap.set(overlay1, {
          left: "10%",
          top: "50%",
          x: 0,
          y: "-50%",
        });

        // Erscheinen
        gsap.fromTo(
          overlay1,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "30% center",
              end: `+=${stickyDistance}`,
              scrub: 0.5,
              onEnter: () => {
                gsap.set(overlay1, {
                  position: "fixed",
                  left: "10%",
                  top: "50%",
                  x: 0,
                  y: "-50%",
                });
              },
              onLeaveBack: () => {
                gsap.set(overlay1, {
                  position: "absolute",
                  left: "10%",
                  top: "50%",
                  x: 0,
                  y: "-50%",
                });
              },
            },
          }
        );

        // Verschwinden
        gsap.to(overlay1, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `30% center+=${stickyDistance}`,
            end: "90% center",
            scrub: 0.5,
            onLeave: () => {
              gsap.set(overlay1, {
                position: "absolute",
                left: "10%",
                top: "auto",
                x: 0,
                y: 0,
              });
            },
            onEnterBack: () => {
              gsap.set(overlay1, {
                position: "fixed",
                left: "10%",
                top: "50%",
                x: 0,
                y: "-50%",
              });
            },
          },
        });
      }

      // Overlay 2 - Links positioniert und erscheint nach Overlay 1
      if (overlay2Ref.current) {
        const overlay2 = overlay2Ref.current;

        // Initiale Position links (gleiche wie Overlay 1)
        gsap.set(overlay2, {
          left: "70%",
          top: "50%",
          x: 0,
          y: "-50%",
          opacity: 0,
        });

        // Erscheinen nach Overlay 1
        gsap.fromTo(
          overlay2,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "70% center", // Beginnt wenn Overlay 1 verschwunden ist
              end: `+=${stickyDistance}`,
              scrub: 0.5,
              onEnter: () => {
                gsap.set(overlay2, {
                  position: "fixed",
                  left: "70%",
                  top: "50%",
                  x: 0,
                  y: "-50%",
                });
              },
              onLeaveBack: () => {
                gsap.set(overlay2, {
                  position: "absolute",
                  left: "70%",
                  top: "50%",
                  x: 0,
                  y: "-50%",
                  opacity: 0,
                });
              },
            },
          }
        );

        // Verschwinden
        gsap.to(overlay2, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `70% center+=${stickyDistance}`,
            end: "bottom center",
            scrub: 0.5,
            onLeave: () => {
              gsap.set(overlay2, {
                position: "absolute",
                left: "70%",
                top: "auto",
                x: 0,
                y: 0,
              });
            },
            onEnterBack: () => {
              gsap.set(overlay2, {
                position: "fixed",
                left: "70%",
                top: "50%",
                x: 0,
                y: "-50%",
              });
            },
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [stickyDistance]);

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

      {/* Overlay-Inhalte */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none px-4"
        style={{ zIndex: 10 }}
      >
        <div
          ref={overlay1Ref}
          className="bg-black bg-opacity-70 text-white p-6 md:p-8 rounded-lg max-w-md w-full opacity-0 backdrop-blur-sm absolute"
          style={{ left: "10%", top: "50%", transform: "translateY(-50%)" }}
        >
          {overlay1Content}
        </div>
        <div
          ref={overlay2Ref}
          className="bg-white bg-opacity-90 text-black p-6 md:p-8 rounded-lg max-w-md w-full opacity-0 backdrop-blur-sm absolute"
          style={{ left: "10%", top: "50%", transform: "translateY(-50%)" }}
        >
          {overlay2Content}
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
