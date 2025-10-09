import React, { useState, useRef, useEffect } from "react";
import differentiators from "../../services/events/whyChooseUsData";
import {
  ClipboardCheck,
  Sparkles,
  Users,
  Cpu,
  ZoomIn,
  Leaf,
  Star,
  Award,
  ArrowRight,
  Circle,
  CheckCircle,
  Play
} from "lucide-react";

const iconMap = {
  ClipboardCheck: ClipboardCheck,
  Sparkles: Sparkles,
  Users: Users,
  Cpu: Cpu,
  ZoomIn: ZoomIn,
  Leaf: Leaf
};

// High-quality event-related images
const timelineImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center", 
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=800&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
];

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-gray-50) 100%)`
      }}
    >
      {/* Creative Timeline Background */}
      <div className="absolute left-1/2 top-20 bottom-20 w-px opacity-10" 
           style={{ backgroundColor: 'var(--color-accent)', transform: 'translateX(-50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Creative Split Header */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          {/* Left Side - Text */}
          <div 
            className={`lg:col-span-3 transition-all duration-1200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="mb-4">
              <div 
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase"
                style={{ color: 'var(--color-accent)' }}
              >
                <div className="w-8 h-px" style={{ backgroundColor: 'var(--color-accent)' }} />
                Why Choose Us
              </div>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-primary)'
              }}
            >
              We Don't Just Plan.
              <br />
              <span style={{ color: 'var(--color-accent)' }}>
                We Perfect.
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-8 max-w-160"
              style={{ color: 'var(--color-neutral)' }}
            >
              Every event is a story waiting to be told. We craft experiences that 
              resonate, inspire, and create lasting memories through our unique approach 
              to event coordination.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 group"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-white)',
                  boxShadow: '0 8px 24px rgba(255, 115, 21, 0.25)'
                }}
              >
                <span className="flex items-center gap-2">
                  Discover Our Process
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-neutral)' }}>
                <CheckCircle size={16} style={{ color: 'var(--color-accent)' }} />
                100% Success Rate
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div 
            className={`lg:col-span-2 transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=700&fit=crop&crop=center"
                alt="Premium Event Management"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                style={{ objectPosition: 'center center' }}
              />
              
              {/* Overlay Elements */}
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(10, 9, 3, 0.1) 0%, rgba(255, 115, 21, 0.1) 100%)'
                }}
              />

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-8 -left-8 grid grid-cols-2 gap-3">
                <div 
                  className="p-4 rounded-xl backdrop-blur-md border text-center"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(10, 9, 3, 0.15)'
                  }}
                >
                  <div className="text-2xl font-black" style={{ color: 'var(--color-accent)' }}>500+</div>
                  <div className="text-xs font-medium" style={{ color: 'var(--color-gray-600)' }}>Events</div>
                </div>
                <div 
                  className="p-4 rounded-xl backdrop-blur-md border text-center"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-white)',
                    boxShadow: '0 8px 32px rgba(255, 115, 21, 0.3)'
                  }}
                >
                  <div className="text-2xl font-black">8+</div>
                  <div className="text-xs font-medium opacity-90">Years</div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button 
                  className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border-2 transition-all duration-300 hover:scale-110 group"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'var(--color-accent)',
                  }}
                >
                  <Play size={24} style={{ color: 'var(--color-accent)' }} className="ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Timeline Layout with Images */}
        <div className="relative">
          <div className="space-y-16 lg:space-y-20">
            {differentiators.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              const isActive = activeCard === item.id;
              const isEven = index % 2 === 0;
              const imageUrl = timelineImages[index] || timelineImages[0];
              
              return (
                <div
                  key={item.id}
                  className={`relative transition-all duration-800 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${600 + (index * 200)}ms`
                  }}
                  onMouseEnter={() => setActiveCard(item.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-1/2 w-6 h-6 rounded-full border-4 z-20 transition-all duration-300 ${
                      isActive ? 'scale-100' : 'scale-100'
                    }`}
                    style={{
                      backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-white)',
                      borderColor: 'var(--color-accent)',
                      transform: 'translateX(-50%)',
                      top: '50%',
                      marginTop: '-12px'
                    }}
                  >
                    {isActive && (
                      <div 
                        className="absolute inset-2 rounded-full animate-pulse"
                        style={{ backgroundColor: 'var(--color-white)' }}
                      />
                    )}
                  </div>

                  {/* Content Layout - Alternating Sides */}
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Image Side */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:pr-08' : 'lg:pl-08 lg:order-2'}`}>
                      <div 
                        className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                          isActive ? 'scale-105' : 'scale-100'
                        }`}
                        style={{
                          transform: isActive 
                            ? `scale(1.05) ${isEven ? 'translateX(8px)' : 'translateX(-8px)'}`
                            : 'scale(1) translateX(0)'
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={item.title}
                          className="w-full h-[300px] lg:h-[350px] object-cover transition-transform duration-700 hover:scale-110"
                        />
                        
                        {/* Image Overlay */}
                        <div 
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            isActive ? 'opacity-20' : 'opacity-40'
                          }`}
                          style={{
                            background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)`
                          }}
                        />

                        {/* Icon Overlay */}
                        <div 
                          className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md border"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderColor: 'rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          {IconComponent && <IconComponent size={20} style={{ color: 'var(--color-accent)' }} />}
                        </div>

                        {/* Number Badge */}
                        <div 
                          className="absolute bottom-6 left-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg"
                          style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'var(--color-white)',
                            boxShadow: '0 8px 24px rgba(255, 115, 21, 0.4)'
                          }}
                        >
                          0{index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:pl-45' : 'lg:pr-45 lg:order-1'}`}>
                      <div 
                        className={`p-8 lg:p-10 rounded-3xl border-2 transition-all duration-500 ${
                          isActive ? 'scale-105 shadow-2xl' : 'scale-100'
                        }`}
                        style={{
                          backgroundColor: 'var(--color-white)',
                          borderColor: isActive 
                            ? 'var(--color-accent)' 
                            : 'var(--color-gray-200)',
                          boxShadow: isActive 
                            ? '0 32px 64px rgba(255, 115, 21, 0.2)' 
                            : '0 8px 24px rgba(10, 9, 3, 0.08)',
                          transform: isActive 
                            ? `scale(1.05) ${isEven ? 'translateX(-8px)' : 'translateX(8px)'}`
                            : 'scale(1) translateX(0)'
                        }}
                      >
                        {/* Content Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                            style={{
                              backgroundColor: isActive 
                                ? 'var(--color-accent)' 
                                : 'var(--color-gray-100)',
                              color: isActive 
                                ? 'var(--color-white)' 
                                : 'var(--color-accent)'
                            }}
                          >
                            {IconComponent && <IconComponent size={28} />}
                          </div>
                          <div 
                            className="text-sm font-bold tracking-wider uppercase"
                            style={{ color: 'var(--color-accent)' }}
                          >
                            0{index + 1} — Advantage
                          </div>
                        </div>

                        <h3
                          className="text-2xl lg:text-3xl font-black mb-4 transition-colors duration-300"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            color: isActive 
                              ? 'var(--color-accent)' 
                              : 'var(--color-primary)'
                          }}
                        >
                          {item.title}
                        </h3>
                        
                        <p
                          className="leading-relaxed text-lg mb-6"
                          style={{ color: 'var(--color-neutral)' }}
                        >
                          {item.description}
                        </p>

                        {/* Feature Highlights */}
                        <div className="flex items-center gap-6 mb-6">
                          <div className="flex items-center gap-2">
                            <CheckCircle size={16} style={{ color: 'var(--color-accent)' }} />
                            <span className="text-sm font-medium" style={{ color: 'var(--color-gray-600)' }}>
                              Guaranteed Quality
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star size={16} style={{ color: 'var(--color-highlight)' }} />
                            <span className="text-sm font-medium" style={{ color: 'var(--color-gray-600)' }}>
                              Premium Service
                            </span>
                          </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-3">
                          <div 
                            className={`h-1 rounded-full transition-all duration-500 ${
                              isActive ? 'w-24' : 'w-16'
                            }`}
                            style={{
                              backgroundColor: isActive 
                                ? 'var(--color-accent)' 
                                : 'var(--color-gray-200)'
                            }}
                          />
                          <span 
                            className="text-sm font-medium"
                            style={{ color: 'var(--color-gray-500)' }}
                          >
                            {isActive ? 'Active' : 'Hover to explore'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}