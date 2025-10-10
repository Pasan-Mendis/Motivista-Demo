import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Code, Sparkles, CheckCircle } from "lucide-react";

const Intro = () => {
  const [isInView, setIsInView] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const rotatingWords = ["Innovation", "Excellence", "Solutions", "Technology"];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Word rotation
  useEffect(() => {
    if (!isInView) return;
    
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isInView, rotatingWords.length]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let animationId;
    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 115, 21, 0.08)';
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Animated particles
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time * 0.001 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.0015 + i * 0.5) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time * 0.002 + i) * 2 + 3;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
        gradient.addColorStop(0, 'rgba(255, 115, 21, 0.3)');
        gradient.addColorStop(1, 'rgba(247, 146, 42, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      time++;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-white)' }}
    >
      {/* Animated Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          width: '100%', 
          height: '100%',
          opacity: 0.6,
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-10 sm:top-20 -right-10 sm:-right-20 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: `translateY(${scrollProgress * 50}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: `translateY(${-scrollProgress * 50}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[60vh]">
          
          {/* Left Content */}
          <div 
            className="lg:col-span-7 space-y-6 sm:space-y-8"
            style={{
              transform: `translateX(${isInView ? 0 : -50}px)`,
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--overlay-accent-light)',
                borderColor: 'var(--color-accent)',
              }}
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4" style={{ color: 'var(--color-accent)' }} />
              <span 
                className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                style={{ color: 'var(--color-primary)' }}
              >
                Next-Gen Technology
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-4 sm:mb-6"
                style={{ 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Pioneering
                <br />
                <span className="relative inline-block">
                  <span 
                    className="relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {rotatingWords[currentWord]}
                  </span>
                  {/* Animated underline */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 sm:h-1.5 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight))',
                      width: '100%',
                      animation: 'slideIn 0.5s ease-out',
                    }}
                  />
                </span>
              </h1>


              {/* Description */}
              <p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl"
                style={{ color: 'var(--color-gray-600)' }}
              >
                Combining cutting-edge technology with creative innovation to deliver 
                <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}> next-generation brand-tech solutions</span> that drive your business forward.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6">
              {[
                { icon: Zap, text: "Lightning Fast Performance" },
                { icon: Code, text: "Cutting-Edge Technology" },
                { icon: CheckCircle, text: "Proven Track Record" },
                { icon: Sparkles, text: "Innovative Solutions" },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--color-background)',
                    border: '1px solid var(--color-gray-200)',
                  }}
                >
                  <div 
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-accent-light), var(--color-highlight-light))',
                    }}
                  >
                    <feature.icon size={16} className="sm:w-5 sm:h-5" style={{ color: 'var(--color-white)' }} />
                  </div>
                  <span 
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: 'var(--color-gray-700)' }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button 
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
                  color: 'var(--color-white)',
                  boxShadow: '0 10px 40px rgba(255, 115, 21, 0.3)',
                }}
              >
                <span>Discover Our Approach</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 border-2"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                }}
              >
                View Case Studies
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div 
            className="hidden lg:col-span-5 lg:block relative"
            style={{
              transform: `translateX(${isInView ? 0 : 50}px)`,
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s',
            }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              
              {/* Central Circle */}
              <div 
                className="absolute inset-0"
                style={{
                  transform: `rotate(${scrollProgress * 180}deg)`,
                  transition: 'transform 0.1s linear',
                }}
              >
                <div 
                  className="w-full h-full rounded-full p-4 sm:p-6"
                  style={{
                    background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-highlight), var(--color-accent))',
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-white)' }}
                  >
                    <div 
                      className="w-[85%] h-[85%] rounded-full relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
                      }}
                    >
                      {/* Tech Grid Pattern */}
                      <svg 
                        className="absolute inset-0 w-full h-full opacity-20"
                        viewBox="0 0 100 100"
                      >
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" />
                      </svg>

                      {/* Central Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="relative"
                          style={{
                            transform: `scale(${0.8 + Math.sin(scrollProgress * Math.PI) * 0.2})`,
                            transition: 'transform 0.3s ease-out',
                          }}
                        >
                          <Zap 
                            size={window.innerWidth < 640 ? 40 : window.innerWidth < 1024 ? 60 : 80} 
                            style={{ color: 'var(--color-white)' }}
                            strokeWidth={2}
                          />
                          {/* Pulsing ring */}
                          <div 
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{
                              border: '2px solid var(--color-white)',
                              opacity: 0.3,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotate(${i * 60 + scrollProgress * 120}deg) 
                      translateX(${window.innerWidth < 640 ? 110 : window.innerWidth < 1024 ? 140 : 170}px)
                    `,
                    transformOrigin: '50% 50%',
                  }}
                >
                  <div 
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-highlight)',
                      boxShadow: `0 0 20px ${i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-highlight)'}`,
                      transform: `rotate(${-(i * 60 + scrollProgress * 120)}deg)`,
                    }}
                  />
                </div>
              ))}

              {/* Floating Cards */}
              {[
                { top: '10%', left: '-5%', delay: 0 },
                { top: '70%', right: '-5%', delay: 0.2 },
                { top: '40%', left: '-10%', delay: 0.4 },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute hidden lg:block"
                  style={{
                    ...pos,
                    transform: `translateY(${Math.sin(scrollProgress * Math.PI * 2 + i) * 10}px)`,
                    transition: 'transform 0.3s ease-out',
                    animation: `float ${4 + i}s ease-in-out infinite`,
                    animationDelay: `${pos.delay}s`,
                  }}
                >
                  <div 
                    className="p-4 rounded-2xl backdrop-blur-md border shadow-lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderColor: 'var(--color-gray-200)',
                    }}
                  >
                    <div 
                      className="text-2xl font-black"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {['AI', 'IoT', 'Cloud'][i]}
                    </div>
                  </div>
                </div>
              ))}

              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-30 animate-pulse"
                style={{
                  background: 'radial-gradient(circle, var(--color-accent), transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)',
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Intro;