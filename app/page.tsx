import ClientProjects from "@/components/ClientProjects";
import PersonalApps from "@/components/PersonalApps";
import About from "@/components/About";
import ContactList from "@/components/ContactList";
import Footer from "@/components/Footer";
import LogoHero from "@/components/Hero/Logohero";
import Contact from "@/components/Contact";
import { Certificate } from "crypto";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-bg">
      <LogoHero />
      <ClientProjects />
      <PersonalApps />
      <About />
      <Certificates />
      <ContactList />
      <Contact />
      <Footer />
    </main>
  );
}
