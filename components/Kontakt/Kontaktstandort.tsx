import Reveal from "@/components/Effects/Reveal";

/* ---------- Globus-Geometrie (SVG-Koordinaten) ---------- */
const CX = 260; // Mittelpunkt des Globus
const CY = 440;
const R = 300;
const TILT = 0.2; // Stauchung der Breitenkreise → leichte Draufsicht

const toRad = (deg: number) => (deg * Math.PI) / 180;

// Breitenkreise alle 12°, Längenkreise alle 18°
const parallels = Array.from({ length: 13 }, (_, i) => -72 + i * 12).map((lat) => ({
  y: CY - R * Math.sin(toRad(lat)),
  rx: R * Math.cos(toRad(lat)),
}));
const meridians = Array.from({ length: 10 }, (_, i) => i * 18).map((lon) => ({
  rx: Math.abs(R * Math.sin(toRad(lon))),
}));

// Position des Standort-Punkts auf dem Globus und Ende der Beschriftungslinie
const PIN = { x: 330, y: 262 };
const LABEL = { x: 560, y: 200 };

export default function KontaktStandort() {
  return (
    <section className="relative overflow-hidden px-5 pt-12 md:px-[6.5vw] md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
        {/* ---------- Globus ---------- */}
        <Reveal from="none" duration={1.4}>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-soft">{"// Standort"}</p>

          {/* Mobil: Beschriftung als normaler Text, damit sie lesbar bleibt */}
          <p className="mt-3 font-mono text-xs uppercase leading-relaxed tracking-widest text-soft md:hidden">
            Germany · Bayern / München
            <br />
            <span className="text-muted">48.1351° N · 11.5820° E</span>
          </p>

          <svg
            viewBox="0 0 900 520"
            className="mb-[24vw] mt-4 w-full overflow-visible md:mb-0"
            role="img"
            aria-label="Standort: München, Deutschland"
          >
            <defs>
              <radialGradient id="globe-fill" cx="45%" cy="35%" r="70%">
                <stop offset="0" stopColor="#262614" />
                <stop offset="0.6" stopColor="#171712" />
                <stop offset="1" stopColor="#151515" />
              </radialGradient>
              <clipPath id="globe-clip">
                <circle cx={CX} cy={CY} r={R} />
              </clipPath>
              <filter id="pin-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            {/* Kugel mit gelbem Lichtrand */}
            <circle
              cx={CX}
              cy={CY}
              r={R}
              fill="url(#globe-fill)"
              stroke="rgba(245,252,123,0.45)"
              strokeWidth="1.5"
              style={{ filter: "drop-shadow(0 0 24px rgba(245,252,123,0.25))" }}
            />

            {/* Punktraster: gepunktete Breiten- und Längenkreise */}
            <g
              clipPath="url(#globe-clip)"
              fill="none"
              stroke="rgba(245,252,123,0.35)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="0 7"
            >
              {parallels.map(({ y, rx }) => (
                <ellipse key={`p${y}`} cx={CX} cy={y} rx={rx} ry={rx * TILT} />
              ))}
              {meridians.map(({ rx }, i) => (
                <ellipse key={`m${i}`} cx={CX} cy={CY} rx={rx} ry={R} />
              ))}
            </g>

            {/* Linie zur Beschriftung */}
            <path
              d={`M ${PIN.x} ${PIN.y} L ${LABEL.x} ${LABEL.y}`}
              stroke="rgba(245,252,123,0.7)"
              strokeWidth="1.2"
            />
            <circle cx={LABEL.x} cy={LABEL.y} r="4" fill="#F5FC7B" />

            {/* Standort-Punkt mit Puls */}
            <circle
              cx={PIN.x}
              cy={PIN.y}
              r="16"
              fill="rgba(245,252,123,0.55)"
              filter="url(#pin-glow)"
            />
            <circle cx={PIN.x} cy={PIN.y} r="14" fill="none" stroke="#F5FC7B" strokeWidth="1.5">
              <animate attributeName="r" values="10;26;10" dur="3s" repeatCount="indefinite" />
              <animate
                attributeName="opacity"
                values="0.9;0;0.9"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={PIN.x} cy={PIN.y} r="7" fill="#F5FC7B" />

            {/* Beschriftung (ab md im SVG, mobil als Text unter dem Globus) */}
            <g
              className="hidden md:inline"
              fill="#CEC9C9"
              fontFamily="ui-monospace, 'SF Mono', Menlo, monospace"
              fontSize="16"
              letterSpacing="2"
            >
              <text x={LABEL.x + 20} y={LABEL.y + 6}>
                GERMANY
              </text>
              <text x={LABEL.x + 20} y={LABEL.y + 34}>
                BAYERN / MÜNCHEN
              </text>
              <text x={LABEL.x + 20} y={LABEL.y + 80} fill="#8A8686">
                48.1351° N
              </text>
              <text x={LABEL.x + 20} y={LABEL.y + 104} fill="#8A8686">
                11.5820° E
              </text>
            </g>
          </svg>
        </Reveal>

        {/* ---------- Claim ---------- */}
        <Reveal delay={0.2} className="pb-16 md:pb-24">
          <span aria-hidden="true" className="block h-px w-10 bg-accent" />
          <p className="my-8 font-display text-4xl leading-[1.1] text-white lg:text-5xl">
            Good ideas
            <br />
            deserve
            <br />
            <span className="text-accent">real results.</span>
          </p>
          <span aria-hidden="true" className="block h-px w-10 bg-accent" />
        </Reveal>
      </div>
    </section>
  );
}
