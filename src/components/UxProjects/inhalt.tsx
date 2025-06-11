export function Inhalt() {
  return (
    // Unterhalb deines aktuellen Returns einfügen
    <section className="bg-white text-black px-10 py-20">
      <div className="text-right text-sm font-semibold">
        name of the project
      </div>
      <div className="text-6xl font-black leading-tight mt-10">
        <div>ARE PART OF MY LIFE</div>
        <div>ARE PART OF MY LIFE</div>
        <div>ARE PART OF MY LIFE</div>
      </div>
      <div className="mt-8 flex justify-between flex-col md:flex-row md:items-start md:gap-20">
        <p className="max-w-md text-sm text-gray-800">
          Let’s come together and create innovative solutions – let’s work hand
          in hand to make an impact and achieve lasting success together!
        </p>
        <ul className="text-sm font-bold mt-6 md:mt-0 space-y-2">
          <li>
            → <span className="font-extrabold">USER INTERFACE</span>
          </li>
          <li>
            → <span className="font-extrabold">USER EXPERIENCE</span>
          </li>
          <li>
            → <span className="font-extrabold">PROTOTYPE</span>
          </li>
        </ul>
      </div>

      <div className="mt-20">
        <h2 className="text-xl font-bold mb-4">USER INTERFACE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-300 h-40 rounded" />
          <div className="bg-gray-300 h-40 rounded" />
          <div className="bg-gray-300 h-40 rounded" />
        </div>
      </div>
    </section>
  );
}
