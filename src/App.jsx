import Navigation from "./components/layout/Navigation.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import ToolStrip from "./components/hero/ToolStrip.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import EducationSection from "./components/sections/EducationSection.jsx";
import CertificatesSection from "./components/sections/CertificatesSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ToolStrip />
      <main className="wrap">
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
