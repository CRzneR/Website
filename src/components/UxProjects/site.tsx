"use client";

import { useEffect, useState } from "react";

const Site = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Berechne den Skalierungsfaktor basierend auf der Scroll-Position
      const scrollY = window.scrollY || window.pageYOffset;
      const newScale = 1 + Math.min(scrollY / 200, 2); // Maximal 3-fache Größe
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[150vh] p-8">
      <div
        className="w-40 h-40 bg-blue-500 rounded-lg mx-auto sticky top-1/2 transform -translate-y-1/2 transition-transform duration-300"
        style={{
          transform: `translateY(-50%) scale(${scale})`,
        }}
      >
        {/* Optionaler Inhalt */}
        <div className="flex items-center justify-center h-full text-white font-bold">
          {scale.toFixed(1)}x
        </div>
      </div>
    </div>
  );
};

export default Site;
