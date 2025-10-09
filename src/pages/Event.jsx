import React, { useMemo } from "react";
import Hero from "../components/events/Hero";
import About from "../components/events/About";
import Expertise from "../components/events/Expertise";
import WhyChooseUs from "../components/events/WhyChooseUs";
import Projects from "../components/events/Projects";
import SecondaryNavbar from "../components/SecondaryNavbar";

export default function Event() {
  // Custom links for the Event page
  const eventLinks = useMemo(
    () => [
      { label: "About", href: "about" },
      { label: "Projects", href: "projects" },
      { label: "Expertise", href: "expertise" },
      { label: "Why Choose Us", href: "why-choose-us" },
    ],
    []
  );

  return (
    <div className="flex-grow w-full">
      {/* Pass page-specific links */}
      <SecondaryNavbar links={eventLinks} />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>


      <section id="expertise">
        <Expertise />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
    </div>
  );
}
