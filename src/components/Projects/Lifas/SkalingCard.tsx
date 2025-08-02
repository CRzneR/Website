import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP Plugin registrieren
gsap.registerPlugin(ScrollTrigger);

const SkalingCard = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    gsap.to(boxRef.current, {
      scale: 10,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        markers: true, // Für Entwicklung - in Produktion entfernen
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-[300vh] flex justify-center items-start">
      <div className="container mx-auto w-full max-w-4xl py-20">
        {/* Platzhalter oben */}
        <div className="h-screen flex items-center justify-center">
          <p className="text-gray-500">Scroll nach unten</p>
        </div>

        {/* Das animierte Div */}
        <div
          ref={boxRef}
          className="w-48 h-48 bg-gradient-to-br from-orange-400 to-pink-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl mx-auto transition-transform duration-300"
        >
          Ich skaliere!
        </div>

        {/* Platzhalter unten */}
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default SkalingCard;
