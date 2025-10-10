import React, { useState, useEffect } from "react";
import introImage from "../assets/images/Welcome.png";
import countersBackgroundImage from "../assets/images/counters-bg.jpg";
import { useNavigate } from "react-router-dom";
// Mock InView hook for demonstration
const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      options
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, inView };
};

// Simple CountUp component
const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function IntroAndCounters() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const navigate = useNavigate();
  const counters = [
    { id: 1, label: "Projects Completed", value: 200, icon: "🚀" },
    { id: 2, label: "Trusted Clients", value: 85, icon: "⭐" },
    { id: 3, label: "Professional Team", value: 45, icon: "👥" },
    { id: 4, label: "Years Experience", value: 5, icon: "💼" },
  ];

  return (
    <div className="w-full">
      {/* Premium Intro Section */}
      <section 
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: 'var(--color-background) !important' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            style={{
              backgroundImage: `
                linear-gradient(var(--color-gray-200) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
            className="w-full h-full"
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 animate-float-delay" 
          style={{ backgroundColor: 'var(--color-accent) !important' }}
        />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10 animate-float" 
          style={{ backgroundColor: 'var(--color-highlight) !important' }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div 
                className="inline-block px-4 py-2 rounded-full border mb-4"
                style={{
                  backgroundColor: 'var(--overlay-accent-light) !important',
                  borderColor: 'var(--color-accent) !important',
                }}
              >
                <span 
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--color-accent) !important' }}
                >
                  About Us
                </span>
              </div>

              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
                style={{ 
                  color: 'var(--color-primary) !important',
                  fontFamily: 'var(--font-heading) !important',
                }}
              >
                Welcome to{' '}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight)) !important',
                  }}
                >
                  Motivista
                </span>
              </h1>

              <div 
                className="h-1 w-24 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight)) !important',
                }}
              />

              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--color-neutral) !important' }}
              >
                Every step of Motivista's journey has been guided by one vision: "to motivate the world." 
                <br className="!block" />
                Motivista was born from a simple yet powerful belief that creativity, innovation and knowledge 
                can inspire change and drive growth. It soon evolved into a multidisciplinary organization that 
                bridges ideas with impact.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight)) !important',
                    color: 'var(--color-white) !important',
                    boxShadow: 'var(--shadow-card) !important',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = 'var(--shadow-card-hover) !important';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'var(--shadow-card) !important';
                  }}
                  onClick={() => navigate("/Contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div 
                  className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight)) !important',
                  }}
                />
                <img
                  src={introImage}
                  alt="About Motivista"
                  className="relative rounded-2xl w-full h-auto"
                  style={{ boxShadow: 'var(--shadow-card-hover) !important' }}
                />
                
                {/* Decorative Corner */}
                <div 
                  className="absolute top-0 left-0 w-24 h-24"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent), transparent) !important',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Counters Section with Fixed Parallax Background */}
      <section 
        className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
        style={{ 
          backgroundColor: 'var(--color-primary) !important',
        }}
      >
        {/* Fixed Parallax Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(20, 9, 3, 0.85), rgba(58, 53, 53, 0.8)), url(${countersBackgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Dark Overlay for better contrast */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(10, 9, 3, 0.85) 0%, rgba(58, 53, 53, 0.8) 100%) !important',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <div 
              className="inline-block px-4 py-2 rounded-full border mb-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
                borderColor: 'var(--color-accent) !important',
              }}
            >
              <span 
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: 'var(--color-accent) !important' }}
              >
                Our Achievement
              </span>
            </div>

            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
              style={{ 
                color: 'var(--color-white) !important',
                fontFamily: 'var(--font-heading) !important',
              }}
            >
              Why Choose{' '}
              <span style={{ color: 'var(--color-accent) !important' }}>
                Motivista
              </span>
            </h2>

            <p 
              className="text-base md:text-lg max-w-3xl mx-auto"
              style={{ color: 'var(--color-gray-300) !important' }}
            >
              Numbers that speak for our commitment to excellence and innovation
            </p>
          </div>

          {/* Counter Cards - Smaller Size */}
          <div 
            ref={ref}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {counters.map((counter, index) => (
              <div
                key={counter.id}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div 
                  className="relative p-6 md:p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 55, 0.05)',
                    borderColor: 'var(--color-accent)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1) ';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05) ';
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="text-3xl md:text-4xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300"
                  >
                    {counter.icon}
                  </div>

                  {/* Number */}
                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-black mb-3"
                    style={{ 
                      color: 'var(--color-accent) !important',
                      fontFamily: 'var(--font-heading) !important',
                    }}
                  >
                    {inView ? <CountUp end={counter.value} duration={2} /> : 0}
                    <span style={{ color: 'var(--color-highlight) !important' }}>+</span>
                  </h3>

                  {/* Label */}
                  <p 
                    className="text-xs md:text-sm font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--color-gray-300) !important' }}
                  >
                    {counter.label}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 md:mt-14">
            <p 
              className="text-base mb-5"
              style={{ color: 'var(--color-gray-300) !important' }}
            >
              Ready to start your next project with us?
            </p>
            <button 
              className="px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight)) !important',
                color: 'var(--color-white) !important',
                boxShadow: '0 10px 30px rgba(255, 115, 21, 0.4) !important',
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 15px 40px rgba(255, 115, 21, 0.6) !important';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 10px 30px rgba(255, 115, 21, 0.4) !important';
              }}
              onClick={() => window.open("https://forms.gle/9CvUvtcMaC4CAj3t8", "_blank")}
            >
              Get Started Today
            </button>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}