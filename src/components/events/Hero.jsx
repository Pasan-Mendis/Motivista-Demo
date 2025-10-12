import React, { useState, useEffect, useRef } from "react";
import { Play, ChevronDown, Calendar, Users, Award, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // Hero slides with dummy content
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop",
      title: "Motivated by Your Dream",
      subtitle: "Premium Event Experiences",
      description: "Crafted with creativity, precision & passion to bring your vision to life.",
      stats: { events: "500+", clients: "200+", years: "8+" }
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop",
      title: "Unforgettable Moments",
      subtitle: "Corporate Excellence",
      description: "Transform your corporate events into memorable experiences that inspire and engage.",
      stats: { events: "300+", satisfaction: "99%", team: "50+" }
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&h=1080&fit=crop",
      title: "Party with Style",
      subtitle: "Luxury Celebrations",
      description: "From intimate gatherings to grand celebrations, we create experiences that matter.",
      stats: { venues: "100+", awards: "25+", countries: "15+" }
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  });

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // eslint-disable-next-line no-unused-vars
    const particles = Array.from({ length: 60 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
    }));
    
    let time = 0;
    let animationId;
    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        // Update pulsing opacity
        const pulsingOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(time * particle.pulseSpeed + particle.pulsePhase));
        
        // Draw enhanced connections with gradient
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = ((120 - distance) / 120) * 0.15;
            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            gradient.addColorStop(0, `rgba(255, 115, 21, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(247, 146, 42, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(255, 115, 21, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
        
        // Enhanced particle rendering with glow effect
        const glowSize = particle.size * 4;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, `rgba(247, 146, 42, ${pulsingOpacity})`);
        gradient.addColorStop(0.4, `rgba(255, 115, 21, ${pulsingOpacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(247, 146, 42, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 115, 21, ${pulsingOpacity * 0.9})`;
        ctx.fill();
        
        // Update position with subtle mouse influence
        particle.x += particle.speedX + (mousePosition.x * 0.001);
        particle.y += particle.speedY + (mousePosition.y * 0.001);
        
        // Wrap around edges with buffer
        if (particle.x < -20) particle.x = canvas.width + 20;
        if (particle.x > canvas.width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = canvas.height + 20;
        if (particle.y > canvas.height + 20) particle.y = -20;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: 'var(--color-primary)', minHeight: '100vh' }}
    >
      {/* Enhanced animated particle background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ opacity: 0.7 }}
      />

      {/* Background Image with Dynamic Parallax */}
      <div 
        className="absolute inset-0 transition-all duration-1500 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1.1 + scrollY * 0.0001})`,
        }}
      >
        <img
          src={currentSlideData.image}
          alt="Hero Background"
          className="w-full h-full object-cover transition-all duration-1500"
          style={{
            filter: `brightness(0.4) contrast(1.1) saturate(1.2)`,
          }}
        />
        
        {/* Sophisticated gradient overlay with mouse interaction */}
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(
                ellipse at ${50 + mousePosition.x * 0.15}% ${50 + mousePosition.y * 0.15}%, 
                rgba(10, 9, 3, 0.2) 0%,
                rgba(10, 9, 3, 0.6) 40%,
                rgba(10, 9, 3, 0.85) 100%
              ),
              linear-gradient(
                135deg,
                rgba(255, 115, 21, 0.1) 0%,
                rgba(10, 9, 3, 0.3) 50%,
                rgba(247, 146, 42, 0.1) 100%
              )
            `,
          }}
        />
      </div>

      {/* Content Grid Layout - RESPONSIVE */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Column - Main Content - RESPONSIVE */}
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              
              {/* Premium Badge with Enhanced Styling - RESPONSIVE */}
              <div 
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 backdrop-blur-xl transition-all duration-700 hover:scale-105"
                style={{
                  borderColor: 'var(--color-accent)',
                  backgroundColor: 'rgba(255, 115, 21, 0.15)',
                  boxShadow: '0 8px 32px rgba(255, 115, 21, 0.2)',
                  transform: `translateY(${-scrollY * 0.3}px)`,
                }}
              >
                <div className="relative">
                  <Sparkles 
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] animate-pulse"
                    style={{ color: 'var(--color-accent)' }}
                  />
                  <div 
                    className="absolute inset-0 animate-ping"
                    style={{
                      background: 'var(--color-accent)',
                      borderRadius: '50%',
                      opacity: 0.3,
                    }}
                  />
                </div>
                <span 
                  className="text-xs sm:text-sm font-bold tracking-widest uppercase"
                  style={{ color: 'var(--color-white)' }}
                >
                  {currentSlideData.subtitle}
                </span>
              </div>

              {/* Redesigned Title with Better Typography - RESPONSIVE */}
              <div 
                className="space-y-3 sm:space-y-4 transition-all duration-1000"
                style={{
                  transform: `translateY(${-scrollY * 0.2}px)`,
                }}
              >
                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.95] sm:leading-[0.9] tracking-tight"
                  style={{
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {currentSlideData.title.split(' ').map((word, index) => (
                    <div
                      key={index}
                      className="inline-block overflow-hidden"
                    >
                      <span
                        className="inline-block"
                        style={{
                          animation: `slideInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) ${index * 0.15}s both`,
                          transform: `translateX(${mousePosition.x * 0.02}px)`,
                        }}
                      >
                        {index === currentSlideData.title.split(' ').length - 1 ? (
                          <span style={{ color: 'var(--color-accent)' }}>{word}</span>
                        ) : (
                          word
                        )}{' '}
                      </span>
                    </div>
                  ))}
                </h1>
                
                {/* Accent line - RESPONSIVE */}
                <div 
                  className="h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, var(--color-accent), var(--color-highlight))`,
                    animation: 'slideInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.8s both',
                  }}
                />
              </div>

              {/* Enhanced Description - RESPONSIVE */}
              <p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light"
                style={{
                  color: 'var(--color-gray-100)',
                  transform: `translateY(${-scrollY * 0.1}px)`,
                  animation: 'slideInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 1s both',
                }}
              >
                {currentSlideData.description}
              </p>

              {/* Redesigned Action Buttons - RESPONSIVE */}
              <div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700"
                style={{
                  transform: `translateY(${-scrollY * 0.1}px)`,
                  animation: 'slideInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 1.2s both',
                }}
              >
                <button
                    className="
                        group 
                        relative 
                        px-6 sm:px-8 
                        py-3 sm:py-4 
                        rounded-xl sm:rounded-2xl 
                        font-semibold 
                        text-base sm:text-lg 
                        transition-all 
                        duration-500 
                        overflow-hidden
                        !bg-gradient-to-br !from-[var(--color-accent)] !to-[var(--color-highlight)]
                        !text-[var(--color-white)]
                        hover:-translate-y-1 hover:scale-[1.02]
                        active:translate-y-0
                        w-full sm:w-auto
                    "
                    >
                    <div className="flex items-center justify-center gap-2 sm:gap-3 relative z-10">
                        Plan Your Event
                        <ArrowRight
                        size={18}
                        className="sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 !text-[var(--color-white)]"
                        />
                    </div>

                    {/* Hover overlay effect */}
                    <div
                        className="
                        absolute inset-0 
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity duration-300
                        !bg-gradient-to-br !from-[var(--color-highlight)] !to-[var(--color-accent)]
                        "
                    />
                    </button>

                
                <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="
                        group 
                        px-6 sm:px-8 
                        py-3 sm:py-4 
                        rounded-xl sm:rounded-2xl 
                        font-semibold 
                        text-base sm:text-lg 
                        transition-all 
                        duration-500 
                        border-2 
                        backdrop-blur-xl 
                        relative 
                        overflow-hidden
                        !bg-[rgba(255,255,255,0.08)]
                        !border-[rgba(255,255,255,0.3)]
                        !text-[var(--color-white)]
                        hover:!bg-[rgba(255,255,255,0.15)]
                        hover:!border-[var(--color-accent)]
                        hover:-translate-y-0.5
                        active:translate-y-0
                        w-full sm:w-auto
                    "
                    >
                    <div className="flex items-center justify-center gap-2 sm:gap-3 relative z-10">
                        <Play
                        size={18}
                        className="sm:w-5 sm:h-5 transition-transform group-hover:scale-110 !text-[var(--color-white)]"
                        />
                        Watch Our Story
                    </div>
                    </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Video Modal - RESPONSIVE */}
      {isVideoPlaying && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4 transition-all duration-300"
          style={{ 
            backgroundColor: 'rgba(10, 9, 3, 0.95)',
            backdropFilter: 'blur(20px)',
          }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative max-w-5xl w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 40px 120px rgba(0, 0, 0, 0.8)',
            }}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 sm:-top-16 right-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'var(--color-white)',
                backdropFilter: 'blur(10px)',
              }}
            >
              ✕
            </button>
            <iframe
              src="https://player.vimeo.com/video/148003889?autoplay=1"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translateY(0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translateY(-12px);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translateY(-6px);
          }
          90% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;