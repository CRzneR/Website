"use client";

const LIST_ITEMS = ["UI Design", "UX Design", "Strategy", "Development"];

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

export default function MorphSectionMobileExtras() {
  return (
    <div className="flex flex-col md:hidden gap-8 px-6 py-12" style={{ background: "#151515" }}>
      {/* ── My Services ── */}
      <div className="flex flex-col gap-4 select-none">
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-1"
          style={{ color: "#FBFF83" }}
        >
          My Services
        </p>
        {LIST_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-sm" style={{ color: "#444" }}>
              —
            </span>
            <span
              className="text-base font-medium uppercase tracking-wide"
              style={{ color: "#CEC9C9" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* ── Certificates ── */}
      <div className="flex flex-col gap-3">
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-1"
          style={{ color: "#FBFF83" }}
        >
          Certificates
        </p>
        <div className="grid grid-cols-2 gap-3">
          {CERTS.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-3 rounded-2xl"
              style={{
                background: "#1e1e1e",
                border: "1px solid #2e2e2e",
                aspectRatio: "1 / 1",
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden mx-auto p-1"
                style={{ background: "#FEFFA422" }}
              >
                <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-semibold leading-tight" style={{ color: "#CEC9C9" }}>
                  {cert.title}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#555" }}>
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
