import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ExternalLink, Calendar, Users, Code, Award,Sparkles } from "lucide-react";
import projects from "../../services/apex/projectData";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [scrollProgress, setScrollProgress] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');
  const [isInView, setIsInView] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const sectionRef = useRef(null);

  // Mock categories for filtering
  const categories = ['all', 'web', 'mobile', 'ai', 'blockchain'];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
      ));
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects based on category
  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  // Show only first 6 projects initially
  const displayedProjects = showAllProjects 
    ? filteredProjects 
    : filteredProjects.slice(0, 6);

  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          style={{
            backgroundImage: `
              linear-gradient(var(--color-gray-200) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Professional Header */}
        <div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          style={{
            transform: `translateY(${isInView ? 0 : 20}px)`,
            opacity: isInView ? 1 : 0,
            transition: 'all 0.4s ease-out',
          }}
        >
          <div className="mb-3 sm:mb-4">
            <span 
              className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border"
              style={{
                color: 'var(--color-accent)',
                borderColor: 'var(--color-accent)',
                backgroundColor: 'rgba(255, 115, 21, 0.05)',
              }}
            >
              Portfolio
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 px-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Our{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-accent), var(--color-highlight))`,
              }}
            >
              Projects
            </span>
          </h2>
          
          <p 
            className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12 px-4"
            style={{ color: 'var(--color-neutral)' }}
          >
            Delivering exceptional digital solutions that drive business growth and innovation. 
            Each project represents our commitment to excellence and technical expertise.
          </p>

          {/* Professional Category Filter - Mobile Optimized */}
          <div className="flex justify-center px-4">
            <div 
              className="inline-flex items-center rounded-lg border overflow-x-auto max-w-full"
              style={{
                backgroundColor: 'var(--color-white)',
                borderColor: 'var(--color-gray-300)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 capitalize whitespace-nowrap ${
                    index === 0 ? 'rounded-l-lg' : ''
                  } ${
                    index === categories.length - 1 ? 'rounded-r-lg' : ''
                  }`}
                  style={{
                    backgroundColor: filterCategory === category ? 'var(--color-accent)' : 'transparent',
                    color: filterCategory === category ? 'var(--color-white)' : 'var(--color-neutral)',
                    borderRight: index < categories.length - 1 ? '1px solid var(--color-gray-200)' : 'none',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              style={{
                transform: `translateY(${isInView ? 0 : 20}px)`,
                opacity: isInView ? 1 : 0,
                transition: `all 0.4s ease-out ${index * 50}ms`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Professional Project Card */}
              <div 
                className="relative overflow-hidden rounded-lg border transition-all duration-500"
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderColor: hoveredProject === project.id ? 'var(--color-accent)' : 'var(--color-gray-300)',
                  boxShadow: hoveredProject === project.id 
                    ? 'var(--shadow-card-hover)' 
                    : 'var(--shadow-card)',
                  transform: hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                  <img
                    src={project.image || `https://picsum.photos/400/300?random=${project.id}`}
                    alt={project.title || `Project ${project.id}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  
                  {/* Professional Overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      opacity: hoveredProject === project.id ? 0.1 : 0,
                    }}
                  />

                  {/* Status Badge */}
                  <div 
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'var(--color-white)',
                      color: 'var(--color-accent)',
                      border: `1px solid var(--color-accent)`,
                    }}
                  >
                    {project.status || 'Completed'}
                  </div>

                  {/* Professional Action Buttons */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 transition-all duration-500"
                    style={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    <button 
                      className="p-2 sm:p-3 rounded-lg border transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--color-white)',
                        borderColor: 'var(--color-gray-300)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                    <button 
                      className="p-2 sm:p-3 rounded-lg border transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--color-white)',
                        borderColor: 'var(--color-gray-300)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Code size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {project.title || `Project ${project.id}`}
                    </h3>
                    
                    {project.award && (
                      <div className="flex items-center flex-shrink-0 ml-2">
                        <Award size={18} className="sm:w-5 sm:h-5" style={{ color: 'var(--color-highlight)' }} />
                      </div>
                    )}
                  </div>
                  
                  <p 
                    className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-6"
                    style={{ color: 'var(--color-neutral)' }}
                  >
                    {project.description || 'A comprehensive solution designed to meet modern business requirements with scalable architecture and intuitive user experience.'}
                  </p>

                  {/* Project Metrics */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar size={14} className="sm:w-4 sm:h-4" style={{ color: 'var(--color-neutral-light)' }} />
                        <span 
                          className="text-xs sm:text-sm font-medium"
                          style={{ color: 'var(--color-neutral-light)' }}
                        >
                          {project.year || '2024'}
                        </span>
                      </div>
                      {project.team && (
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Users size={14} className="sm:w-4 sm:h-4" style={{ color: 'var(--color-neutral-light)' }} />
                          <span 
                            className="text-xs sm:text-sm font-medium"
                            style={{ color: 'var(--color-neutral-light)' }}
                          >
                            {project.team}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 lg:mb-6">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full border"
                          style={{
                            backgroundColor: 'var(--color-gray-100)',
                            color: 'var(--color-neutral)',
                            borderColor: 'var(--color-gray-200)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Professional CTA */}
                  <div 
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold transition-all duration-300"
                    style={{
                      color: hoveredProject === project.id ? 'var(--color-accent)' : 'var(--color-neutral)',
                    }}
                  >
                    View Case Study
                    <ChevronRight 
                      size={14}
                      className="sm:w-4 sm:h-4"
                      style={{
                        transform: hoveredProject === project.id ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Professional Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-500 origin-left"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    transform: hoveredProject === project.id ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Professional Call to Action */}
        <div 
          className="text-center mt-12 sm:mt-16 lg:mt-20 px-4"
          style={{
            transform: `translateY(${isInView ? 0 : 20}px)`,
            opacity: isInView ? 1 : 0,
            transition: 'all 0.4s ease-out 0.3s',
          }}
        >
          {!showAllProjects && hasMoreProjects ? (
            <button 
              onClick={() => setShowAllProjects(true)}
              className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-white)',
                border: 'none',
                boxShadow: 'var(--shadow-card)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-accent-dark)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = 'var(--shadow-card-hover)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-accent)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              View More Projects ({filteredProjects.length - 6} additional)
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6">
              <div className="col-span-full text-center py-12 sm:py-16 lg:py-20">
              <div 
                className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: 'var(--overlay-accent-light)' }}
              >
                <Sparkles size={24} className="sm:w-8 sm:h-8" style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3"
                style={{ color: 'var(--color-primary)' }}
              >
                No Projects Found
              </h3>
              <p className="text-sm sm:text-base" style={{ color: 'var(--color-neutral)' }}>
                No projects available in this category yet.
              </p>
            </div>
              
              {showAllProjects && (
                <button 
                  onClick={() => setShowAllProjects(false)}
                  className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 lg:py-4 rounded-lg font-semibold text-base transition-all duration-300 border"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-neutral)',
                    borderColor: 'var(--color-gray-300)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--color-gray-100)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  Show Featured Only
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;