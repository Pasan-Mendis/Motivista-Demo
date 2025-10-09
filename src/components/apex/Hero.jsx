import React, { useState, useEffect, useRef } from "react";
import MALogo from '../../assets/images/logos/MA Icon.png';
import Logo from '../../assets/images/logos/MA Text.png';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Advanced canvas background
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
    
    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
    }));
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(255, 115, 21, 0.08)';
      ctx.lineWidth = 1;
      
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120;
            ctx.strokeStyle = `rgba(255, 115, 21, ${opacity * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });
      
      // Draw nodes
      nodes.forEach(node => {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2);
        gradient.addColorStop(0, 'rgba(247, 146, 42, 0.6)');
        gradient.addColorStop(1, 'rgba(247, 146, 42, 0)');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Boundary collision
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: 'var(--color-primary-light)',
      }}
    >
      {/* Animated Canvas Network */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Parallax Background Layers */}
      {/* <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 115, 21, 0.08) 0%, transparent 50%)`
        }}
      /> */}
      
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateX(${(mousePosition.x - 50) * 0.02}px)`,
        }}
      >
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-96 h-96 opacity-20 animate-float"
          style={{
            top: '10%',
            right: '10%',
            background: `conic-gradient(from 0deg, var(--color-accent), var(--color-highlight), var(--color-accent))`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(1px)',
          }}
        />
        
        <div 
          className="absolute w-80 h-80 opacity-15 animate-float-delay"
          style={{
            bottom: '15%',
            left: '5%',
            background: `linear-gradient(135deg, var(--color-highlight), var(--color-accent))`,
            borderRadius: '50%',
            filter: 'blur(2px)',
          }}
        />

        {/* Tech grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="techGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="var(--color-accent)" opacity="0.4" />
              <path d="M50,0 L50,100 M0,50 L100,50" stroke="var(--color-secondary)" strokeWidth="0.3" opacity="0.6" />
              <polygon points="50,10 40,25 60,25" fill="none" stroke="var(--color-highlight)" strokeWidth="0.4" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div 
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >
        
        {/* Tech Logo with 3D effect */}
        <div className="mb-8 inline-block"
        >
          <div className="relative">
              {/* Replaced SVG with image */}
              <img
                src={MALogo}
                alt="MA Logo"
                className="w-15 h-15 md:w-25 md:h-25 object-contain"
              />
            <div
              className="absolute -inset-6 rounded-full blur-xl animate-pulse-warm opacity-60"
              style={{
                background: `radial-gradient(circle, var(--color-highlight), transparent 70%)`,
              }}
            />
          </div>
        </div>


        {/* Dynamic rotating text */}
        

        {/* Main heading with parallax layers */}
        <div className="relative mb-8">
          {/* Logo Image with 3D parallax effect */}
          <div
            className="mb-2 inline-block"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`,
            }}
          >
            <img
              src={Logo}
              alt="Company Logo"
              className="w-81 md:w-107 mx-auto" // increased size
              style={{
                filter: 'drop-shadow(0 15px 40px rgba(255,115,21,0.4))',
              }}
            />
          </div>

        </div>

        {/* Subtitle with typewriter effect */}
        <div 
          className="max-w-3xl mx-auto mb-16"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          <p 
            className="text-xl md:text-2xl leading-relaxed font-light"
            style={{ color: 'var(--color-background)' }}
          >
            Pioneering next-generation brand-tech solutions combining{' '}
            <span 
              className="font-semibold px-2 py-1 rounded-lg"
              style={{
                color: 'var(--color-accent)',
                backgroundColor: 'rgba(255, 115, 21, 0.1)',
              }}
            >
              innovation
            </span>
            , creativity and cutting-edge technology.
          </p>
        </div>

        {/* CTA Buttons with 3D hover effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            className="group relative px-10 py-4 font-semibold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, var(--color-accent), var(--color-highlight))`,
              color: 'var(--color-white)',
              boxShadow: `0 10px 30px rgba(255, 115, 21, 0.3)`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 40px rgba(255, 115, 21, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(255, 115, 21, 0.3)';
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, var(--color-highlight), var(--color-accent))`,
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button 
            className="group px-10 py-4 font-semibold rounded-2xl transition-all duration-500 hover:scale-105"
            style={{
              backgroundColor: 'transparent',
              border: `2px solid var(--color-secondary)`,
              color: 'var(--color-secondary)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-secondary)';
              e.target.style.color = 'var(--color-white)';
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'var(--color-secondary)';
              e.target.style.transform = 'translateY(0) scale(1)';
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * -0.3}px)`,
        }}
      >
        <div 
          className="w-6 h-10 rounded-full p-1 border-2"
          style={{
            borderColor: 'var(--color-accent)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div 
            className="w-2 h-3 rounded-full mx-auto animate-pulse"
            style={{
              background: `linear-gradient(to bottom, var(--color-accent), var(--color-highlight))`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;