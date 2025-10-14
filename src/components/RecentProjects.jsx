import React, { useState, useEffect, useRef } from "react";
import projects from "../services/projectService";
import { ExternalLink, Globe, Calendar, ArrowRight, Sparkles, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";


const RecentProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Project type configurations
  const projectTypes = {
    0: { label: "Website Redesign", icon: Globe, color: "var(--color-highlight)" },
    1: { label: "Event Management", icon: Calendar, color: "var(--color-highlight)" },
    2: { label: "Training Session", icon: Code, color: "var(--color-highlight)" }
  };



  const navigate = useNavigate();

  const handleExploreAllClick = () => {
    navigate("/gallery");
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              backgroundColor: "var(--overlay-accent-light)",
              borderColor: "var(--color-accent)",
            }}
          >
            <Sparkles size={16} style={{ color: "var(--color-accent)" }} />
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-primary)" }}
            >
              Featured Work
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.1",
            }}
          >
            Recent{" "}
            <span style={{ color: "var(--color-accent)" }}>Projects</span>
          </h2>

          <div
            className="w-20 sm:w-24 h-1 mx-auto mb-4 sm:mb-6 rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--color-accent), var(--color-highlight))",
            }}
          />

          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            style={{ color: "var(--color-gray-600)" }}
          >
            Discover our latest innovations where cutting-edge technology meets exceptional design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => {
            const typeConfig = projectTypes[index] || projectTypes[0];
            const TypeIcon = typeConfig.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Card */}
                <div
                  className={`grid lg:grid-cols-12 gap-6 lg:gap-12 items-center ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Image Side */}
                  <div
                    className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}
                  >
                    <div
                      className="relative overflow-hidden rounded-3xl group"
                      style={{
                        boxShadow:
                          hoveredIndex === index
                            ? `0 30px 60px ${typeConfig.color}30`
                            : "var(--shadow-card)",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden rounded-3xl border-6 border-[var(--color-highlight)] hover:border-[var(--color-highlight)] transition-all duration-500">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${typeConfig.color}20, var(--color-gray-200))`,
                            }}
                          >
                            <TypeIcon size={80} style={{ color: typeConfig.color, opacity: 0.3 }} />
                          </div>
                        )}

                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(180deg, transparent 0%, ${typeConfig.color}90 100%)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-5 space-y-4 sm:space-y-6 ${
                      isEven ? "" : "lg:order-1"
                    }`}
                  >
                    {/* Project Number */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-px"
                        style={{
                          background: `linear-gradient(90deg, ${typeConfig.color}, transparent)`,
                        }}
                      />
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-gray-500)" }}
                      >
                        Project {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight transition-all duration-300 hover:translate-x-2 text-center md:text-left"
                      style={{
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm sm:text-base md:text-lg leading-relaxed line-clamp-3"
                      style={{ color: "var(--color-gray-600)" }}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div>
                        <h4
                          className="text-xs font-semibold uppercase tracking-wider mb-3"
                          style={{ color: "var(--color-gray-500)" }}
                        >
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105"
                              style={{
                                backgroundColor: `${typeConfig.color}10`,
                                borderColor: `${typeConfig.color}30`,
                                color: "var(--color-primary)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "var(--color-primary)",
                            color: "var(--color-primary)",
                          }}
                        >
                          View Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105"
                          style={{
                            background: `linear-gradient(135deg, ${typeConfig.color}, var(--color-highlight))`,
                            color: "var(--color-white)",
                            boxShadow: `0 8px 24px ${typeConfig.color}30`,
                          }}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={handleExploreAllClick}
            className="group px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3 mx-auto"
            style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
              color: "var(--color-white)",
              boxShadow: "0 12px 40px rgba(255, 115, 21, 0.3)",
            }}
          >
            <span>Explore All Projects</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <p
            className="mt-6 text-sm sm:text-base px-4"
            style={{ color: "var(--color-gray-600)" }}
          >
            Discover more innovative solutions and creative projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;