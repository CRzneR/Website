export default function DatenschutzPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Datenschutzerklärung</h1>

      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
        Personenbezogene Daten werden vertraulich und entsprechend der
        gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung
        behandelt.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Verantwortlicher</h2>
      <p>
        Christoph Renz
        <br />
        Herzogstandstraße
        <br />
        81539 München
        <br />
        E-Mail:{" "}
        <a
          href="mailto:kontakt@christophrenz.de"
          className="text-blue-600 underline"
        >
          kontakt@christophrenz.de
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Erhebung und Speicherung personenbezogener Daten
      </h2>
      <p>
        Beim Besuch unserer Website werden automatisch Daten durch den Webserver
        erfasst (sog. Server-Logfiles). Diese beinhalten z. B.:
      </p>
      <ul className="list-disc list-inside">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer-URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
        Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Rechte der betroffenen Personen
      </h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Widerspruch und Datenübertragbarkeit gemäß den
        Artikeln 15–21 DSGVO. Zur Ausübung dieser Rechte genügt eine formlose
        E-Mail an{" "}
        <a
          href="mailto:kontakt@christophrenz.de"
          className="text-blue-600 underline"
        >
          kontakt@christophrenz.de
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
        beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
        personenbezogenen Daten rechtswidrig erfolgt.
      </p>
    </main>
  );
}
