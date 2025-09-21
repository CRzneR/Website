import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#151515] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="mb-4">
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
        Personenbezogene Daten werden vertraulich und entsprechend der
        gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung
        behandelt.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">1. Verantwortlicher</h2>
      <p className="leading-relaxed">
        Christoph Renz
        <br />
        Herzogstandstraße
        <br />
        81539 München
        <br />
        E-Mail:{" "}
        <a
          href="mailto:kontakt@christophrenz.de"
          className="text-blue-400 hover:underline"
        >
          kontakt@christophrenz.de
        </a>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        2. Erhebung und Speicherung personenbezogener Daten
      </h2>
      <p>
        Beim Besuch unserer Website werden automatisch Daten durch den Webserver
        erfasst (sog. Server-Logfiles). Diese beinhalten z. B.:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer-URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">3. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
        Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">
        4. Rechte der betroffenen Personen
      </h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Widerspruch und Datenübertragbarkeit gemäß den
        Artikeln 15–21 DSGVO. Zur Ausübung dieser Rechte genügt eine formlose
        E-Mail an{" "}
        <a
          href="mailto:kontakt@christophrenz.de"
          className="text-blue-400 hover:underline"
        >
          kontakt@christophrenz.de
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">5. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
        beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
        personenbezogenen Daten rechtswidrig erfolgt.
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
