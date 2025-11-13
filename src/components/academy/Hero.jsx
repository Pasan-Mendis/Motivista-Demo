import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import HeroImg from "../../assets/images/academy/hero/pang-yuhao-_kd5cxwZOK4-unsplash.jpg";
import MAELogo from "../../assets/images/logos/MAE LOGO White.png"

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Elegant particle system
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
    
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.4 + 0.2,
      pulseSpeed: Math.random() * 0.01 + 0.005,
      pulsePhase: Math.random() * Math.PI * 2,
    }));
    
    let time = 0;
    let animationId;
    
    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        const pulsingOpacity = particle.opacity * (0.6 + 0.4 * Math.sin(time * particle.pulseSpeed + particle.pulsePhase));
        
        // Draw subtle connections
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = ((120 - distance) / 120) * 0.08;
            ctx.strokeStyle = `rgba(255, 115, 21, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 146, 42, ${pulsingOpacity})`;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ 
        backgroundColor: 'var(--color-primary)', 
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '80px'
      }}
    >
      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ opacity: 0.5 }}
      />

      {/* Background with Parallax */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img
          src={HeroImg}
          alt="Academy"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        />
        
        {/* Elegant gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at ${50 + mousePosition.x * 0.08}% ${50 + mousePosition.y * 0.08}%, 
                rgba(10, 9, 3, 0.3) 0%,
                rgba(10, 9, 3, 0.7) 50%,
                rgba(10, 9, 3, 0.9) 100%
              )
            `,
          }}
        />
      </div>

      {/* Main Content - Centered and Clean */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center pt-10">
        <div className="space-y-8">

          {/* Logo */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            {/* Tech Logo with 3D effect */}
            <div className="mb-6 sm:mb-8 inline-block">
              <div className="relative">
                {/* MA Logo Icon */}
                <img
                  src={MAELogo}
                  alt="MAE Logo"
                  className="w-20 h-20 sm:w-30 sm:h-30 md:w-35 md:h-35 object-contain mx-auto"
                />
              </div>
            </div>
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight"
              style={{
                color: 'var(--color-white)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Motivista Academy
            </h1>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-4 tracking-wide"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              of Excellence
            </h2>
          </div>

          {/* Elegant Divider */}
          <div 
            className="flex items-center justify-center gap-3"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
          >
            <div 
              className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
            />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--color-highlight)' }}
            />
            <div 
              className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
            />
          </div>

          {/* Tagline */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed"
            style={{
              color: 'var(--color-gray-200)',
              animation: 'fadeInUp 0.8s ease-out 0.6s both',
            }}
          >
            Transforming you for Tomorrow
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
          >
            <button
              className="group relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
                color: 'var(--color-white)',
                boxShadow: '0 10px 40px rgba(255, 115, 21, 0.3)',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Explore Programs
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, var(--color-highlight), var(--color-accent))',
                }}
              />
            </button>
            
            {/* <button
              onClick={() => setIsVideoPlaying(true)}
              className="group px-10 py-5 rounded-2xl font-semibold text-lg border-2 backdrop-blur-xl transition-all duration-300 w-full sm:w-auto"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'var(--color-white)',
              }}
            >
              <span className="flex items-center justify-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-white)'
                  }}
                >
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Our Story
              </span>
            </button> */}
          </div>

          {/* Simple Stats */}
          <div 
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 pt-12"
            style={{ animation: 'fadeInUp 0.8s ease-out 1s both' }}
          >
            {[
              { number: '10,000+', label: 'Alumni' },
              { number: '50+', label: 'Programs' },
              { number: '98%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="text-3xl sm:text-4xl font-black mb-1"
                  style={{ 
                    color: 'var(--color-highlight)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm font-medium tracking-wider uppercase"
                  style={{ color: 'var(--color-gray-400)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Pills */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 pt-8"
            style={{ animation: 'fadeInUp 0.8s ease-out 1.2s both' }}
          >
            {['Globally Recognized', 'Expert Faculty', 'Lifetime Access', 'Career Support'].map((item, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 rounded-full backdrop-blur-md border text-sm font-medium"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'var(--color-gray-300)',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal
      {isVideoPlaying && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ 
            backgroundColor: 'rgba(10, 9, 3, 0.97)',
            backdropFilter: 'blur(20px)',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setIsVideoPlaying(false)}
        >
          <div 
            className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 40px 120px rgba(0, 0, 0, 0.8)',
            }}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-14 right-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-xl font-bold"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'var(--color-white)',
                backdropFilter: 'blur(10px)',
              }}
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )} */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
        
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;