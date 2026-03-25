import Link from "next/link";

export default function DatenschutzPage() {
  return (
  <main className="max-w-3xl mx-auto px-6 py-10">
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10">

      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Datenschutzerklärung</h1>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">1. Allgemeine Hinweise</h2>
        <p className="text-sm leading-relaxed">
          Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">2. Verantwortlicher</h2>
        <p className="text-sm leading-relaxed">
          Christoph Renz<br />
          Herzogstandstraße 34<br />
          81539 München<br />
          Deutschland<br /><br />
          E-Mail: <a href="mailto:kontakt@christophrenz.de" className="text-blue-600 hover:underline">kontakt@christophrenz.de</a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>

        <h3 className="font-medium mt-4 mb-1">a) Beim Besuch der Website</h3>
        <p className="text-sm leading-relaxed">
          Beim Aufrufen dieser Website werden durch den Hosting-Provider automatisch Informationen erfasst (z. B. IP-Adresse, Browser, Uhrzeit). Diese Daten sind technisch erforderlich.
        </p>

        <p className="text-sm mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>

        <h3 className="font-medium mt-4 mb-1">b) Kontaktformular</h3>
        <p className="text-sm leading-relaxed">
          Bei Nutzung des Kontaktformulars werden Ihre Angaben (z. B. Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet.
        </p>
        <p className="text-sm mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>

        <h3 className="font-medium mt-4 mb-1">c) Vercel Analytics</h3>
        <p className="text-sm leading-relaxed">
          Diese Website nutzt Vercel Analytics zur anonymisierten Auswertung der Nutzung. Es werden keine Cookies gesetzt und keine personenbezogenen Profile erstellt.
        </p>
        <p className="text-sm mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
      </section>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">4. Cookies</h2>
        <p className="text-sm leading-relaxed">
          Diese Website verwendet Cookies. Beim ersten Besuch können Sie über ein Cookie-Banner Ihre Einwilligung erteilen oder ablehnen.
        </p>
        <p className="text-sm mt-2">
          Rechtsgrundlagen:<br />
          - Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
          - Art. 6 Abs. 1 lit. f DSGVO (notwendige Cookies)
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">5. Hosting</h2>
        <p className="text-sm leading-relaxed">
          Diese Website wird bei Vercel gehostet. Dabei werden Daten wie IP-Adressen verarbeitet. Die Übertragung erfolgt auf Basis von Standardvertragsklauseln.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">6. Ihre Rechte</h2>
        <p className="text-sm leading-relaxed">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit und Widerspruch.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">7. Widerruf Ihrer Einwilligung</h2>
        <p className="text-sm leading-relaxed">
          Eine erteilte Einwilligung können Sie jederzeit widerrufen.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-medium text-lg mb-2">8. Beschwerderecht</h2>
        <p className="text-sm leading-relaxed">
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      </section>

      <section>
        <h2 className="font-medium text-lg mb-2">9. Aktualität</h2>
        <p className="text-sm leading-relaxed">
          Diese Datenschutzerklärung ist aktuell gültig (Stand: 2026).
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

    </div>
  </main>
  );
}
