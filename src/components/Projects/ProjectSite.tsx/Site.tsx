"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextAnimation from "../../effects/splitText";
import { Description } from "./description";
import HorizontalScroll from "./HorizontalScroll";

// GSAP Plugins registrieren
gsap.registerPlugin(ScrollTrigger);

export function Site() {
  useEffect(() => {
    // Animationen für SplitText werden durch die Komponente selbst gehandelt
    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#CEC9C9]">
      <div className="h-screen p-[10%]">
        {/* Erste Zeile - linksbündig */}
        <div className="ml-0">
          <SplitTextAnimation
            text="Webseite für "
            tag="h2"
            className="text-black font-semibold text-8xl uppercase"
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

        {/* Zweite Zeile - eingerückt */}
        <div className="ml-24">
          <SplitTextAnimation
            text="einen Onlinemarkt"
            tag="h2"
            className="text-black text-8xl font-semibold uppercase"
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

        {/* Dritte Zeile - linksbündig */}
        <div className="ml-0">
          <SplitTextAnimation
            text="für Werbeflächen"
            tag="h2"
            className="text-black font-semibold text-8xl uppercase"
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

        {/* Vierte Zeile - eingerückt */}
        <div className="ml-24">
          <SplitTextAnimation
            text="für vermietung"
            tag="h2"
            className="text-black font-semibold text-8xl uppercase"
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

      <Description />
    </div>
  );
}
