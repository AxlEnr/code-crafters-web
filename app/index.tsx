import React, { useState } from "react";
import AboutUsComponent from "./components/about_us/about_us";
import FooterComponent from "./components/home/footer";
import HomeComponent from "./components/home/home";
import NavbarComponent from "./components/navbar";
import Projects from "./components/projects/projects";
import ServicesComponent from "./components/services/services";

type Section = "home" | "about" | "services" | "projects" | "contact";

export function Index() {
  const [active, setActive] = useState<Section>("home");

  return (
    <>
    <body className="overflow-x-hidden">
        <NavbarComponent active={active} onNavigate={setActive} />

      <main className="flex-col items-center justify-center">
        {active === "home" && <HomeComponent />}
        {active === "about" && <AboutUsComponent />}
        {active === "services" && <ServicesComponent />}
        {active === "projects" && <Projects />}
      </main>

      <footer className="text-center items-center">
        <FooterComponent />
      </footer>
    </body>
    </>
  );
}