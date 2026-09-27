import ClientProjects from "@/components/ClientProjects";
import PersonalApps from "@/components/PersonalApps";
import About from "@/components/About";
import ContactList from "@/components/ContactList";
import Footer from "@/components/Footer";
import LogoHero from "@/components/Hero/Logohero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-bg">
      <LogoHero />
      <ClientProjects />
      <PersonalApps />
      <About />
      <ContactList />
      <Contact />
      <Footer />
    </main>
  );
}
