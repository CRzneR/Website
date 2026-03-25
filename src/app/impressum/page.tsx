import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#151515] text-white p-8">
 
          <h1 className="text-3xl font-bold mb-6">Impressum</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="mb-3">
              <span className="font-medium">Name / Firma:</span><br />
              [Christoph Renz]
            </p>
            <p className="mb-3">
              <span className="font-medium">Anschrift:</span><br />
              [Herzogstandstraße]<br />
              [81539, München]<br />
              [Deutschland]
            </p>
            <p>
              <span className="font-medium">Kontakt:</span><br />
              E-Mail:
              <a
                className="text-blue-600 hover:underline"
                href="mailto:[kontakt@christophrenz.de]"
              >
                kontakt@christophrenz.de
              </a>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              [Christoph Renz]<br />
              [Herzogstandstraße, 81539, München, Deutschland]
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
            <p>
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
              keine Gewähr übernehmen.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht.
            </p>
          </section>

      {/* Zurück-Button */}
      <div className="mt-12 flex justify-center">
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
