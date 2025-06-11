import CallToActionSection from "@/components/callToAction";

import HeroSection from "@/components/heroSection";
import NavBar from "@/components/navBar";
import ProjectOverview from "@/components/Projects/projectOverview";
import ScrollVideoSection from "@/components/scrollytelling.tsx/container";

import Testimonials from "@/components/testimonials";
import ThreeScene from "@/components/threeJs/ThreeScene";
import ScalingDivGSAP from "@/components/scrollytelling.tsx/scaledDiv";

export default function Home() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <section>
          <div className="h-screen w-full bg-[#e9e6fb] flex flex-row justify-center items-center gap-12 px-8">
            <div className="flex-grow-[2] basis-2/3 max-w-2xl w-full">
              <HeroSection />
            </div>
            <div className="flex-grow basis-1/3 max-w-md w-full">
              <ThreeScene />
            </div>
          </div>
        </section>
        <section>
          <ScrollVideoSection
            videoSrc="/video/DreamBefore.mp4"
            sectionHeight="200vh"
            videoHeight="80vh"
            overlay1Content={
              <div>
                <h2 className="text-3xl font-bold mb-4">Unsere Story</h2>
                <p>Entdecken Sie unsere einzigartige Geschichte</p>
              </div>
            }
          />
        </section>

        <section>
          <ProjectOverview />
        </section>

        <section>
          <ScalingDivGSAP />
        </section>

        <section>
          <Testimonials />
        </section>
      </main>
      <footer>
        <section>
          <CallToActionSection />
        </section>
      </footer>
    </div>
  );
}
