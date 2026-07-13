"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SplitTextAnimation from "./effects/splitText";

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "I was especially impressed by the collaborative process. From the initial idea to the finished website, I felt supported every step of the way. Every stage was clear and transparent, and communication was always prompt and straightforward. The final result matches exactly what I had envisioned.",
    name: "Salvatore Celeste",
    position: "Founder CelesteHomeDesign",
    image: "/image/salva.png",
  },
  {
    text: "Working with Christoph was absolutely great. Not only did he handle his tasks with excellent professionalism, but he also went beyond his actual competencies to support me, which had a significant impact on the success of my project.",
    name: "Nikolaos Dirbanis",
    position: "Founder Conscious Finance",
    image: "/image/niko.jpg",
  },
  {
    text: "Great collaboration and amazing results – Christoph truly goes above and beyond expectations.",
    name: "Sarah Johnson",
    position: "Product Designer",
    image: "/image/lisa.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section className="bg-[#151515] py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <SplitTextAnimation
          text="Testimonials"
          className="text-[#F5FC7B] text-md sm:text-xl"
          charClass="inline-block"
          animation={{
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
          }}
          scrollTrigger={{
            start: "top 75%",
            markers: process.env.NODE_ENV === "development",
          }}
        />
        <br />
        <SplitTextAnimation
          text="What people say"
          className="text-3xl lg:text-8xl font-bold mb-12 text-[#CEC9C9] uppercase"
          charClass="inline-block"
          animation={{
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
          }}
          scrollTrigger={{
            start: "top 75%",
            markers: process.env.NODE_ENV === "development",
          }}
        />

        <div className="flex items-center justify-center gap-4 md:gap-8 py-8 md:py-24">
          {/* Prev button */}
          <button
            onClick={goToPrev}
            aria-label="Vorheriges Testimonial"
            className="shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonial card */}
          <div
            key={activeIndex}
            className="flex flex-col items-center text-center space-y-6 w-full max-w-xl border border-white-700 rounded-lg p-6 md:p-8 animate-[fadeIn_0.4s_ease-out]"
          >
            <p className="text-sm md:text-base text-white italic">&quot;{active.text}&quot;</p>
            <div className="flex items-center gap-4">
              <Image
                src={active.image}
                alt={active.name}
                width={60}
                height={60}
                className="rounded-full border-2 border-purple-500"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{active.name}</p>
                <p className="text-sm text-gray-300">{active.position}</p>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            aria-label="Nächstes Testimonial"
            className="shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Zu Testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-white/30" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
