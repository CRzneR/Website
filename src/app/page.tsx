import CallToActionSection from "../components/callToAction";
import NavBar from "../components/Top/navBar";
import ProjectOverview from "../components/Projects/projectOverview";
import Testimonials from "../components/testimonials";
import HeroSection from "../components/Top/heroSection";
import Introduction from "../components/vorstellung/introduction";
import CookieConsentBanner from "../components/CookieCOnsentBanner";
import ScalingCardLifas from "../components/Projects/Lifas/ScalingCardLifas";
import ScalingCardVert from "../components/Projects/Vert/ScalingCardVert";
import CallToActionMobile from "../components/CallToActionMobile";
import Certificates from "../components/Certificates";

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
        <div className="hidden md:block h-[500px]"></div>

        <section className="hidden md:block ">
          <ScalingCardVert />
        </section>

        <section>
          <Certificates />
        </section>

        <section className="relative z-10">
          <Testimonials />
        </section>
      </main>

      <footer className="relative z-20 hidden md:block">
        <CallToActionSection />
      </footer>
      <footer className="relative z-20 block md:hidden">
        <CallToActionMobile />
      </footer>
    </div>
  );
}
