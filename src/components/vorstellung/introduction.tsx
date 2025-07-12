"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextAnimation from "../effects/splitText";
import Leistungen from "../UxProjects/Leistungen";

const services = [
  "Interface Design",
  "User Experience Design",
  "Frontend Development",
  "Digitale Strategie",
];

// GSAP Plugins registrieren
gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yellowDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !yellowDivRef.current) return;

    // Sticky-Effekt für das gelbe Div
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50px",
      end: "+=200%",
      pin: yellowDivRef.current,
      pinSpacing: false,
      markers: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black min-h-[300vh]">
      <div
        ref={yellowDivRef}
        className="bg-[#F5FC7B] rounded-[3rem] p-8 relative w-full max-w-[95%] h-[700px] mx-auto"
      >
        {/* Zentrierte Überschrift */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-10 w-full">
          <h1
            className="font-bold text-black"
            style={{
              fontSize: "clamp(3rem, 10vw, 9rem)",
            }}
          >
            CHRISTOPH RENZ
          </h1>
        </div>

        {/* Person image */}
        <div className="absolute left-1/2 transform -translate-x-1/2  z-20">
          <Image
            src="/image/CR_gross.png"
            alt="Christoph Renz"
            width={500}
            height={600}
            className="object-contain"
            priority
          />
        </div>

        {/* Left text + dots */}
        <div className="absolute bottom-1/2 left-8 max-w-md text-black ">
          <SplitTextAnimation
            text="I CREATE STUNNING DIGITAL"
            tag="h1"
            className="text-[#1D2E11] text-2xl"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 10%",
              end: "+=470",
              markers: false,
            }}
          />
          <SplitTextAnimation
            text="EXPERIENCES FOR CUSTOMERS"
            tag="h1"
            className="text-[#1D2E11] text-2xl"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 10%",
              end: "+=470",
              markers: false,
            }}
          />
          <SplitTextAnimation
            text="WITH A FOCUS ON UX"
            tag="h1"
            className="text-[#1D2E11] text-2xl"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 10%",
              end: "+=470",
              markers: false,
            }}
          />
          <div className="flex gap-3 mt-4">
            <div className="w-6 h-6 rounded-full bg-black"></div>
            <div className="w-6 h-6 rounded-full bg-black"></div>
            <div className="w-6 h-6 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
      {/* Right skills */}
      <div className="absolute bottom-0 right-8 text-right text-[#1D2E11] font-bold text-2xl space-y-1 z-10">
        <Leistungen headings={services} />
      </div>
    </div>
  );
};

export default Introduction;
