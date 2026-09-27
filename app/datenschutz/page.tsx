import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – Christoph Renz",
  robots: { index: false },
};

/* Wiederkehrende Styles an einer Stelle */
const section = "border-t border-white/10 py-8 md:py-10";
const h2 = "mb-4 font-display text-xl uppercase tracking-wide text-white md:text-2xl";
const h3 = "mb-2 mt-6 text-sm font-bold uppercase tracking-[0.08em] text-accent";
const text = "text-base leading-relaxed text-[#CEC9C9] md:text-lg";
const basis = "mt-3 text-sm uppercase tracking-[0.06em] text-muted";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-6 py-16 md:px-[6.5vw] md:py-24">
      <div className="max-w-3xl">
        <p className="mb-4 text-base uppercase text-accent md:text-lg">{"// Rechtliches"}</p>
        <h1 className="mb-12 font-display text-5xl uppercase leading-[0.9] text-accent md:mb-16 md:text-7xl">
          Datenschutzerklärung
        </h1>

        <section className={section}>
          <h2 className={h2}>1. Allgemeine Hinweise</h2>
          <p className={text}>
            Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Ich behandle Ihre
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>2. Verantwortlicher</h2>
          <address className={`${text} not-italic`}>
            Christoph Renz
            <br />
            Herzogstandstraße 34
            <br />
            81539 München
            <br />
            Deutschland
            <br />
            <br />
            E-Mail:{" "}
            <a
              href="mailto:kontakt@christophrenz.de"
              className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              kontakt@christophrenz.de
            </a>
          </address>
        </section>

        <section className={section}>
          <h2 className={h2}>3. Erhebung und Speicherung personenbezogener Daten</h2>

          <h3 className={h3}>a) Beim Besuch der Website</h3>
          <p className={text}>
            Beim Aufrufen dieser Website werden durch den Hosting-Provider automatisch Informationen
            erfasst (z. B. IP-Adresse, Browser, Uhrzeit). Diese Daten sind technisch erforderlich.
          </p>
          <p className={basis}>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>

          <h3 className={h3}>b) Kontaktformular</h3>
          <p className={text}>
            Bei Nutzung des Kontaktformulars werden Ihre Angaben (z. B. Name, E-Mail, Nachricht) zur
            Bearbeitung Ihrer Anfrage verarbeitet.
          </p>
          <p className={basis}>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>

          <h3 className={h3}>c) Vercel Analytics</h3>
          <p className={text}>
            Diese Website nutzt Vercel Analytics zur anonymisierten Auswertung der Nutzung. Es
            werden keine Cookies gesetzt und keine personenbezogenen Profile erstellt.
          </p>
          <p className={basis}>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
        </section>

        <section className={section}>
          <h2 className={h2}>4. Cookies</h2>
          <p className={text}>
            Diese Website verwendet Cookies. Beim ersten Besuch können Sie über ein Cookie-Banner
            Ihre Einwilligung erteilen oder ablehnen.
          </p>
          <p className={basis}>
            Rechtsgrundlagen:
            <br />
            – Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
            <br />– Art. 6 Abs. 1 lit. f DSGVO (notwendige Cookies)
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>5. Hosting</h2>
          <p className={text}>
            Diese Website wird bei Vercel gehostet. Dabei werden Daten wie IP-Adressen verarbeitet.
            Die Übertragung erfolgt auf Basis von Standardvertragsklauseln.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>6. Ihre Rechte</h2>
          <p className={text}>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
            sowie Datenübertragbarkeit und Widerspruch.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>7. Widerruf Ihrer Einwilligung</h2>
          <p className={text}>Eine erteilte Einwilligung können Sie jederzeit widerrufen.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>8. Beschwerderecht</h2>
          <p className={text}>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>9. Aktualität</h2>
          <p className={text}>Diese Datenschutzerklärung ist aktuell gültig (Stand: 2026).</p>
        </section>

        {/* Zurück – gleicher Stil wie der Contact-Button */}
        <div className="border-t border-white/10 pt-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-3 text-sm uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </span>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
