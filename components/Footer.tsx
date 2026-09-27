import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-[6.5vw] py-[2vw] text-[0.85vw] font-bold uppercase text-muted">
      <p>© 2026 Christoph Renz – Alle Rechte vorbehalten</p>
      <nav aria-label="Rechtliches" className="flex gap-[2vw]">
        <Link href="/datenschutz" className="transition-colors hover:text-white">
          Datenschutz
        </Link>
        <Link href="/impressum" className="transition-colors hover:text-white">
          Impressum
        </Link>
      </nav>
    </footer>
  );
}
