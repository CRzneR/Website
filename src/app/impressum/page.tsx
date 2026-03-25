import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#151515] text-white p-8">
      <div className="max-w-3xl mx-auto p-6 md:p-10">
        <div className="bg-white text-gray-800 shadow-xl rounded-2xl p-6 md:p-10">

          <h1 className="text-3xl font-bold mb-6">Impressum</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="mb-3">
              <span className="font-medium">Name / Firma:</span><br />
              [Dein vollständiger Name oder Firmenname]
            </p>
            <p className="mb-3">
              <span className="font-medium">Anschrift:</span><br />
              [Straße und Hausnummer]<br />
              [PLZ, Ort]<br />
              [Land]
            </p>
            <p>
              <span className="font-medium">Kontakt:</span><br />
              Telefon: [Deine Telefonnummer]<br />
              E-Mail:{" "}
              <a
                className="text-blue-600 hover:underline"
                href="mailto:[Deine E-Mail-Adresse]"
              >
                [Deine E-Mail-Adresse]
              </a>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Vertreten durch</h2>
            <p>[Optional: Name der vertretungsberechtigten Person]</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
            <p>
              [Optional, falls vorhanden]<br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [DE123456789]
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              [Dein Name]<br />
              [Deine Anschrift]
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Haftung für Inhalte</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
              keine Gewähr übernehmen.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Haftung für Links</h2>
            <p>
              Unsere Webseite enthält Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
              Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Streitbeilegung</h2>
            <p className="mb-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:
            </p>
            <a
              className="text-blue-600 hover:underline break-all"
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <p className="mt-2">
              Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Hinweis</h2>
            <p>
              Dieses Impressum gilt auch für folgende Onlinepräsenzen:<br />
              [Optional: LinkedIn, GitHub, etc.]
            </p>
          </section>

        </div>
      </div>

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
