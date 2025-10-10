import React, { useState } from "react";
import services from "../services/serviceData";
import servicesIntro from "../assets/images/services-intro.png";
import { FaPaintBrush } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Inside your component:

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  return (
    <section
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-background-dark) !important',
      }}
    >
      {/* Floating Orbs */}
      <div
        className="absolute top-5 left-5 sm:top-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full blur-2xl sm:blur-3xl animate-float opacity-20"
        style={{ backgroundColor: 'var(--color-accent) !important' }}
      />
      <div
        className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full blur-2xl sm:blur-3xl animate-float-delay opacity-20"
        style={{ backgroundColor: 'var(--color-highlight) !important' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 border"
            style={{
              backgroundColor: 'var(--overlay-accent-light) !important',
              backdropFilter: 'blur(8px)',
              borderColor: 'var(--color-accent) !important',
            }}
          >
            <FaPaintBrush
              className="animate-bounce text-sm sm:text-base"
              style={{ color: 'var(--color-accent) !important' }}
            />
            <span
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
              style={{
                color: 'var(--color-primary) !important',
              }}
            >
              What We Do
            </span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group">
              <div 
                className="absolute -inset-2 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight)) !important',
                }}
              />
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={servicesIntro}
                  alt="Our Services"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  style={{
                    boxShadow: 'var(--shadow-card-hover) !important',
                  }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ 
                    backgroundColor: 'rgba(10, 9, 3, 0.1) !important',
                  }}
                />
              </div>
            </div>

            <div className="text-base sm:text-lg leading-relaxed text-center lg:text-left">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4"
                style={{ 
                  color: 'var(--color-primary) !important',
                  fontFamily: 'var(--font-heading) !important',
                }}
              >
                Our Services
              </h3>
              
              <div 
                className="h-1 w-20 rounded-full mb-4 mx-auto lg:mx-0"
                style={{
                  background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight)) !important',
                }}
              />
              
              <p 
                className="leading-relaxed"
                style={{ color: 'var(--color-neutral) !important' }}
              >
                At Motivista, we believe in the power of creativity, innovation
                and knowledge to drive meaningful growth. Through our dynamic
                subsidiaries, we deliver a complete ecosystem of solutions that
                empower brands, businesses and individuals to reach their full
                potential.
              </p>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
                onClick={() => navigate(service.link)} // 👈 Makes the card clickable
                className="group relative transform transition-all duration-500 flex flex-col 
                          items-center text-center lg:items-start lg:text-left cursor-pointer" // 👈 Add cursor pointer
                style={{
                  transform: hoveredIndex === index
                    ? 'translateY(-8px) scale(1.02)'
                    : 'translateY(0) scale(1)',
                }}
              >
                <div
                  className="relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 w-full transition-all duration-500 overflow-hidden"
                  style={{
                    backgroundColor: 'var(--color-white) !important',
                    borderColor: hoveredIndex === index
                      ? 'var(--color-accent) !important'
                      : 'var(--color-gray-200) !important',
                    boxShadow: hoveredIndex === index
                      ? 'var(--shadow-card-hover) !important'
                      : 'var(--shadow-card) !important',
                  }}
                >
                  {/* Background Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, var(--overlay-accent-light), transparent) !important',
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                  />

                  <div className="relative z-10">
                    {service.icon && (
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="mb-3 sm:mb-4 w-10 h-10 sm:w-14 sm:h-14 object-contain transition-transform duration-500 mx-auto lg:mx-0"
                        style={{
                          transform: hoveredIndex === index ? 'scale(1.1) rotate(0deg)' : 'scale(1) rotate(0deg)',
                        }}
                      />
                    )}

                    <h4
                      className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 text-center lg:text-left"
                      style={{
                        color: hoveredIndex === index
                          ? 'var(--color-accent) !important'
                          : 'var(--color-primary) !important',
                        fontFamily: 'var(--font-heading) !important',
                      }}
                    >
                      {service.title}
                    </h4>

                    <p
                      className="text-sm sm:text-base leading-relaxed text-center lg:text-left"
                      style={{
                        color: 'var(--color-neutral) !important',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 origin-left"
                    style={{
                      background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight)) !important',
                      transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
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

        /* Center-align cards on mobile */
        @media (max-width: 1024px) {
          .service-card-align {
            text-align: center !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
