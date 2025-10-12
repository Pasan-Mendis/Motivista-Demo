// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CounterCard from "../components/CounterCard";
import MeetTheTeam from "../components/MeetTheTeam";
import RecentProjects from "../components/RecentProjects";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="flex-grow w-full">

      {/* Hero / Landing Section */}
      <Hero />

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      

      <CounterCard/>
      <section id="team">
      <MeetTheTeam/>
      </section>
      <section id="projects">
        <RecentProjects/>
      </section>
      
      <Testimonials/>
    </div>
  );
}
