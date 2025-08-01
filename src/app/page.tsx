import CallToActionSection from "../components/callToAction";
import NavBar from "../components/Top/navBar";
import ProjectOverview from "../components/Projects/projectOverview";
import Testimonials from "../components/testimonials";
import HeroSection from "../components/Top/heroSection";
import Introduction from "../components/vorstellung/introduction";
import CookieConsentBanner from "../components/CookieCOnsentBanner";
import { SiteLifas } from "../components/Projects/Lifas/SiteLifas";
import { SiteVert } from "../components/Projects/Vert/SiteVert";
import { ProjectCardListLifas } from "../components/UxProjects/ProjectCardList";
import { ProjectCardListVert } from "../components/Projects/Vert/ProjectCardListVert";

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

        {/* ProjectCardList mit niedrigerem z-index */}
        <section className="hidden md:block min-h-screen flex justify-center items-center bg-[#151515] relative z-0">
          <ProjectCardListLifas />
        </section>

        {/* Andere Sektionen mit höherem z-index, falls nötig */}
        <section className="hidden md:block relative z-10">
          <SiteLifas />
        </section>

        <section className="hidden md:block min-h-screen flex justify-center items-center bg-black relative z-0">
          <ProjectCardListVert />
        </section>

        <section className="relative z-10 hidden md:block">
          <SiteVert />
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
