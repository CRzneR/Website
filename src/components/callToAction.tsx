"use client";

import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMediaIcons: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  // Definiere Farben für Normal und Hover
  const iconColor = (name: string) =>
    hovered === name ? "#E1306C" /* Beispiel: Instagram Pink */ : "#000";

  return (
    <div className="flex gap-6">
      <a
        href="#"
        aria-label="Instagram"
        onMouseEnter={() => setHovered("instagram")}
        onMouseLeave={() => setHovered(null)}
      >
        <FaInstagram size={24} color={iconColor("instagram")} />
      </a>

      <a
        href="#"
        aria-label="LinkedIn"
        onMouseEnter={() => setHovered("linkedin")}
        onMouseLeave={() => setHovered(null)}
      >
        <FaLinkedin size={24} color={iconColor("linkedin")} />
      </a>

      <a
        href="#"
        aria-label="Twitter"
        onMouseEnter={() => setHovered("twitter")}
        onMouseLeave={() => setHovered(null)}
      >
        <FaTwitter size={24} color={iconColor("twitter")} />
      </a>
    </div>
  );
};

const CallToActionSection: React.FC = () => {
  const [hovered, setHovered] = useState<"right" | null>(null);

  return (
    <div className=" pt-[5%] bg-black">
      {/* Main Section */}
      <div className="flex max-w-6xl mx-auto gap-6 transition-all duration-300">
        {/* Left: Project Call */}
        <div
          onMouseEnter={() => setHovered(null)}
          onMouseLeave={() => setHovered(null)}
          className={`
            transition-all duration-300 rounded-lg p-8 flex flex-col justify-between shadow-lg
            bg-[#F5FC7B] text-white
            ${hovered === "right" ? "basis-1/3" : "basis-2/3"}
          `}
        >
          <div>
            <p className="text-lg font-medium mb-2 ">Now it´s your turn</p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              You like that?
              <br />
              Contact me!
            </h2>
          </div>
          <button className="mt-auto border-2 border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-purple-600 transition font-semibold w-fit">
            Write a Mail
          </button>
        </div>

        {/* Right: Careers */}
        <div
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered(null)}
          className={`
            transition-all duration-300 rounded-lg p-8 flex flex-col justify-between shadow-lg
            border text-white
            ${hovered === "right" ? "basis-2/3" : "basis-1/3"}
          `}
        >
          <div>
            <p className="text-lg font-medium mb-2">Not enought?</p>
            <h2 className="text-3xl font-bold mb-6">See more of me</h2>
          </div>
          <button className="mt-auto border-2 border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-black transition font-semibold w-fit">
            More content
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pb-4 flex flex-col items-center gap-4">
        <SocialMediaIcons />

        <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-white">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Impressum</a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
