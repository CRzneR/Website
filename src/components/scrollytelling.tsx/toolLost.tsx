"use client";

import React from "react";
import Image from "next/image";

const tools = [
  "HTML, CSS, TailwindCSS",
  "Bootstrap, storefront ui",
  "JavaScript, React, NextJs",
  "Git, Github",
  "Figma, Illustrator, Photoshop",
  "Rhinoceros, ThreeJs",
];

const ToolList: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 py-12 max-w-6xl mx-auto gap-10">
      {/* Image */}
      <div className="w-full md:w-auto max-w-sm">
        <Image
          src="/my-tools.png" // Pfad ggf. anpassen
          alt="Portrait"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>

      {/* Tool List */}
      <div className="flex-1">
        <h3 className="text-gray-700 text-lg mb-6">Tool that I am using</h3>
        <ul className="space-y-6">
          {tools.map((tool, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 border-2 border-black rounded-sm" />
              <p className="text-xl font-semibold text-gray-800">{tool}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToolList;
