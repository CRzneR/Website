"use client";

import React from "react";

export interface GameSectionProps {
  heading: string;
  highlightedWord: string;
  subheading: string;
  buttons: {
    label: string;
    variant: "primary" | "secondary";
    onClick?: () => void;
  }[];
}

export const GameSection: React.FC<GameSectionProps> = ({
  heading,
  highlightedWord,
  subheading,
  buttons,
}) => {
  return (
    <section>
      <div>
        {/* Right - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
            {heading} <br />
            <span className="relative inline-block">
              <span className="text-transparent stroke-text font-black">
                {highlightedWord}
              </span>
              <span className="absolute -right-4 top-1 text-3xl text-gray-600 font-bold">
                ”
              </span>
              <span className="absolute -left-4 top-1 text-3xl text-gray-600 font-bold">
                “
              </span>
            </span>
            <br />
            {subheading}
          </h2>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                className={`py-3 px-6 font-semibold rounded-md ${
                  btn.variant === "primary"
                    ? "bg-white shadow-md text-gray-700"
                    : "border border-gray-700 text-gray-700"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      ,
    </section>
  );
};
