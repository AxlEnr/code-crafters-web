import React, { useState } from "react";
import AboutUsComponent from "./components/about_us/about_us";
import FooterComponent from "./components/home/footer";
import HomeComponent from "./components/home/home";
import NavbarComponent from "./components/navbar";
import Projects from "./components/projects/projects";
import ServicesComponent from "./components/services/services";
import ContactPage from "./components/contact/contact";

type Section = "home" | "about" | "services" | "projects" | "contact";

export function Index() {
  const [active, setActive] = useState<Section>("home");

  const handleNavigate = (section: Section) => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden min-h-screen">
      <NavbarComponent active={active} onNavigate={handleNavigate} />

      <main className="flex-grow items-center justify-center">
        <section id="home">
          <HomeComponent />
        </section>
        <section id="about">
          <AboutUsComponent />
        </section>
        <section id="services">
          <ServicesComponent />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>

      <footer className="text-center items-center flex-shrink-0">
        <FooterComponent />
      </footer>
    </div>
  );
}
