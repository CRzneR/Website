"use client";

import React from "react";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heading = "Hi, I am Christoph\nDesigner & Developer",
  subheading = "FREELANCER",
  description = `Ich habe Product Design studiert und interessiere mich für das
Digitale Design. Also habe ich mir selbst Webentwicklung beigebracht
und bin in diesem Bereich auch zuhause.`,
}) => {
  return (
    <section>
      <div className="w-full">
        <h4 className="font-cormorant mb-2 text-xl tracking-widest font-bold text-gray-500">
          {subheading}
        </h4>

        <h1 className="font-encoded  font-black whitespace-pre-line text-4xl md:text-5xl lg:text-6xl text-[#372c77]">
          {heading}
        </h1>

        <h4 className="mt-6 w-[80%] font-medium text-xl leading-relaxed text-black/80">
          {description}
        </h4>
      </div>
    </section>
  );
};

export default HeroSection;
