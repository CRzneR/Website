import CallToActionSection from "../components/callToAction";
import NavBar from "../components/Top/navBar";
import ProjectOverview from "../components/Projects/projectOverview";
import Testimonials from "../components/testimonials";
import HeroSection from "../components/Top/heroSection";
import Introduction from "../components/vorstellung/introduction";
import CookieConsentBanner from "../components/CookieCOnsentBanner";
import ScalingCardLifas from "../components/Projects/Lifas/ScalingCardLifas";
import ScalingCardVert from "../components/Projects/Vert/ScalingCardVert";

export default function Home() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <CookieConsentBanner />

        <section>
          <HeroSection />
        </section>

        <Introduction />

        <section>
          <ProjectOverview />
        </section>

        <section className="hidden md:block">
          <ScalingCardLifas />
        </section>

        {/* spacer */}
        <div className="h-[500px]"></div>

        <section className="hidden md:block">
          <ScalingCardVert />
        </section>

        <section className="relative z-10">
          <Testimonials />
        </section>
      </main>

      <footer className="relative z-20">
        <CallToActionSection />
      </footer>
    </div>
  );
}
