// src/pages/Apex.jsx
import React from "react";
import Hero from "../components/apex/Hero";
import Intro from "../components/apex/Intro";
import Services from "../components/apex/Services";
import WhyChooseUs from "../components/apex/WhyChooseUs";
import Clients from "../components/apex/Clients";
import Projects from "../components/apex/Projects";
import SecondaryNavbar from "../components/SecondaryNavbar";

export default function Apex() {
  const apexLinks = [
    { label: "Intro", href: "intro" },
    { label: "Services", href: "services" },
    { label: "Projects", href: "projects" },
    { label: "Why Choose Us", href: "why-choose-us" },
    { label: "Clients", href: "clients" },
  ];

  return (
    <div className="flex-grow w-full">
      <SecondaryNavbar links={apexLinks} />

      <Hero />

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

      <section id="clients">
        <Clients />
      </section>
    </div>
  );
}
