import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#151515] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <p className="mb-4">Angaben gemäß § 5 TMG</p>
      <p className="leading-relaxed">
        Christoph Renz
        <br />
        WeWork
        <br />
        Neuturmstraße 7
        <br />
        80331 München
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a
          href="mailto:kontakt@christophrenz.de"
          className="text-blue-400 hover:underline"
        >
          kontakt@christophrenz.de
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Website</h2>
      <p>
        <a
          href="https://www.christophrenz.de"
          className="text-blue-400 hover:underline"
        >
          www.christophrenz.de
        </a>
      </p>

      {/* Zurück-Button */}
      <div className="mt-12">
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
