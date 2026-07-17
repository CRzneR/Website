"use client";

import SplitTextAnimation from "../components/effects/splitText";

const CERTS = [
  {
    title: "AZ-900",
    issuer: "Microsoft",
    year: "01/2025",
    image: "/image/certification/azure.png",
  },
  {
    title: "CompTIA Tech+ (V6)",
    issuer: "CompTIA",
    year: "10/2025",
    image: "/image/certification/compTIA.png",
  },
  {
    title: "WDE™",
    issuer: "JS Institute",
    year: "02/2025",
    image: "/image/certification/WDE.png",
  },
  {
    title: "JSE™",
    issuer: "JS Institute",
    year: "05/2025",
    image: "/image/certification/JSE.png",
  },
];

export default function MorphSectionMobile() {
  return (
    <div className="md:hidden flex flex-col gap-8 px-6 py-12" style={{ background: "#151515" }}>
      {/* ── My Profile ── */}
      <div className="flex flex-col gap-4 select-none">
        <SplitTextAnimation
          text="My profile"
          tag="p"
          className="text-xl sm:text-xl  tracking-widest font-semibold mb-1 text-[#FBFF83]"
        />

        <p className="text-base font-medium leading-snug" style={{ color: "#CEC9C9" }}>
          I build web applications tailored to your needs, combining thoughtful UI & UX design with
          seamless functionality to create outstanding user experiences.
        </p>
      </div>

      {/* ── Certificates ── */}
      <div className="flex flex-col gap-4">
        <SplitTextAnimation
          text="Certificates"
          tag="p"
          className="text-xl sm:text-xl  tracking-widest font-semibold text-[#FBFF83]"
        />

        <div className="grid grid-cols-2 gap-3">
          {CERTS.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-3 px-4 py-6 rounded-2xl transition-transform active:scale-[0.97]"
              style={{
                background: "linear-gradient(180deg, #1c1c1c 0%, #171717 100%)",
                border: "1px solid rgba(254, 255, 164, 0.1)",
              }}
            >
              {/* Icon Badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden p-2.5"
                style={{
                  background: "rgba(254, 255, 164, 0.08)",
                  boxShadow: "inset 0 0 0 1px rgba(254, 255, 164, 0.15)",
                }}
              >
                <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
              </div>

              {/* Title */}
              <p className="text-sm font-semibold leading-tight" style={{ color: "#EDEAE3" }}>
                {cert.title}
              </p>

              {/* Divider */}
              <div className="w-6 h-px" style={{ background: "rgba(254, 255, 164, 0.2)" }} />

              {/* Meta */}
              <div className="flex flex-col gap-0.5">
                <p className="text-[11px] uppercase tracking-wide" style={{ color: "#8a8a8a" }}>
                  {cert.issuer}
                </p>
                <p className="text-[11px]" style={{ color: "#5c5c5c" }}>
                  {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
