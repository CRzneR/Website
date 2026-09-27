export default function DeveloperOutline() {
  return (
    <svg
      viewBox="0 0 500 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 top-1/2 h-[27.7vw] w-[30.1vw] min-h-[220px] min-w-[240px] -translate-x-1/2 -translate-y-1/2 text-[#3a3a3a]"
    >
      {/* äußeres, breites Rechteck oben */}
      <rect x="0" y="0" width="387" height="415" stroke="currentColor" strokeWidth="1.5" />
      {/* mittleres Rechteck, nach innen versetzt */}
      <rect x="48" y="61" width="256" height="354" stroke="currentColor" strokeWidth="1.5" />
      {/* kleines inneres Rechteck oben */}
      <rect x="130" y="91" width="97" height="80" stroke="currentColor" strokeWidth="1.5" />
      {/* kleine Raute rechts, mittig */}
      <rect
        x="374"
        y="219"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(45 382 227)"
      />
    </svg>
  );
}
