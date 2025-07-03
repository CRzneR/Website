"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const XScrollComp = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type CardProps = {
  card: {
    url: string;
    id: number;
  };
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[450px] md:w-[450px] lg:w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default XScrollComp;

const cards = [
  {
    url: "/image/pokemon.png",
    id: 1,
  },
  {
    url: "/image/pokemon.png",
    id: 2,
  },
  {
    url: "/image/pokemon.png",
    id: 3,
  },
  {
    url: "/image/pokemon.png",
    id: 4,
  },
  {
    url: "/image/pokemon.png",
    id: 5,
  },
  {
    url: "/image/pokemon.png",
    id: 6,
  },
  {
    url: "/image/pokemon.png",
    id: 7,
  },
  {
    url: "/image/pokemon.png",
    id: 8,
  },
];
