import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Christoph Renz",
  robots: { index: false },
};

/* Wiederkehrende Styles an einer Stelle – identisch zur Datenschutzseite */
const section = "border-t border-white/10 py-8 md:py-10";
const h2 = "mb-4 font-display text-xl uppercase tracking-wide text-white md:text-2xl";
const label = "mb-1 text-sm font-bold uppercase tracking-[0.08em] text-accent";
const text = "text-base leading-relaxed text-[#CEC9C9] md:text-lg";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-6 py-16 md:px-[6.5vw] md:py-24">
      <div className="max-w-3xl">
        <p className="mb-4 text-base uppercase text-accent md:text-lg">{"// Rechtliches"}</p>
        <h1 className="mb-12 font-display text-5xl uppercase leading-[0.9] text-accent md:mb-16 md:text-7xl">
          Impressum
        </h1>

        <section className={section}>
          <h2 className={h2}>Angaben gemäß § 5 DDG</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className={label}>Name</p>
              <p className={text}>Christoph Renz</p>
            </div>

            <div>
              <p className={label}>Anschrift</p>
              <address className={`${text} not-italic`}>
                Herzogstandstraße 34
                <br />
                81539 München
                <br />
                Deutschland
              </address>
            </div>

            <div>
              <p className={label}>Kontakt</p>
              <p className={text}>
                <a
                  href="mailto:kontakt@christophrenz.de"
                  className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                >
                  kontakt@christophrenz.de
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={section}>
          <h2 className={h2}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <address className={`${text} not-italic`}>
            Christoph Renz
            <br />
            Herzogstandstraße 34, 81539 München, Deutschland
          </address>
        </section>

        <section className={section}>
          <h2 className={h2}>Haftung für Inhalte</h2>
          <p className={text}>
            Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>Urheberrecht</h2>
          <p className={text}>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht.
          </p>
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
