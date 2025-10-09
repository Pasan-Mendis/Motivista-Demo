import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Eye, Calendar, MapPin, Users, ExternalLink, Sparkles } from "lucide-react";
import projects from "../../services/events/projectData";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
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

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              backgroundColor: 'var(--overlay-accent-light)',
              borderColor: 'var(--color-accent)',
            }}
          >
            <Sparkles size={16} style={{ color: 'var(--color-accent)' }} />
            <span 
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-primary)' }}
            >
              Our Portfolio
            </span>
          </div>

          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1'
            }}
          >
            Featured <span style={{ color: 'var(--color-accent)' }}>Projects</span>
          </h2>

          <p 
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ color: 'var(--color-gray-600)' }}
          >
            Explore our recent work showcasing creativity, precision, and flawless execution across diverse event categories.
          </p>
        </div>

        {/* Projects Grid - Premium Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${600 + index * 100}ms`,
                // Alternate heights for visual interest
                ...(index === 0 || index === 4 ? { gridRow: 'span 1' } : {})
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:shadow-2xl"
                style={{
                  height: index === 1 || index === 3 ? '450px' : '400px',
                  boxShadow: hoveredProject === project.id 
                    ? '0 25px 80px rgba(10, 9, 3, 0.2)' 
                    : 'var(--shadow-card)',
                }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(180deg, rgba(10, 9, 3, 0) 0%, rgba(10, 9, 3, 0.3) 40%, rgba(10, 9, 3, 0.9) 100%)',
                    opacity: hoveredProject === project.id ? 1 : 0.8
                  }}
                />

                {/* Category Badge */}
                <div 
                  className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'var(--color-white)',
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                  
                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-y-0 translate-y-2"
                    style={{ 
                      color: 'var(--color-white)',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description - Shows on hover */}
                  <p 
                    className={`text-sm leading-relaxed mb-4 transition-all duration-500 ${
                      hoveredProject === project.id 
                        ? 'opacity-100 translate-y-0 max-h-20' 
                        : 'opacity-0 translate-y-4 max-h-0 overflow-hidden'
                    }`}
                    style={{ color: 'var(--color-gray-100)' }}
                  >
                    {project.description}
                  </p>

                  {/* Project Info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} style={{ color: 'var(--color-accent)' }} />
                      <span className="text-xs" style={{ color: 'var(--color-gray-200)' }}>
                        {project.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} style={{ color: 'var(--color-highlight)' }} />
                      <span className="text-xs" style={{ color: 'var(--color-gray-200)' }}>
                        {project.attendees}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} style={{ color: 'var(--color-accent-light)' }} />
                      <span className="text-xs" style={{ color: 'var(--color-gray-200)' }}>
                        {project.date}
                      </span>
                    </div>
                  </div>

                  {/* View Project Button - Shows on hover */}
                  {/* View Project Button - Shows on hover */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-semibold transition-all duration-500 ${
                      hoveredProject === project.id 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                    style={{ textDecoration: 'none' }}
                  >
                    <span style={{ color: 'var(--color-accent)' }}>View Project</span>
                    <ExternalLink size={16} style={{ color: 'var(--color-accent)' }} />
                  </a>
                </div>

                {/* Eye Icon Overlay */}
                <div 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border-2 transition-all duration-500 ${
                    hoveredProject === project.id 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-50'
                  }`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'var(--color-accent)',
                  }}
                >
                  <Eye size={24} style={{ color: 'var(--color-accent)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div 
          className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative inline-block">
            {/* Decorative background */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-5"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            
            <a 
              href="/gallery"
              className="relative flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
                color: 'var(--color-white)',
                boxShadow: '0 12px 40px rgba(255, 115, 21, 0.3)',
                textDecoration: 'none'
              }}
            >
              <span>Explore Full Gallery</span>
              <div className="flex items-center gap-1">
                <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  animation: 'shimmer 2s infinite',
                }}
              />
            </a>
          </div>

          {/* Additional Info */}
          <p 
            className="mt-6 text-sm"
            style={{ color: 'var(--color-gray-600)' }}
          >
            View our complete collection of <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>500+ successful events</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}