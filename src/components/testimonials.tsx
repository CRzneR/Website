"use client";

import Image from "next/image";
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

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch py-8 md:py-24">
          {testimonials.slice(0, 3).map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-6 w-full md:w-1/3 border border-white-700 rounded-lg p-6 md:p-8"
            >
              <p className="text-sm md:text-base text-white italic line-clamp-6">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-purple-500"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-300">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
