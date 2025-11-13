import React, { useState, useEffect } from "react";
import { getProjectsByMainCategory } from "../../services/projectData";
import { BookOpen, Users, Award, ArrowRight, Sparkles } from "lucide-react";

const ProjectsGallery = () => {
  const projects = getProjectsByMainCategory("Academy");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--color-background) !important' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full animate-float"
          style={{ background: `radial-gradient(circle, var(--color-accent), transparent 70%) !important` }}
        />
        <div 
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full animate-float-delay"
          style={{ background: `radial-gradient(circle, var(--color-highlight), transparent 70%) !important` }}
        />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projectGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" style={{ fill: 'var(--color-accent)' }} />
              <path d="M0,30 L60,30 M30,0 L30,60" style={{ stroke: 'var(--color-secondary)', strokeWidth: '0.5', opacity: '0.3' }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              backgroundColor: 'var(--overlay-accent-light) !important',
              borderColor: 'var(--color-accent) !important'
            }}
          >
            <BookOpen size={18} className="sm:w-5 sm:h-5" style={{ color: 'var(--color-accent) !important' }} />
            <span 
              className="text-xs sm:text-sm font-bold tracking-wider uppercase"
              style={{ color: 'var(--color-accent) !important' }}
            >
              Success Stories
            </span>
          </div>

          {/* Main Heading */}
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              color: 'var(--color-primary) !important',
              fontFamily: 'var(--font-heading) !important'
            }}
          >
            Our Projects
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: 'var(--color-neutral) !important' }}
          >
            A visual journey through the diverse programs and impactful moments
            we've delivered for students, professionals, and corporations.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div 
              className="h-px w-12 sm:w-16 lg:w-20 rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, var(--color-accent)) !important` }}
            />
            <Sparkles size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--color-accent) !important' }} />
            <div 
              className="h-px w-12 sm:w-16 lg:w-20 rounded-full"
              style={{ background: `linear-gradient(90deg, var(--color-highlight), transparent) !important` }}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--color-white) !important',
                boxShadow: 'var(--shadow-card) !important',
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56 sm:h-64 lg:h-72">
                <img
                  src={project.images?.[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 115, 21, 0.85), rgba(247, 146, 42, 0.85)) !important`
                  }}
                />

                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2 border"
                  style={{
                    backgroundColor: 'rgba(255, 115, 21, 0.9) !important',
                    borderColor: 'rgba(255, 255, 255, 0.3) !important',
                    color: 'var(--color-white) !important'
                  }}
                >
                  <Award size={14} />
                  <span className="text-xs font-bold">Academy</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6 lg:p-8">
                
                {/* Title */}
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 group-hover:text-opacity-90 transition-all duration-300 line-clamp-2"
                  style={{ 
                    color: 'var(--color-primary) !important',
                    fontFamily: 'var(--font-heading) !important'
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm sm:text-base leading-relaxed line-clamp-3 mb-4"
                  style={{ color: 'var(--color-neutral) !important' }}
                >
                  {project.description}
                </p>

              </div>

              {/* Bottom Accent Line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{
                  background: `linear-gradient(90deg, var(--color-accent), var(--color-highlight)) !important`
                }}
              />

              {/* Glow Effect on Hover */}
              {hoveredProject === project.id && (
                <div 
                  className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl"
                  style={{
                    boxShadow: '0 25px 60px rgba(255, 115, 21, 0.2) !important'
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        {projects.length > 6 && (
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <button
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 border-2"
              style={{
                background: `linear-gradient(135deg, var(--color-accent), var(--color-highlight)) !important`,
                color: 'var(--color-white) !important',
                borderColor: 'var(--color-white) !important',
                boxShadow: '0 12px 40px rgba(255, 115, 21, 0.3) !important'
              }}
            >
              View All Projects
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsGallery;