"use client";

import { useEffect } from "react";

// Erweiterung für Window
declare global {
  interface Window {
    anime: any;
  }
}

export default function LogoAnimation() {
  useEffect(() => {
    const checkAnime = () => {
      if (window.anime) {
        const paths = document.querySelectorAll(".logo-path");

        paths.forEach((path, index) => {
          const pathLength = (path as SVGPathElement).getTotalLength();
          (path as SVGPathElement).style.strokeDasharray = `${pathLength}`;
          (path as SVGPathElement).style.strokeDashoffset = `${pathLength}`;

          window.anime({
            targets: path,
            strokeDashoffset: [pathLength, 0],
            duration: 3000,
            delay: index * 500,
            easing: "easeInOutSine",
            loop: false,
          });
        });
      } else {
        setTimeout(checkAnime, 100);
      }
    };

    checkAnime();
  }, []);

  return (
    <>
      {/* Anime.js & Tailwind via CDN */}
      <script
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
      />
      <script async src="https://cdn.tailwindcss.com" />

      <div className="flex justify-center items-center h-screen m-0 ">
        <div className="relative">
          <svg viewBox="0 0 491 563" className="w-[500px] h-[500px] text-white">
            {/* First Path */}
            <path
              id="path1"
              d="M379 76V214.779H286.926V109.46H164.708V530.185H286.926V378.79H379V562H54V76H379Z"
              stroke="#333"
              className="logo-path"
            />

            {/* Suzuka Track Path */}
            <path
              id="path2"
              d="M1 64.5267V1H490V254.012L454.367 291.251L490 325.205V424.603V524H388.582V369.017H277.296V518.524H178.071V120.934H277.296V224.439H388.582V64.5267H1Z"
              stroke="#585858"
              className="logo-path"
            />
          </svg>
        </div>
      </div>

      <style jsx global>{`
        .logo-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          fill: none;
          stroke-width: 2;
        }
      `}</style>
    </>
  );
}
