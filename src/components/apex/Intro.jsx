import React, { useState, useEffect, useRef } from "react";

const Intro = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [currentChar, setCurrentChar] = useState(0);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const introText = "Pioneering next-generation brand-tech solutions combining innovation, creativity and cutting-edge technology.";

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setCurrentChar(0);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      if (currentChar < introText.length) {
        setCurrentChar(prev => prev + 1);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [currentChar, isInView, introText.length]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth wave animation canvas
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
      
      const centerY = canvas.height / 2;
      const amplitude = 40;
      const frequency = 0.005;
      
      // Draw multiple wave layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = centerY + 
            Math.sin(x * frequency + time * 0.01 + layer * 0.5) * (amplitude - layer * 10) +
            Math.sin(x * frequency * 2 + time * 0.015) * (10 - layer * 2);
          ctx.lineTo(x, y);
        }
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(255, 115, 21, ${0.15 - layer * 0.03})`);
        gradient.addColorStop(0.5, `rgba(247, 146, 42, ${0.2 - layer * 0.04})`);
        gradient.addColorStop(1, `rgba(255, 115, 21, ${0.15 - layer * 0.03})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 - layer * 0.5;
        ctx.stroke();
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
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: '#F4F4F4' }}
    >
      {/* Animated wave canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          width: '100%', 
          height: '100%',
          opacity: 0.4,
        }}
      />

      {/* Floating accent elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              transform: `
                translateY(${Math.sin(scrollProgress * Math.PI + i) * 20}px)
                scale(${0.8 + scrollProgress * 0.4})
              `,
              transition: 'transform 0.6s ease-out',
              opacity: 0.1,
            }}
          >
            <div 
              style={{
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                background: `radial-gradient(circle, #FF7315, transparent 70%)`,
                filter: 'blur(20px)',
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div 
          style={{
            transform: `translateX(${isInView ? 0 : -50}px)`,
            opacity: isInView ? 1 : 0,
            transition: 'all 1s ease-out',
          }}
        >
          <div className="mb-8">
            <h2 
              className="text-4xl md:text-6xl font-black mb-8 leading-tight"
              style={{ color: '#0A0903' }}
            >
              Pioneering Brand-Tech{' '}
              <span 
                style={{
                  background: `linear-gradient(135deg, #FF7315, #F7922A)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Innovation
              </span>
            </h2>

            {/* Typewriter text effect */}
            <div 
              className="text-lg md:text-xl leading-relaxed mb-12 font-light"
              style={{ color: '#5C5555' }}
            >
              <p>
                {introText.slice(0, currentChar)}
                <span 
                  className="inline-block ml-1"
                  style={{ 
                    backgroundColor: '#FF7315',
                    width: '2px',
                    height: '24px',
                    animation: 'pulse 1s ease-in-out infinite',
                  }}
                />
              </p>
            </div>

            {/* CTA Button */}
            <button 
              className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, #FF7315, #F7922A)`,
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(10, 9, 3, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = `
                  0 15px 35px rgba(255, 115, 21, 0.4),
                  0 0 25px rgba(255, 115, 21, 0.3)
                `;
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 4px 12px rgba(10, 9, 3, 0.08)';
              }}
            >
              <span className="flex items-center gap-3">
                Discover Our Approach
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Visual Side */}
        <div 
          className="relative flex justify-center items-center"
          style={{
            transform: `translateX(${isInView ? 0 : 50}px)`,
            opacity: isInView ? 1 : 0,
            transition: 'all 1s ease-out 0.3s',
          }}
        >
          {/* Central glowing orb */}
          <div className="relative">
            <div 
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                position: 'relative',
                overflow: 'hidden',
                background: `conic-gradient(from 0deg, #FF7315, #F7922A, #FF7315)`,
                transform: `rotate(${scrollProgress * 180}deg)`,
                transition: 'transform 0.6s ease-out',
              }}
            >
              <div 
                className="absolute rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: '#F4F4F4',
                  top: '16px',
                  left: '16px',
                  right: '16px',
                  bottom: '16px',
                }}
              >
                <div 
                  style={{
                    width: '192px',
                    height: '192px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, #FF7315, #F7922A)`,
                    opacity: 0.9,
                  }}
                >
                  {/* Dartboard */}
                  <div className="relative">
                    <svg 
                      width="128" 
                      height="128"
                      style={{
                        transform: `rotate(${-scrollProgress * 45}deg)`,
                        transition: 'transform 0.6s ease-out',
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6"/>
                      <circle cx="12" cy="12" r="7" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.4"/>
                      <circle cx="12" cy="12" r="4" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.3"/>
                      <circle cx="12" cy="12" r="1.5" fill="#FF7315" opacity="0.8"/>
                      
                      {/* Dartboard lines */}
                      <line x1="12" y1="2" x2="12" y2="22" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                      <line x1="2" y1="12" x2="22" y2="12" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ffffff" strokeWidth="0.5" opacity="0.2"/>
                      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="#ffffff" strokeWidth="0.5" opacity="0.2"/>
                    </svg>

                    {/* Arrow - positioned absolutely so it doesn't rotate with dartboard */}
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `
                          translate(-50%, -50%)
                          translateX(${30 - (scrollProgress * 40)}px)
                          translateY(${-3 + (scrollProgress * 6)}px)
                        `,
                        opacity: scrollProgress > 0.3 ? 1 : 0,
                        transition: 'opacity 0.3s ease-out',
                        zIndex: 10,
                      }}
                    >
                      <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
                        {/* Arrow tip */}
                        <polygon 
                          points="24,4 18,1 18,7" 
                          fill="#FF7315"
                          stroke="#FF7315"
                          strokeWidth="0.5"
                        />
                        {/* Arrow body */}
                        <rect 
                          x="8" 
                          y="3" 
                          width="10" 
                          height="2" 
                          fill="#F7922A"
                          stroke="#F7922A"
                        />
                        {/* Arrow flights */}
                        <polygon 
                          points="8,4 4,1 4,7" 
                          fill="#FF7315"
                          stroke="#FF7315"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>

                    {/* Hit effect when arrow reaches center */}
                    <div 
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(-50%, -50%) scale(${scrollProgress > 0.8 ? 1.5 : 0.5})`,
                        opacity: scrollProgress > 0.8 ? 1 : 0,
                        transition: 'all 0.3s ease-out',
                        pointerEvents: 'none',
                      }}
                    >
                      <div 
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#FF7315',
                          boxShadow: `0 0 20px #FF7315`,
                          animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting elements */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  transform: `
                    rotate(${i * 90 + scrollProgress * 120}deg) 
                    translateX(160px) 
                    rotate(${-(i * 90 + scrollProgress * 120)}deg)
                  `,
                  transformOrigin: '50% 50%',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-8px',
                  marginTop: '-8px',
                  zIndex: 5,
                }}
              >
                <div 
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: i % 2 === 0 ? '#FF7315' : '#F7922A',
                    boxShadow: `0 0 15px ${i % 2 === 0 ? '#FF7315' : '#F7922A'}`,
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              </div>
            ))}

            {/* Outer glow effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, #FF7315, transparent 70%)`,
                filter: 'blur(30px)',
                transform: 'scale(1.5)',
                opacity: 0.3,
                animation: 'pulse 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;