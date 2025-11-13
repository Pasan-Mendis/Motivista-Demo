import React, { useState } from "react";
import { GraduationCap, Users, BookOpen, Award, Briefcase, TrendingUp, Globe, Target } from "lucide-react";
import ServiceBack from "../../assets/images/academy/hero/servicesback.jpg"
import services from "../../services/academy/serviceData";

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section 
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
      <img 
        src={ServiceBack}
        alt="Students learning"
        className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
          }}
        />
      </div>
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-40 blur-3xl animate-float"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
        }}
      />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-float-delay"
        style={{
          background: "radial-gradient(circle, var(--color-highlight), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header - Centered and Clean */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Small badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: "var(--overlay-accent-light)",
              border: "1px solid var(--color-accent)",
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse-warm"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span 
              className="text-sm font-bold tracking-wider uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Our Services
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
            style={{
              color: "var(--color-background)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Empowering Your Journey to{" "}
            <span style={{ color: "var(--color-accent)" }}>Excellence</span>
          </h2>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl leading-relaxed"
            style={{ color: "var(--color-background-dark)" }}
          >
            Discover our comprehensive range of programs designed to transform individuals and organizations
          </p>
        </div>

        {/* Services Grid - Clean Minimalist Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const isHovered = hoveredId === service.id;
            const Icon = service.icon;
            
            return (
              <div
                key={service.id}
                className="group relative h-full"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Main Card */}
                <div
                  className="relative rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer h-full flex flex-col"
                  style={{
                    backgroundColor: "var(--color-white)",
                    boxShadow: isHovered 
                      ? "0 20px 50px rgba(10, 9, 3, 0.2)" 
                      : "0 8px 25px rgba(10, 9, 3, 0.1)",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  }}
                >
                  <div className="relative p-8 sm:p-10 text-center flex-1 flex flex-col">
                    {/* Icon Container with Circle Background */}
                    <div className="flex justify-center mb-6">
                      <div
                        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-500"
                        style={{
                          backgroundColor: isHovered 
                            ? "var(--color-accent)" 
                            : "var(--overlay-accent-light)",
                        }}
                      >
                        <Icon 
                          size={36} 
                          style={{ 
                            color: isHovered ? "var(--color-white)" : "var(--color-accent)",
                            transition: "all 0.5s",
                          }} 
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300"
                      style={{
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm sm:text-base leading-relaxed flex-1"
                      style={{
                        color: "var(--color-neutral)",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                    style={{
                      background: "linear-gradient(90deg, var(--color-accent), var(--color-highlight))",
                      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <p 
            className="text-lg mb-6"
            style={{ color: "var(--color-neutral)" }}
          >
            Can't find what you're looking for?
          </p>
          <button
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-white)",
              boxShadow: "0 10px 30px rgba(255, 115, 21, 0.3)",
            }}
          >
            Request Custom Program
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path 
                d="M4 10h12M12 6l4 4-4 4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse-warm {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
        }
        .animate-pulse-warm {
          animation: pulse-warm 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;