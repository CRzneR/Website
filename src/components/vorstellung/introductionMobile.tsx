"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yellowDivRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !yellowDivRef.current) return;

    const ctx = gsap.context(() => {
      const left = gsap.utils.selector(leftRef);
      const right = gsap.utils.selector(rightRef);

      // Initialzustand: unsichtbar
      gsap.set(yellowDivRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: yellowDivRef.current,
        },
      });

      // Gelber Container einblenden
      tl.to(
        yellowDivRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0,
      );

      // LEFT TEXT
      if (leftRef.current) {
        tl.from(
          left(".line"),
          { y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out" },
          0.3,
        );
      }

      // RIGHT TEXT
      if (rightRef.current) {
        tl.from(
          right(".line"),
          { y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out" },
          1.3,
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#151515] min-h-[300vh]">
      <div
        ref={yellowDivRef}
        className="bg-[#F5FC7B] rounded-[3rem] p-8 relative w-full max-w-[95%] h-[700px] mx-auto bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/background.png')",
        }}
      >
        {/* NAME */}
        <div className="absolute xl:-top-12 left-1/2 transform -translate-x-1/2 text-center z-10 w-full">
          <h2 className="font-grotesk font-[400] text-[#1D2E11] text-[clamp(4rem,18vw,24rem)]">
            CHRISTOPH RENZ
          </h2>
        </div>

        {/* IMAGE */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20 w-[80%] sm:w-[60%] md:w-[500px]">
          <Image
            src="/image/CR_gross.png"
            alt="Christoph Renz"
            width={500}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* LEFT TEXT */}
        <div ref={leftRef} className="absolute left-8 top-[40%] space-y-2">
          <div className="line text-xl font-bold">
            I CREATE STUNNING DIGITAL <br />
            EXPERIENCES FOR CUSTOMERS <br />
            WITH A FOCUS ON UX
          </div>
          <br />
          <div className="line text-xl font-bold uppercase">User Interface Design</div>
          <div className="line text-xl font-bold uppercase">User Experience Design</div>
          <div className="line text-xl font-bold uppercase">Frontend Development</div>
          <div className="line text-xl font-bold uppercase">Strategie</div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
