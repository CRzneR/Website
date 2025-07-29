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
        className="bg-[#F5FC7B] rounded-[3rem] p-8 relative w-full max-w-[95%] h-[700px] mx-auto bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/background.png')",
        }}
      >
        <div className="absolute  xl:-top-12 left-1/2 transform -translate-x-1/2 text-center z-10 w-full">
          <h2 className="font-grotesk font-[400] text-[#1D2E11] text-[clamp(7rem,18vw,24rem)]">
            CHRISTOPH RENZ
          </h2>
        </div>

        {/* Person image */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20 w-[80%]  sm:w-[60%] md:w-[500px]">
          <Image
            src="/image/CR_gross.png"
            alt="Christoph Renz"
            width={500}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Left text + dots */}
        <div className="absolute bottom-[45%] left-8 max-w-md text-black ">
          <SplitTextAnimation
            text="I CREATE STUNNING DIGITAL"
            tag="h4"
            className="text-[#1D2E11] text-2xl"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.6,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 10%",
              end: "+=1400",
              markers: false,
            }}
          />
          <SplitTextAnimation
            text="EXPERIENCES FOR CUSTOMERS"
            tag="h4"
            className="text-[#1D2E11] text-2xl"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.6,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 10%",
              end: "+=1400",
              markers: false,
            }}
          />
          <SplitTextAnimation
            text="WITH A FOCUS ON UX"
            tag="h4"
            className="text-[#1D2E11] text-2xl"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.6,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 10%",
              end: "+=1400",
              markers: false,
            }}
          />
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
