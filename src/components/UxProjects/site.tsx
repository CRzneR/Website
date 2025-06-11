"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSite: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const content1 = contentRef1.current;
    const content2 = contentRef2.current;

    if (!box || !content1 || !content2) return;

    // Skalieren des Containers beim Scrollen
    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        start: "top 70%",
        end: "center top",
        scrub: 1,
      },
      width: "100vw",
      height: "100vw",
    });

    // Beide Inhalte initial verstecken
    gsap.set([content1, content2], { autoAlpha: 0, y: 40 });

    // Timeline für sequentielle Einblendung
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box,
        start: "top center",
        toggleActions: "play none none none",
        once: true,
        markers: true,
      },
    });

    tl.to(content1, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    }).to(
      content2,
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "+=0.3"
    ); // Verzögerung von 0.3s nach content1
  }, []);

  return (
    <section className="h-[500vh] flex pt-[50vh] justify-center bg-white">
      <div>
        <div
          ref={boxRef}
          className="sticky bg-gray-800 h-[200px] rounded-md flex flex-col items-center justify-center text-white p-4"
          style={{
            width: 200,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div ref={contentRef1}>
            <h2 className="text-6xl font-black leading-tight mt-10">
              Hallo Welt
            </h2>
            <p className="text-sm text-gray-300">
              Dies ist animierter Inhalt, der erscheint, wenn er ins Bild kommt.
            </p>
          </div>

          <div ref={contentRef2} className="mt-6">
            <h3 className="text-3xl font-bold">Zweiter Block</h3>
            <p className="text-sm text-gray-300">
              Ich erscheine nach dem ersten Text mit etwas Verzögerung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSite;
