// src/pages/Academy.jsx
import Hero from "../components/academy/Hero"
import Intro from "../components/academy/Intro"
import Services from "../components/academy/Services";
import WhyChooseUs from "../components/academy/WhyChooseUs"; 
import Projects from "../components/academy/ProjectsGallery";
import SecondaryNavbar from "../components/SecondaryNavbar";

import React from "react";

export default function Academy() {
  const academyLinks = [
    { label: "Intro", href:"intro"},
    { label: "Services", href: "services" },
    { label: "Projects", href: "projects" },
    { label: "Why Choose Us", href: "why-choose-us" },
  ];
  return (
    <div className="flex-grow w-full">

      <SecondaryNavbar links={academyLinks} />

      <Hero/>
      <section id="intro">
      <Intro />
      </section>
      
      <section id="services">
      <Services />
      </section>

      <section id="projects">
      <Projects />
      </section>

      <section id="why-choose-us">
      <WhyChooseUs />
      </section>

    </div>
  );
}
