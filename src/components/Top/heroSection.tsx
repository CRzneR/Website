import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Outline C - Jetzt mit Next.js Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/image/logo.svg"
          alt="Hintergrund-Logo"
          width={500} // Maximale Größe für responsives Verhalten
          height={500}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center h-full px-8">
        <div className="text-left  mx-auto">
          <h1 className="text-6xl md:text-9xl font-bold text-gray-300 leading-tight">
            DESIGNER
          </h1>
          <h1 className="pl-20 md:pl-60 text-6xl md:text-9xl font-bold text-gray-300 leading-tight">
            AND DEVELOPER
          </h1>
        </div>
        <p className=" md:mt-12 text-2xl md:text-4xl font-semibold text-center">
          CHRISTOPH
          <br />
          RENZ
        </p>
      </div>
    </section>
  );
}
