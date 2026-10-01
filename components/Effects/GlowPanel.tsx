import type { CSSProperties, ReactNode } from "react";
import styles from "./GlowPanel.module.css";

type GlowPanelProps = {
  /** Position und Größe, z. B. "left-[10%] top-[20%] h-1/2 w-1/3" */
  className?: string;
  children?: ReactNode;
  /** Sanft schweben lassen */
  float?: boolean;
  /** Versatz der Schwebe-Animation in Sekunden (damit Panels nicht synchron schweben) */
  floatDelay?: number;
};

/**
 * Leuchtendes Glas-Panel in Akzentfarbe mit sichtbarer Materialstärke.
 * Wird absolut positioniert – der Eltern-Container braucht "relative".
 */
export default function GlowPanel({
  className = "",
  children,
  float = false,
  floatDelay = 0,
}: GlowPanelProps) {
  const style: CSSProperties | undefined = float
    ? { animationDelay: `${-floatDelay}s` }
    : undefined;

  return (
    <div className={`absolute ${float ? styles.float : ""} ${className}`} style={style}>
      {/* Rückseite, leicht versetzt – ergibt die Tiefe */}
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl border border-accent/30 bg-accent/[0.03]"
      />
      <div className="relative flex h-full w-full items-center justify-center rounded-xl border border-accent/80 bg-gradient-to-br from-accent/15 via-[#151515]/80 to-[#151515]/90 shadow-[0_0_40px_-5px_rgba(245,252,123,0.45),inset_0_0_30px_rgba(245,252,123,0.12)] backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
