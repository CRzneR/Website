export default function NotFound() {
  return (
    <main className="bg-[#151515] h-screen flex flex-col items-center justify-center text-[#CEC9C9]">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="mt-4">Diese Seite existiert nicht.</p>
      <a href="/" className="mt-8 underline">
        Zurück zur Startseite
      </a>
    </main>
  );
}
