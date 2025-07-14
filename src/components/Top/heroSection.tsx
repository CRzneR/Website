import HeadingEffect from "./HeadingEffect";
import LogoAnimation from "./LogoAnimation";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <LogoAnimation />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center h-full px-8">
        <div className="text-left  mx-auto">
          <HeadingEffect />
        </div>
      </div>
      <div>
        <p>Scroll to Explore</p>
      </div>
    </section>
  );
}
