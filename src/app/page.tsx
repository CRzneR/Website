import CallToActionSection from "../components/callToAction";

import NavBar from "../components/Top/navBar";
import ProjectOverview from "../components/Projects/projectOverview";
import Testimonials from "../components/testimonials";

import HeroSection from "../components/Top/heroSection";
import { ProjectCardList } from "../components/UxProjects/ProjectCardList";

import Introduction from "../components/vorstellung/introduction";
import CookieConsentBanner from "../components/CookieCOnsentBanner";
import { SiteLifas } from "../components/Projects/Lifas/SiteLifas";
import { SiteVert } from "../components/Projects/Vert/SiteVert";

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

        <section className="min-h-screen flex justify-center items-center bg-black">
          <ProjectCardList />
        </section>

        <section>
          <SiteLifas />
        </section>

        <section className="min-h-screen flex justify-center items-center bg-black">
          <ProjectCardList />
        </section>

        <section>
          <SiteVert />
        </section>

        <section>
          <Testimonials />
        </section>
      </main>
      <footer>
        <CallToActionSection />
      </footer>
    </div>
  );
}
