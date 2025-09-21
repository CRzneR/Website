export default function ImpressumPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <p>
        Christoph Renz
        <br />
        Herzogstandstraße
        <br />
        81539 München
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a
          href="mailto:kontakt@christophrenz.de"
          className="text-blue-600 underline"
        >
          kontakt@christophrenz.de
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Website</h2>
      <p>
        <a
          href="https://www.christophrenz.de"
          className="text-blue-600 underline"
        >
          www.christophrenz.de
        </a>
      </p>
    </main>
  );
}
