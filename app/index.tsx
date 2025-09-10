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

  return (
    <>
    <body className="overflow-x-hidden min-h-screen">
        <NavbarComponent active={active} onNavigate={setActive} />

      <main className="flex-grow items-center justify-center">
        {active === "home" && <HomeComponent />}
        {active === "about" && <AboutUsComponent />}
        {active === "services" && <ServicesComponent />}
        {active === "projects" && <Projects />}
        {active === "contact" && <ContactPage />}
      </main>

      <footer className="text-center items-center flex-shrink-0">
        <FooterComponent />
      </footer>
    </body>
    </>
  );
}