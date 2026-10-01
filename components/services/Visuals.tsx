import type { ReactNode } from "react";
import { FiSearch, FiTrendingUp } from "react-icons/fi";
import {
  LuChartBar,
  LuDatabase,
  LuFolder,
  LuLayoutDashboard,
  LuSettings,
  LuUsers,
} from "react-icons/lu";
import { SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";

/* Gemeinsamer Stil für die Mockup-Fenster */
const windowClass =
  "rounded-lg border border-accent/40 bg-[#1A1A1A]/95 shadow-[0_0_30px_-10px_rgba(245,252,123,0.45)]";

function WindowBar({ title }: { title?: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
      {title && <span className="ml-2 font-mono text-[0.55rem] text-soft/70">{title}</span>}
    </div>
  );
}

/* Kleine Platzhalterzeilen für Text in den Mockups */
function Lines({ widths }: { widths: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {widths.map((w, i) => (
        <span key={i} className="h-1 rounded-full bg-white/15" style={{ width: w }} />
      ))}
    </div>
  );
}

/* ---------- 01 Web Design: gestapelte Browserfenster ---------- */
export function WebDesignVisual() {
  return (
    <div className="absolute inset-0 [perspective:1000px]">
      <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateY(-14deg)_rotateX(6deg)]">
        <div className={`${windowClass} absolute left-[8%] top-[38%] h-[44%] w-[26%] opacity-70`}>
          <WindowBar />
          <div className="p-3">
            <Lines widths={["70%", "90%", "50%", "80%", "60%"]} />
          </div>
        </div>
        <div className={`${windowClass} absolute left-[26%] top-[22%] h-[52%] w-[36%] opacity-80`}>
          <WindowBar />
          <div className="p-3">
            <Lines widths={["60%", "85%", "40%"]} />
          </div>
        </div>
        <div
          className={`${windowClass} absolute left-[38%] top-[30%] h-[58%] w-[48%] overflow-hidden`}
        >
          <WindowBar title="website.de" />
          <div className="grid h-[calc(100%-2rem)] grid-cols-2 gap-3 p-3">
            <div className="flex flex-col justify-center">
              <p className="font-display text-base text-white md:text-lg">Website</p>
              <p className="mt-1 text-[0.55rem] leading-snug text-soft">
                Moderne Websites für starke Marken.
              </p>
              <span className="mt-3 h-3 w-12 rounded-sm bg-accent/80" />
            </div>
            <div className="relative overflow-hidden rounded-md bg-gradient-to-b from-[#2A2A1A] to-[#151515]">
              <svg
                viewBox="0 0 100 80"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M0 80 L30 35 L45 50 L65 15 L100 65 L100 80 Z"
                  fill="rgba(245,252,123,0.35)"
                />
                <path d="M0 80 L25 60 L55 70 L100 55 L100 80 Z" fill="#151515" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 02 Entwicklung: Code-Editor + Tech-Kacheln ---------- */
export function DevVisual() {
  const kw = "text-accent";
  const tag = "text-[#FFD27A]";
  const str = "text-[#9EE6B8]";

  const tiles: { label: string; icon: ReactNode }[] = [
    { label: "React", icon: <SiReact /> },
    { label: "Next.js", icon: <SiNextdotjs /> },
    { label: "Node.js", icon: <SiNodedotjs /> },
    { label: "Database", icon: <LuDatabase /> },
  ];

  return (
    <div className="absolute inset-0">
      <div className={`${windowClass} absolute left-[30%] top-[12%] w-[58%]`}>
        <WindowBar title="App.tsx" />
        <pre className="overflow-hidden p-4 font-mono text-[0.55rem] leading-relaxed text-soft md:text-[0.7rem]">
          <span className={kw}>import</span> React <span className={kw}>from</span>{" "}
          <span className={str}>&quot;react&quot;</span>
          {"\n\n"}
          <span className={kw}>export default function</span> App() {"{"}
          {"\n  "}
          <span className={kw}>return</span> ({"\n    "}
          <span className={tag}>&lt;main</span> className=
          <span className={str}>&quot;app&quot;</span>
          <span className={tag}>&gt;</span>
          {"\n      "}
          <span className={tag}>&lt;h1&gt;</span>
          <span className="text-white">Ideen in die Realität</span>
          <span className={tag}>&lt;/h1&gt;</span>
          {"\n    "}
          <span className={tag}>&lt;/main&gt;</span>
          {"\n  "});{"\n"}
          {"}"}
        </pre>
      </div>

      <div className="absolute bottom-[12%] left-[30%] flex gap-2 md:gap-3">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="flex aspect-square w-12 flex-col items-center justify-center gap-1 rounded-lg border border-accent/40 bg-[#1A1A1A] text-lg text-accent shadow-[0_0_20px_-8px_rgba(245,252,123,0.6)] md:w-16 md:text-xl"
          >
            {t.icon}
            <span className="text-[0.5rem] text-soft md:text-[0.6rem]">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 03 Web Apps: Dashboard ---------- */
export function WebAppVisual() {
  const nav = [
    { icon: <LuLayoutDashboard />, label: "Dashboard", active: true },
    { icon: <LuFolder />, label: "Projekte" },
    { icon: <LuUsers />, label: "Benutzer" },
    { icon: <LuChartBar />, label: "Statistiken" },
    { icon: <LuSettings />, label: "Einstellungen" },
  ];

  return (
    <div className="absolute inset-0">
      <div
        className={`${windowClass} absolute left-[6%] top-[14%] flex h-[72%] w-[66%] overflow-hidden`}
      >
        {/* Sidebar */}
        <ul className="hidden w-[28%] flex-col gap-2 border-r border-white/10 p-3 sm:flex">
          {nav.map((n) => (
            <li
              key={n.label}
              className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[0.55rem] ${
                n.active ? "bg-accent/15 text-accent" : "text-soft/70"
              }`}
            >
              {n.icon}
              {n.label}
            </li>
          ))}
        </ul>

        {/* Inhalt */}
        <div className="flex flex-1 flex-col gap-3 p-3">
          <p className="text-sm text-white">Dashboard</p>
          <div className="rounded-md border border-white/10 p-2">
            <div className="flex items-baseline justify-between">
              <p className="text-lg text-white md:text-xl">1.524</p>
              <p className="text-[0.55rem] text-accent">+12%</p>
            </div>
            <p className="text-[0.5rem] text-soft">Aktive Nutzer</p>
            <svg viewBox="0 0 200 50" className="mt-1 h-10 w-full">
              <defs>
                <linearGradient id="dash-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#F5FC7B" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#F5FC7B" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 42 L25 38 L50 40 L75 30 L100 32 L125 22 L150 25 L175 12 L200 6 L200 50 L0 50 Z"
                fill="url(#dash-area)"
              />
              <path
                d="M0 42 L25 38 L50 40 L75 30 L100 32 L125 22 L150 25 L175 12 L200 6"
                fill="none"
                stroke="#F5FC7B"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md border border-white/10 p-2">
              <p className="text-[0.5rem] text-soft">Projekte</p>
              <p className="text-sm text-white">12</p>
            </div>
            <div className="rounded-md border border-white/10 p-2">
              <p className="text-[0.5rem] text-soft">Umsatz</p>
              <p className="text-sm text-white">8.4K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Zweites Fenster mit Donut */}
      <div
        className={`${windowClass} absolute right-[6%] top-[28%] flex h-[44%] w-[24%] flex-col items-center justify-center gap-2 p-2`}
      >
        <svg viewBox="0 0 36 36" className="h-[45%] w-auto -rotate-90">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#F5FC7B"
            strokeWidth="3"
            strokeDasharray="73.5 94.2"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-xs text-white">78%</p>
        <div className="flex h-[18%] items-end gap-1">
          {[30, 50, 40, 70, 90].map((h, i) => (
            <span key={i} className="w-1.5 rounded-sm bg-accent/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- 04 SEO: Suche + steigende Kurve ---------- */
export function SeoVisual() {
  const bars = [18, 26, 22, 34, 40, 38, 52, 60, 72, 88];

  return (
    <div className="absolute inset-0">
      <div
        className={`${windowClass} absolute left-[24%] top-[14%] h-[70%] w-[58%] overflow-hidden`}
      >
        {/* Suchleiste */}
        <div className="m-3 flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5">
          <FiSearch className="h-3 w-3 text-accent" />
          <span className="text-[0.6rem] text-white md:text-xs">Bessere Sichtbarkeit</span>
        </div>

        {/* Balken + Trendlinie */}
        <div className="absolute inset-x-4 bottom-4 top-14 flex items-end gap-[3%]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/10 to-accent/60"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <svg
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
          className="absolute inset-x-4 bottom-4 top-14 h-[calc(100%-4.5rem)] w-[calc(100%-2rem)]"
        >
          <path
            d="M0 52 L20 44 L40 46 L60 30 L80 22 L100 4"
            fill="none"
            stroke="#F5FC7B"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Kennzahl-Karten */}
      <div className={`${windowClass} absolute left-[8%] top-[46%] px-4 py-3`}>
        <p className="flex items-center gap-1.5 text-base text-accent md:text-lg">
          <FiTrendingUp /> Sichtbarkeit
        </p>
        <p className="text-[0.55rem] text-soft">steigt nachhaltig</p>
      </div>
      <div className={`${windowClass} absolute right-[6%] top-[24%] px-4 py-3`}>
        <p className="text-base text-accent md:text-lg">Top</p>
        <p className="text-[0.55rem] text-soft">Keywords</p>
      </div>
    </div>
  );
}
