// src/components/Services.jsx
import React, { useState } from "react";
import services from "../services/serviceData";
import Section from "./ui/Section";
import servicesIntro from "../assets/images/services-intro.jpg";
import { FaPaintBrush } from "react-icons/fa";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, var(--color-dark), var(--color-orange-light))"
      }}
    >
      {/* Floating Orbs */}
      <div
        className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl animate-float"
        style={{ backgroundColor: "rgba(255, 81, 0, 0.3)" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-3xl animate-float-delay"
        style={{ backgroundColor: "rgba(255, 130, 0, 0.3)" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-6"
            style={{
              backgroundColor: "rgba(255, 201, 41, 0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 201, 41, 0.2)"
            }}
          >
            <FaPaintBrush className="animate-bounce" style={{ color: "var(--color-orange-light)" }} />
            <span
              style={{
                color: "var(--color-dark)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.8rem"
              }}
            >
              What We Do
            </span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side - Image + Intro Text */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={servicesIntro}
                alt="Our Services"
                className="w-full h-96 object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 rounded-3xl transition-colors duration-500"
                style={{ backgroundColor: "rgba(10, 9, 3, 0.2)" }}
              ></div>
            </div>

            <div style={{ color: "var(--color-dark)", fontSize: "1.125rem", lineHeight: "1.75rem" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>Our Services</h3>
              <p>
                We provide top-notch services to help your business grow and succeed. 
                From innovative solutions to personalized strategies, we ensure quality 
                and reliability in every project we take on.
              </p>
            </div>
          </div>

          {/* Right side - Service Cards */}
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative p-6 rounded-3xl shadow-lg transform transition duration-500"
                style={{
                  background: hoveredIndex === index
                    ? "linear-gradient(to bottom right, var(--color-orange), var(--color-orange-light))"
                    : "linear-gradient(to bottom right, var(--color-dark), var(--color-dark))",
                  transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)"
                }}
              >
                {/* Icon / Image */}
                {service.icon && (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="mb-4 w-14 h-14 object-contain"
                  />
                )}

                <h4 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--color-dark)", marginBottom: "0.5rem" }}>
                  {service.title}
                </h4>

                <p style={{ color: "var(--color-neutral)", lineHeight: "1.5rem" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
