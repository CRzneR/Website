import CallToActionSection from "@/components/callToAction";

import Gradientdiv from "@/components/Gradientdiv";
import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";
import ProjectOverview from "@/components/Projects/projectOverview";
import { Container } from "@/components/scrollytelling.tsx/container";

import Testimonials from "@/components/testimonials";
import ThreeScene from "@/components/threeJs/ThreeScene";

export default function Home() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <section>
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
        </section>

        <section>
          <Container />
        </section>

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
