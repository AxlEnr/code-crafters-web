import { useEffect, useState } from "react";
import AboutUsComponent from "./components/about_us/about_us";
import BackgroundGlow from "./components/background_glow";
import ContactPage from "./components/contact/contact";
import FooterComponent from "./components/home/footer";
import HomeComponent from "./components/home/home";
import NavbarComponent from "./components/navbar";
import Particles from "./components/pixel/Particles";
import Process from "./components/process";
import Projects from "./components/projects/projects";
import ServicesComponent from "./components/services/services";
import Team from "./components/team";
import TechStack from "./components/tech_stack";
import WhyChooseUs from "./components/why_choose_us";
import type { SectionId } from "./data/landing";

export function Index() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActive(visibleEntry.target.id as SectionId);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.08, 0.2, 0.4] }
    );

    const sections = ["home", "about", "services", "projects", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: SectionId) => {
    setActive(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <BackgroundGlow />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
      >
        <div className="h-full w-full">
          <Particles
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleColors={["#ffffff", "#ffffff", "#ffffff"]}
            moveParticlesOnHover={false}
            particleHoverFactor={1}
            alphaParticles={false}
            particleBaseSize={100}
            sizeRandomness={1}
            cameraDistance={20}
            disableRotation={false}
          />
        </div>
      </div>
      <NavbarComponent active={active} onNavigate={handleNavigate} />

      <main className="relative z-10">
        <HomeComponent onNavigate={handleNavigate} />
        <AboutUsComponent />
        <ServicesComponent />
        <Projects />
        <Team />
        <Process />
        <TechStack />
        <WhyChooseUs />
        <ContactPage />
      </main>

      <div className="relative z-10">
        <FooterComponent onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
