import CallToActionSection from "@/components/callToAction";
import TextReveal from "@/components/effects/textReveal";

import Gradientdiv from "@/components/Gradientdiv";
import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";
import ProjectOverview from "@/components/Projects/projectOverview";

import Testimonials from "@/components/testimonials";
import ThreeScene from "@/components/threeJs/ThreeScene";

export default function Home() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Gradientdiv
          className="h-screen w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
     bg-[length:200%] animate-gradient flex flex-row justify-center items-center gap-12 px-8"
        >
          <div className="flex-grow-[2] basis-2/3 max-w-2xl w-full">
            <HeroSection />
          </div>
          <div className="flex-grow basis-1/3 max-w-md w-full">
            <ThreeScene />
          </div>
        </Gradientdiv>

        <TextReveal />
        <section>
          <ProjectOverview />
        </section>
        <section>
          <Testimonials />
        </section>
      </main>
      <footer>
        {" "}
        <section>
          <CallToActionSection />
        </section>
      </footer>
    </div>
  );
}
