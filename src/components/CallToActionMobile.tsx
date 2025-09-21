"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMediaIcons: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  // Definiere Farben für Normal und Hover
  const iconColor = (name: string) => (hovered === name ? "#ffff00" : "#fff");

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
  return (
    <div className="px-4 md:px-0 md:pt-[5%] bg-[#151515]">
      {/* Left: Project Call */}
      <div
        className=" duration-300 rounded-lg p-8 flex flex-col items-center justify-center 
              text-white"
      >
        <div className="text-center">
          <p className="text-md md:text-lg font-medium mb-2">
            Now it´s your turn
          </p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
            You like that?
          </h2>
        </div>
        <a
          href="mailto:kontakt@christophrenz.de"
          className="border-2 border-white rounded-full px-6 py-2 text-white 
             hover:bg-white hover:text-black transition font-semibold w-fit
             mix-blend-difference hover:underline"
          aria-label="Kontakt per E-Mail (kontakt@christophrenz.de)"
          title="E-Mail an kontakt@christophrenz.de senden"
        >
          Write a mail
        </a>
      </div>

      {/* Footer */}
      <div className="mt-12 pb-4 flex flex-col items-center gap-4">
        <SocialMediaIcons />

        <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-white">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <Link href="/impressum" className="text-blue-600 underline">
            Impressum
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
