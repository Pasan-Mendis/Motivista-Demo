// src/components/RecentProjects.jsx
import React, { useState, useEffect, useRef } from "react";
import projects from "../services/projectService";
import Section from "./ui/Section";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaRocket,
  FaStar,
} from "react-icons/fa";

const RecentProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  const truncateDescription = (text, limit = 160) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  const handleExploreAllClick = () => (window.location.href = "/projects");

  return (
    <Section className="!py-20 md:!py-32 bg-[var(--color-gray-100)] relative overflow-hidden">
      {/* === Background Effects === */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-highlight/10"></div>
        <div
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,81,0,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,129,0,0.15) 1px, transparent 1px),
              linear-gradient(45deg, rgba(58,53,53,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 60px 60px, 30px 30px",
            animation: "grid-move 25s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-16 left-8 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-[var(--color-highlight-light)]/25 to-[var(--color-accent)]/25 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-16 right-8 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-r from-[var(--color-accent)]/25 to-[var(--color-highlight-light)]/25 rounded-full blur-xl animate-float-delay"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-10">
        {/* === Header === */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-background/30 to-background/20 backdrop-blur-xl border border-highlight/40 rounded-full px-6 py-3 md:px-8 md:py-4 mb-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
            <FaRocket className="text-highlight animate-bounce text-base md:text-lg" />
            <span className="text-background/90 font-semibold uppercase tracking-wider text-xs md:text-sm">
              Featured Work
            </span>
            <FaStar className="text-accent animate-pulse text-sm" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black bg-gradient-to-r from-background via-highlight to-accent bg-clip-text text-transparent mb-4 leading-none tracking-tight">
            Recent Projects
          </h2>

          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-xl text-background/75 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our latest innovations where cutting-edge technology meets exceptional design.
          </p>
        </div>

        {/* === Projects === */}
        <div className="space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`project-card group relative flex flex-col lg:flex ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 md:gap-16 items-center opacity-0 translate-y-12 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                visibleIndexes.includes(index.toString())
                  ? "opacity-100 translate-y-0"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* === Image === */}
              <div className="lg:w-1/2 w-full relative">
                <div className="relative overflow-hidden rounded-3xl transform transition-all duration-700 hover:scale-105">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r from-secondary/40 via-accent/50 to-highlight/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md ${
                      hoveredIndex === index ? "animate-glow" : ""
                    }`}
                  ></div>

                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-highlight/60 via-accent/70 to-secondary/60 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${
                      hoveredIndex === index ? "animate-pulse" : ""
                    }`}
                  ></div>

                  <div
                    className="relative bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary-dark)] to-[var(--color-highlight-dark)] rounded-3xl p-4 md:p-10 border-2 backdrop-blur-sm shadow-card group-hover:shadow-card-hover transition-all duration-500"
                    style={{
                      borderColor:
                        hoveredIndex === index
                          ? "var(--color-highlight)"
                          : "var(--color-accent)",
                    }}
                  >
                    {project.image ? (
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700 shadow-card"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl flex items-center justify-center shadow-card relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-highlight/10 to-accent/10 animate-pulse"></div>
                        <FaCode className="text-6xl md:text-8xl text-highlight/60 relative z-10" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* === Details === */}
              <div className="lg:w-1/2 w-full space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <div className="w-8 md:w-12 h-px bg-gradient-to-r from-accent to-highlight"></div>
                  <span className="text-background/60 font-medium uppercase tracking-widest text-xs md:text-sm">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="text-3xl md:text-5xl font-heading font-black leading-tight transition-all duration-500 hover:translate-x-1 md:hover:translate-x-2"
                  style={{ color: "var(--color-secondary-dark)" }}
                >
                  {project.title}
                </h3>

                <p className="text-base md:text-xl text-background/80 leading-relaxed px-4 md:px-0">
                  {truncateDescription(project.description)}
                </p>

                {/* Tech Stack */}
                {project.technologies && (
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-xs md:text-sm font-semibold text-background/70 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-background/10 backdrop-blur-lg border border-highlight/40 rounded-xl px-4 py-2 text-xs md:text-sm text-background/95 font-medium hover:bg-secondary/20 hover:border-accent/60 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-background/10 hover:bg-neutral/25 backdrop-blur-lg border-2 border-background/40 hover:border-highlight/60 rounded-2xl px-6 py-3 text-background font-semibold transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover"
                    >
                      <FaGithub className="text-lg md:text-xl" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-secondary to-accent hover:from-secondary-dark hover:to-accent-dark rounded-2xl px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover"
                    >
                      <FaExternalLinkAlt className="text-lg md:text-xl" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === CTA === */}
        <div className="text-center mt-24 md:mt-40">
          <button
            onClick={handleExploreAllClick}
            className="relative bg-[var(--color-highlight)] text-[var(--color-background)] px-10 md:px-16 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-[var(--color-accent-dark)] transition-all duration-300 shadow-card hover:shadow-card-hover hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-background/20"
          >
            Explore All Projects
          </button>
          <p className="text-background/60 mt-6 text-sm md:text-lg font-light">
            Discover more innovative solutions and creative projects.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Section>
  );
};

export default RecentProjects;
