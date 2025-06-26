import CallToActionSection from "../components/callToAction";

import NavBar from "../components/Top/navBar";
import ProjectOverview from "../components/Projects/projectOverview";
import ScrollVideoSection from "../components/scrollytelling.tsx/container";
import Testimonials from "../components/testimonials";

import HeroSection from "../components/Top/heroSection";
import { ProjectCardList } from "../components/UxProjects/ProjectCardList";
import Leistungen from "../components/UxProjects/Leistungen";

const customHeadings = [
  "USER EXPERIENCE ",
  "INTERFACE DESIGN",
  "DEVELOPMENT",
  "STRATEGY",
];

const customStyles = {
  fontSize: "3.5rem",
  margin: "0 0 2rem 0",
  fontFamily: "sans-serif",
};

const containerStyles = {
  maxWidth: "900px",
  padding: "3rem",
};

export default function Home() {
  return (
    <div className=" ">
      <nav>
        <NavBar />
      </nav>
      <main>
        {/* Hero Section mit Hintergrundbild */}

        <section>
          <HeroSection />
        </section>

        {/* Weitere Sections... */}
        <section>
          <ScrollVideoSection
            videoSrc="/video/Dream1.mp4"
            sectionHeight="200vh"
            videoHeight="80vh"
            overlay1Content={
              <div>
                <h2 className="text-3xl font-bold mb-4">This is my Story</h2>
                <p>
                  ICH BIN IN EINER DIGITALEN WELT AUFGEWACHSEN. UM DIESE MIT ZU
                  GESTALTEN HABE ICH WEBENTWICKLUNG GELERNT UND KANN NUN MEINE
                  DIENSTE ANBIETEN{" "}
                </p>
              </div>
            }
          />
        </section>

        <Leistungen
          headings={customHeadings}
          headingStyle={customStyles}
          containerStyle={containerStyles}
        />

        <section>
          <ProjectOverview />
        </section>

        <main className="min-h-screen flex justify-center items-center bg-white">
          <ProjectCardList />
        </main>

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
