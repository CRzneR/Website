import CallToActionSection from "../components/callToAction";

import NavBar from "../components/Top/navBar";
import ProjectOverview from "../components/Projects/projectOverview";
import Testimonials from "../components/testimonials";

import HeroSection from "../components/Top/heroSection";
import { ProjectCardList } from "../components/UxProjects/ProjectCardList";
import { Site } from "../components/Projects/ProjectSite.tsx/Site";
import Introduction from "../components/vorstellung/introduction";
import CookieConsentBanner from "../components/CookieCOnsentBanner";

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

        <main className="min-h-screen flex justify-center items-center bg-white">
          <ProjectCardList />
        </main>

        <section>
          <Site />
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
