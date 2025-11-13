import React, { useState, useEffect } from "react";
import {
  Users,
  Building2,
  Briefcase,
  ArrowRight,
  GraduationCap,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  Globe
} from "lucide-react";
import introData from "../../services/academy/introData"; 

const Intro = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="absolute -top-40 -left-40 w-[45rem] h-[45rem] rounded-full opacity-20 blur-[120px] animate-pulse-slow"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
        <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] rounded-full opacity-25 blur-[100px] animate-pulse-slow"
          style={{ backgroundColor: 'var(--color-highlight)' }}
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          {/* Badge */}
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
              Who We Serve
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className={`font-black transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6`}
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.1",
            }}
          >
            Learn. Grow. Lead.{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Succeed.
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl leading-relaxed transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              color: "var(--color-neutral)",
            }}
          >
            Empowering individuals and organizations to reach peak performance through innovation, leadership, and transformation.
          </p>
        </div>

        {/* Cards with Images - Alternating Layout */}
        <div className="space-y-20 sm:space-y-32">
          {introData.map((section, index) => {
            const Icon = section.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div
                key={section.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${400 + index * 200}ms`,
                  transition: "all 0.7s ease-out"
                }}
              >
                {/* Image Side */}
                <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden group">
                    <img
                      src={section.image}
                      alt={section.category}
                      className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(10, 9, 3, 0.4), rgba(10, 9, 3, 0.2))"
                      }}
                    />
                    
                    {/* Floating Icon Badge */}
                    <div 
                      className="absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm"
                      style={{
                        background: index % 2 === 0 
                          ? "linear-gradient(135deg, var(--color-accent), var(--color-highlight))"
                          : "linear-gradient(135deg, var(--color-highlight), var(--color-accent))"
                      }}
                    >
                      <Icon size={28} style={{ color: 'var(--color-white)' }} />
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div 
                    className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-30 blur-2xl"
                    style={{
                      backgroundColor: index % 2 === 0 ? 'var(--color-accent)' : 'var(--color-highlight)'
                    }}
                  />
                </div>

                {/* Content Side */}
                <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Category Title */}
                    <div>
                      <h3
                        className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
                        style={{ 
                          color: "var(--color-primary)",
                          fontFamily: "var(--font-heading)"
                        }}
                      >
                        {section.category}
                      </h3>
                      <div 
                        className="h-1 w-20 rounded-full mb-4"
                        style={{
                          background: index % 2 === 0
                            ? "linear-gradient(90deg, var(--color-accent), var(--color-highlight))"
                            : "linear-gradient(90deg, var(--color-highlight), var(--color-accent))"
                        }}
                      />
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ color: "var(--color-neutral)" }}
                      >
                        {section.description}
                      </p>
                    </div>

                    {/* Service Items Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      {section.items.map((item, i) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={i}
                            className="group/item p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            style={{
                              backgroundColor: "var(--color-white)",
                              boxShadow: "0 4px 15px rgba(10, 9, 3, 0.08)",
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110"
                                style={{
                                  backgroundColor: "var(--overlay-accent-light)",
                                }}
                              >
                                <ItemIcon
                                  size={18}
                                  style={{
                                    color: index === 2 ? "var(--color-highlight)" : "var(--color-accent)"
                                  }}
                                />
                              </div>
                              <div>
                                <h4 
                                  className="font-bold text-sm mb-1"
                                  style={{ color: "var(--color-primary)" }}
                                >
                                  {item.title}
                                </h4>
                                <p 
                                  className="text-xs leading-relaxed"
                                  style={{ color: "var(--color-neutral)" }}
                                >
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <button
                      className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{
                        background: index % 2 === 0
                          ? "linear-gradient(135deg, var(--color-accent), var(--color-highlight))"
                          : "linear-gradient(135deg, var(--color-highlight), var(--color-accent))",
                        color: "var(--color-white)",
                        boxShadow: "0 8px 24px rgba(255, 115, 21, 0.3)"
                      }}
                    >
                      {index === 2 ? "Schedule Consultation" : "Get Started"}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes pulse-warm {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-warm {
          animation: pulse-warm 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Intro;