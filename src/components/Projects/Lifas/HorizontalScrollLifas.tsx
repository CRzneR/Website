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

  const x = useTransform(scrollYProgress, [0, 1], ["37%", "-77%"]);

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
      className="group relative h-[300px] w-[475px]  overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 "
      ></div>
    </div>
  );
};

export default XScrollComp;

const cards = [
  {
    url: "/image/lifas/Lifas1.png",
    id: 1,
  },
  {
    url: "/image/lifas/Lifas2.png",
    id: 2,
  },
  {
    url: "/image/lifas/Lifas3.png",
    id: 3,
  },
  {
    url: "/image/lifas/Lifas4.png",
    id: 4,
  },
  {
    url: "/image/lifas/Lifas5.png",
    id: 5,
  },
  {
    url: "/image/lifas/Lifas6.png",
    id: 6,
  },
  {
    url: "/image/lifas/Lifas7.png",
    id: 7,
  },
  {
    url: "/image/lifas/Lifas8.png",
    id: 8,
  },
  {
    url: "/image/lifas/Lifas9.png",
    id: 9,
  },
  {
    url: "/image/lifas/Lifas10.png",
    id: 10,
  },
  {
    url: "/image/lifas/Lifas11.png",
    id: 11,
  },
  {
    url: "/image/lifas/Lifas12.png",
    id: 12,
  },
  {
    url: "/image/lifas/Lifas13.png",
    id: 13,
  },
];
