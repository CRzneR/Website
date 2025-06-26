"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      animate={{
        width: isInView ? "100%" : "90%",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="mx-auto bg-blue-400 rounded-xl shadow-lg p-8"
      style={{ height: "3000px" }}
    >
      {children}
    </motion.div>
  );
};

export default Container;
