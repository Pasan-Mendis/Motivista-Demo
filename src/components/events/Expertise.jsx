import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Star, ArrowUpRight, CheckCircle } from "lucide-react";
import expertise from "../../services/events/expertiseData";

export default function Expertise() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-gray-50) 50%, var(--color-background) 100%)`,
        position: 'relative'
      }}
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Pattern */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 opacity-5 rotate-45" 
             style={{ borderColor: 'var(--color-accent)' }}></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 border-2 opacity-5 -rotate-12" 
             style={{ borderColor: 'var(--color-highlight)' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 opacity-5 rotate-45" 
             style={{ borderColor: 'var(--color-accent)' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full animate-float opacity-30" 
             style={{ backgroundColor: 'var(--color-accent)' }}></div>
        <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full animate-float-delay opacity-40" 
             style={{ backgroundColor: 'var(--color-highlight)' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full animate-pulse-warm opacity-50" 
             style={{ backgroundColor: 'var(--color-accent)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div
          className={`text-center mb-24 transition-all duration-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Premium Badge */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 animate-glow rounded-2xl"></div>
            <span
              className="relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl text-sm font-bold tracking-widest uppercase border-2 backdrop-blur-sm transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
                boxShadow: "0 12px 40px rgba(255, 115, 21, 0.2)"
              }}
            >
              <Sparkles size={18} className="animate-pulse" />
              <span className="relative">
                Our Expertise
                <div className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                     style={{ background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight))' }}></div>
              </span>
              <Star size={18} className="animate-pulse" />
            </span>
          </div>

          {/* Enhanced Title */}
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--color-primary)",
              fontFamily: "var(--font-heading)",
              fontWeight: "900",
              lineHeight: "1.05",
              background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Crafting Premium Event{" "}
            <span style={{
              background: `linear-gradient(135deg, var(--color-accent), var(--color-highlight))`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Experiences
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--color-neutral)",
              maxWidth: "52rem",
              margin: "0 auto",
              lineHeight: "1.6",
              fontWeight: "300"
            }}
          >
            We specialize in creating exceptional experiences through our
            comprehensive range of professional services, delivering unmatched
            quality and attention to detail.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 rounded-full" 
                 style={{ background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight))' }}></div>
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {expertise.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                border: `2px solid ${hoveredCard === item.id ? 'var(--color-accent)' : 'var(--color-gray-200)'}`,
                boxShadow: hoveredCard === item.id 
                  ? "0 40px 80px rgba(255, 115, 21, 0.25)" 
                  : "0 12px 32px rgba(10, 9, 3, 0.1)",
                transform: hoveredCard === item.id ? "translateY(-12px)" : "translateY(0)",
                transitionDelay: `${index * 100}ms`,
                minHeight: "500px"
              }}
            >
              {/* Enhanced Background Image */}
              <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: hoveredCard === item.id ? "brightness(0.8) saturate(1.2)" : "brightness(0.75)",
                  transform: hoveredCard === item.id ? "scale(1.05)" : "scale(1)"
                }}
              />
              
              {/* Enhanced Gradient Overlay */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: hoveredCard === item.id 
                    ? `linear-gradient(135deg, 
                        rgba(255, 115, 21, 0.3) 0%, 
                        rgba(10, 9, 3, 0.4) 40%, 
                        rgba(0, 0, 0, 0.8) 100%)`
                    : `linear-gradient(135deg, 
                        rgba(0, 0, 0, 0.2) 0%, 
                        rgba(0, 0, 0, 0.4) 40%, 
                        rgba(0, 0, 0, 0.8) 100%)`
                }}
              />

              {/* Premium Content Layout */}
              <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                {/* Header Section */}
                <div>
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all duration-300"
                      style={{
                        backgroundColor: hoveredCard === item.id 
                          ? "rgba(255, 115, 21, 0.9)" 
                          : "rgba(255, 255, 255, 0.2)",
                        color: hoveredCard === item.id ? "white" : "rgba(255, 255, 255, 0.9)",
                        border: `1px solid ${hoveredCard === item.id ? 'var(--color-highlight)' : 'rgba(255, 255, 255, 0.3)'}`
                      }}
                    >
                      <CheckCircle size={12} />
                      Premium Service
                    </span>
                  </div>

                  {/* Enhanced Title */}
                  <h3
                    className="mb-4 transition-all duration-300"
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      color: hoveredCard === item.id ? "var(--color-highlight)" : "white",
                      fontFamily: "var(--font-heading)",
                      lineHeight: "1.2",
                      textShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Enhanced Short Description */}
                  <p
                    className="mb-6 transition-all duration-300"
                    style={{
                      fontSize: "1.1rem",
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: "1.6",
                      fontWeight: "300"
                    }}
                  >
                    {item.shortDescription}
                  </p>
                </div>

                {/* Enhanced Details Box */}
                <div
                  className="mt-auto transition-all duration-500"
                  style={{
                    padding: "2rem",
                    borderRadius: "1.5rem",
                    backdropFilter: "blur(20px)",
                    backgroundColor: hoveredCard === item.id
                      ? "rgba(255, 115, 21, 0.15)"
                      : "rgba(255, 255, 255, 0.1)",
                    border: `1px solid ${hoveredCard === item.id ? 'rgba(255, 115, 21, 0.3)' : 'rgba(255, 255, 255, 0.2)'}`,
                    boxShadow: hoveredCard === item.id 
                      ? "0 8px 32px rgba(255, 115, 21, 0.2)" 
                      : "0 4px 16px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      color: "rgba(255, 255, 255, 0.95)",
                      margin: "0"
                    }}
                  >
                    {item.details}
                  </p>

                  {/* Action Indicator */}
                  <div 
                    className={`mt-4 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      hoveredCard === item.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      color: "var(--color-highlight)"
                    }}
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div 
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full transition-all duration-500 ${
                    hoveredCard === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{
                    background: `radial-gradient(circle, var(--color-accent) 0%, var(--color-highlight) 100%)`,
                    boxShadow: "0 4px 20px rgba(255, 115, 21, 0.4)"
                  }}
                />
              </div>

              {/* Hover Effect Border */}
              <div 
                className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${
                  hoveredCard === item.id ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: `linear-gradient(135deg, transparent 0%, rgba(255, 115, 21, 0.1) 50%, transparent 100%)`,
                  border: "2px solid transparent",
                  backgroundClip: "padding-box"
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        {/* Bottom CTA Section */}
        <div 
          className={`mt-12 lg:mt-16 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div 
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl backdrop-blur-sm border"
            style={{
              backgroundColor: 'var(--overlay-accent-light)',
              borderColor: 'var(--color-accent-light)',
            }}
          >
            <div className="text-center sm:text-left">
              <p 
                className="text-lg font-semibold mb-1"
                style={{ color: 'var(--color-primary)' }}
              >
                Ready to create your perfect event?
              </p>
              <p 
                className="text-sm"
                style={{ color: 'var(--color-gray-600)' }}
              >
                Let's bring your vision to life with our expertise
              </p>
            </div>
            <a
              href="https://forms.gle/2y5WsqQYGifmQKws7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
                  color: "var(--color-white)",
                }}
              >
                Start Planning
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}