// src/components/RecentProjects.jsx
import React, { useState } from "react";
// import projects from "../services/projectData";
import projects from "../services/projectService";
import Section from "./ui/Section";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaStar, FaArrowRight } from "react-icons/fa";

const RecentProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleExploreAllClick = () => {
    // Example: scroll to projects section or redirect
    window.location.href = "/projects"; 
  };

  return (
    <Section className="py-32 bg-[var(--color-gray-100)] relative overflow-hidden">
      {/* Enhanced animated background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-highlight/10"></div>
        
        {/* Animated grid pattern */}
        <div 
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 81, 0, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 129, 0, 0.15) 1px, transparent 1px),
              linear-gradient(45deg, rgba(58, 53, 53, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px, 60px 60px, 30px 30px",
            animation: "grid-move 25s linear infinite"
          }}
        ></div>

        {/* Dynamic mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-highlight/20 to-transparent rounded-full blur-3xl animate-pulse-warm"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-secondary/15 to-transparent rounded-full blur-2xl animate-float-delay"></div>
        </div>
      </div>

      {/* Enhanced floating orbs */}
      <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-r from-[var(--color-highlight-light)]/25 to-[var(--color-accent)]/25 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-16 right-16 w-48 h-48 bg-gradient-to-r from-[var(--color-accent)]/25 to-[var(--color-highlight-light)]/25 rounded-full blur-xl animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-[var(--color-secondary)]/20 to-[var(--color-highlight-light)]/20 rounded-full blur-xl animate-pulse-warm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced modern header */}
        <div className="text-center mb-24">
          {/* Badge with enhanced styling */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-background/30 to-background/20 backdrop-blur-xl border border-highlight/40 rounded-full px-8 py-4 mb-10 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105">
            <div className="relative">
              <FaRocket className="text-highlight animate-bounce text-lg" />
              <div className="absolute -inset-1 bg-highlight/30 rounded-full blur-sm animate-pulse"></div>
            </div>
            <span className="text-background/90 font-semibold uppercase tracking-wider text-sm">Featured Work</span>
            <FaStar className="text-accent animate-pulse text-sm" />
          </div>
          
          {/* Enhanced title with better typography */}
          <div className="relative mb-8">
            <h2 className="text-7xl md:text-7xl font-heading font-black bg-gradient-to-r from-background via-highlight to-accent bg-clip-text text-transparent mb-4 leading-none tracking-tight">
              Recent Projects
            </h2>
            {/* Subtle underline accent */}
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-background/75 max-w-4xl mx-auto leading-relaxed font-light">
            Discover our latest innovations where cutting-edge technology meets exceptional design
          </p>
        </div>

        {/* Enhanced project showcase with staggered layout */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex gap-16 items-center`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Enhanced Project Visual */}
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-3xl transform transition-all duration-700 hover:scale-105">
                  {/* Multi-layer glow effect */}
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
                  
                  {/* Enhanced main container */}
                  <div
                    className="
                      relative 
                      bg-gradient-to-br 
                      from-[var(--color-primary-dark)] 
                      via-[var(--color-primary-dark)] 
                      to-[var(--color-highlight-dark)] 
                      rounded-3xl 
                      p-10 
                      border-2
                      backdrop-blur-sm
                      shadow-card
                      group-hover:shadow-card-hover
                      transition-all
                      duration-500
                    "
                    style={{
                      borderColor: hoveredIndex === index ? 'var(--color-highlight)' : 'var(--color-accent)'
                    }}
                  >
                    {/* Project number overlay */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-highlight/20 to-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-highlight/30">
                      <span className="text-highlight font-bold text-lg">{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    {project.image ? (
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 shadow-card"
                        />
                        {/* Image overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ) : (
                      <div className="w-full h-72 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-card relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-highlight/10 to-accent/10 animate-pulse"></div>
                        <FaCode className="text-8xl text-highlight/60 relative z-10" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="lg:w-1/2 space-y-8">
                {/* Project category/type */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-gradient-to-r from-accent to-highlight"></div>
                  <span className="text-background/60 font-medium uppercase tracking-widest text-sm">Project {String(index + 1).padStart(2, "0")}</span>
                </div>
                
                {/* Enhanced project title */}
                <h3
                  className="text-5xl md:text-5xl font-heading font-black leading-tight transition-all duration-500 hover:translate-x-2"
                  style={{ color: 'var(--color-secondary-dark)' }}
                >
                  {project.title}
                </h3>
                
                {/* Enhanced project description */}
                <div className="relative">
                  <p className="text-xl text-background/80 leading-relaxed line-clamp-2 pl-6 border-l-4 border-gradient-to-b from-highlight to-accent">
                    {project.description}
                  </p>
                </div>
                
                {/* Enhanced technologies display */}
                {project.technologies && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-background/70 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="group/tech relative bg-background/10 backdrop-blur-lg border border-highlight/40 rounded-2xl px-6 py-3 text-sm text-background/95 font-medium hover:bg-secondary/20 hover:border-accent/60 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                          style={{
                            animation: `slideInLeft 0.6s ease-out ${techIndex * 0.1}s both`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-highlight/0 to-accent/0 group-hover/tech:from-highlight/10 group-hover/tech:to-accent/10 rounded-2xl transition-all duration-300"></div>
                          <span className="relative">{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Enhanced action buttons */}
                <div className="flex gap-6 pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-4 bg-background/10 hover:bg-neutral/25 backdrop-blur-lg border-2 border-background/40 hover:border-highlight/60 rounded-2xl px-8 py-4 text-background font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-card hover:shadow-card-hover"
                    >
                      <FaGithub className="text-xl group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span>View Code</span>
                      <FaArrowRight className="text-sm opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn inline-flex items-center gap-4 bg-gradient-to-r from-secondary to-accent hover:from-secondary-dark hover:to-accent-dark rounded-2xl px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative overflow-hidden ${
                        hoveredIndex === index ? "shadow-card-hover animate-glow" : "shadow-card"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-highlight/0 to-accent/0 group-hover/btn:from-highlight/20 group-hover/btn:to-accent/20 transition-all duration-300"></div>
                      <FaExternalLinkAlt className="text-xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:scale-110 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                      <FaArrowRight className="text-sm opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300 relative z-10" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="text-center mt-40">
          <div className="relative inline-block group">
            {/* Multiple glow layers for enhanced effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-highlight rounded-full opacity-60 blur-lg group-hover:opacity-100 animate-glow transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-highlight via-accent to-secondary rounded-full opacity-40 blur-md group-hover:opacity-80 animate-pulse transition-opacity duration-300"></div>
            
            <button 
              onClick={handleExploreAllClick}
              className="
                relative 
                !bg-[var(--color-highlight)]
                !text-[var(--color-background)] 
                px-16 py-6
                rounded-full 
                font-bold text-xl
                hover:!bg-[var(--color-accent-dark)] 
                transition-all duration-300 
                cursor-pointer 
                !shadow-card 
                !hover:shadow-card-hover
                hover:scale-110
                hover:-translate-y-2
                group
                border-2
                border-transparent
                hover:border-background/20
              "
            >
              <span className="flex items-center gap-3">
                Explore All Projects
                <FaArrowRight className="group-hover:translate-x-2 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </div>
          
          {/* Additional context text */}
          <p className="text-background/60 mt-8 text-lg font-light">
            Discover more innovative solutions and creative projects
          </p>
        </div>
      </div>

      {/* Enhanced custom CSS animations */}
      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(60px, 60px) rotate(1deg); }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
      `}</style>
    </Section>
  );
};

export default RecentProjects;