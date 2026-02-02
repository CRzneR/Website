"use client";

import Image from "next/image";
import SplitTextAnimation from "./effects/splitText";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
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
  {
    text: "The work was very pleasant. Christoph kept coming up with new, individual suggestions that were very helpful. This resulted in excellent outcomes.",
    name: "Stefania",
    position: "Wedding Planner",
    image: "/image/Sarah.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#151515] py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <SplitTextAnimation
          text="Testimonials"
          tag="h3"
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
            markers: false,
          }}
        />
        <br />
        <SplitTextAnimation
          text="What people say"
          tag="h3"
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
            markers: false,
          }}
        />

        <motion.div
          className="flex gap-8"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25, // Geschwindigkeit (höher = langsamer)
            ease: "linear",
          }}
        >
          {testimonials.concat(testimonials).map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-6 min-w-[350px] border border-white-700 rounded-lg p-8 bg-black/40 my-12"
            >
              <p className="text-lg text-white italic">“{t.text}”</p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
