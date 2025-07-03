// components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-16 lg:px-32 py-20">
      {/* Textbereich */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-black mb-2 font-cormorant">
          Christoph Renz
        </h2>
        <h1 className="text-[150px] leading-none text-black mb-6 font-bstyle">
          Developer <br />
          Digital Designer
        </h1>
        <p className="text-xl font-bold text-gray-800 uppercase leading-relaxed tracking-wide max-w-2xl mx-auto mb-8">
          Ich bin in einer digitalen Welt aufgewachsen. Um diese mit zu
          gestalten habe ich Webentwicklung gelernt und kann nun meine Dienste
          anbieten
        </p>
      </div>
    </section>
  );
}
