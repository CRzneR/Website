import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#151515] text-white p-8">
    <section className="space-y-6 text-gray-300 leading-relaxed">
      
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">1. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. In dieser Datenschutzerklärung informiere ich Sie darüber, welche Daten auf meiner Website erhoben und wie diese verwendet werden.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">2. Verantwortliche Stelle</h2>
        <p>
          [Christoph Renz] <br/>
          [Herzogstandstraße, 81539 München ] <br/>
          [kontakt@christophrenz.de]
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Provider erfasst:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und Version</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p className="mt-2">
          Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs der Website und werden nicht dazu verwendet, Rückschlüsse auf Ihre Person zu ziehen.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">4. Hosting und Tracking durch Vercel</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website werden automatisch Daten erfasst und verarbeitet.
        </p>
        <p className="mt-2">
          Zusätzlich nutze ich Vercel Analytics zur Analyse des Nutzerverhaltens:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Besuchte Seiten</li>
          <li>Verweildauer</li>
          <li>Herkunft des Besuchers</li>
          <li>Geräte- und Browserinformationen</li>
        </ul>
        <p className="mt-2">
          Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p className="mt-2">
          Mehr Infos:
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" className="text-blue-400 underline">
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">5. Verwendung von Cookies</h2>
        <p>
          Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Technisch notwendige Cookies</li>
          <li>Analyse-Cookies</li>
        </ul>
        <p className="mt-2">
          Sie können Ihre Cookie-Einstellungen jederzeit über Ihren Browser anpassen oder Cookies löschen.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">6. Ihre Rechte</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">7. Widerruf Ihrer Einwilligung</h2>
        <p>
          Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Eine formlose Mitteilung per E-Mail reicht aus.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">8. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">9. Aktualität und Änderung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und wird bei Bedarf angepasst.
        </p>
      </div>

      {/* Zurück-Button */}
      <div className="mt-12">
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </section>
    </main>
  );
}
