"use client";

import React, { ReactNode } from "react";
import { ScrollIndicator } from "./scrollIndicator";

// 1️⃣  Kleine Custom-Hook, um die Maus­position zentral zu halten
const useMousePosition = () => {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return pos;
};

interface GradientDivProps {
  children: ReactNode;
  className?: string;
}

const GradientDiv: React.FC<GradientDivProps> = ({
  children,
  className = "",
}) => {
  const { x, y } = useMousePosition();

  // 2️⃣  Hier stellst du den Radius ein (z. B. 120 px)
  const RADIUS_PX = 120;

  return (
    <div
      className={className}
      style={{
        backgroundImage: `radial-gradient(circle ${RADIUS_PX}px at ${x}px ${y}px,
          rgba(128, 0, 128, 0.85) 0%,
          #E0E9EA)`,
      }}
    >
      {children}
      <ScrollIndicator />
    </div>
  );
};

export default GradientDiv;
