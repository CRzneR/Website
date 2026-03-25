"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextAnimation from "../../effects/splitText";
import { DescriptionVert } from "./descriptionVert";

// GSAP Plugins registrieren
gsap.registerPlugin(ScrollTrigger);

export function SiteVert() {
  useEffect(() => {
    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#CEC9C9]">
      <div className="h-screen p-[10%]">
        <div className="ml-0">
          <SplitTextAnimation
            text="Moderne digitale "
            tag="h2"
            className="text-black font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 75%",
              markers: false,
            }}
          />
        </div>
        <br />

        <div className="ml-24">
          <SplitTextAnimation
            text="online Services"
            tag="h2"
            className="text-black font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 75%",
              markers: false,
            }}
          />
        </div>
        <br />

        <div className="ml-0">
          <SplitTextAnimation
            text="für eine "
            tag="h2"
            className="text-black font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 75%",
              markers: false,
            }}
          />
        </div>

        <div className="ml-24">
          <SplitTextAnimation
            text="grüne Stadt"
            tag="h2"
            className="text-black font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl uppercase"
            charClass="inline-block"
            animation={{
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            }}
            scrollTrigger={{
              start: "top 75%",
              markers: false,
            }}
          />
        </div>
      </div>

      <DescriptionVert />
    </div>
  );
}
