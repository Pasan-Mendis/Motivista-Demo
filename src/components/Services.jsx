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
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, var(--color-dark), var(--color-orange-light))"
      }}
    >
      {/* Floating Orbs - Adjusted for mobile */}
      <div
        className="absolute top-5 left-5 sm:top-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full blur-2xl sm:blur-3xl animate-float"
        style={{ backgroundColor: "rgba(255, 81, 0, 0.3)" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-2xl sm:blur-3xl animate-float-delay"
        style={{ backgroundColor: "rgba(255, 130, 0, 0.3)" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6"
            style={{
              backgroundColor: "rgba(255, 201, 41, 0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 201, 41, 0.2)"
            }}
          >
            <FaPaintBrush 
              className="animate-bounce text-sm sm:text-base" 
              style={{ color: "var(--color-orange-light)" }} 
            />
            <span
              className="text-xs sm:text-sm"
              style={{
                color: "var(--color-dark)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }}
            >
              What We Do
            </span>
          </div>
        </div>

        {/* Two-column layout - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left side - Image + Intro Text */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src={servicesIntro}
                alt="Our Services"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl sm:rounded-3xl transform transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl transition-colors duration-500"
                style={{ backgroundColor: "rgba(10, 9, 3, 0.2)" }}
              ></div>
            </div>

            <div 
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--color-dark)" }}
            >
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
                style={{ fontWeight: "700" }}
              >
                Our Services
              </h3>
              <p className="leading-relaxed">
                We provide top-notch services to help your business grow and succeed. 
                From innovative solutions to personalized strategies, we ensure quality 
                and reliability in every project we take on.
              </p>
            </div>
          </div>

          {/* Right side - Service Cards */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
                className="relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg transform transition duration-500"
                style={{
                  background: hoveredIndex === index
                    ? "linear-gradient(to bottom right, var(--color-orange), var(--color-orange-light))"
                    : "linear-gradient(to bottom right, var(--color-dark), var(--color-dark))",
                  transform: hoveredIndex === index ? "scale(1.02) sm:scale(1.05)" : "scale(1)"
                }}
              >
                {/* Icon / Image */}
                {service.icon && (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="mb-3 sm:mb-4 w-10 h-10 sm:w-14 sm:h-14 object-contain"
                  />
                )}

                <h4 
                  className="text-xl sm:text-2xl font-semibold mb-2"
                  style={{ 
                    color: "var(--color-dark)"
                  }}
                >
                  {service.title}
                </h4>

                <p 
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ 
                    color: "var(--color-neutral)"
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-2deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(20px) rotate(-2deg); }
          66% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }

        /* Mobile specific optimizations */
        @media (max-width: 640px) {
          .grid {
            grid-gap: 1rem !important;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .grid {
            grid-gap: 1.5rem !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .transform {
            transition: transform 0.3s ease !important;
          }
        }
      `}</style>
    </Section>
  );
};

export default Services;