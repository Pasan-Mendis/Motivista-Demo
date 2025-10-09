import React, { useRef, useEffect, useState } from "react";
import { Eye, Target, Award, Users, Calendar, Star } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ events: 0, clients: 0, years: 0 });
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          
          const targets = { events: 500, clients: 200, years: 8 };
          let step = 0;
          
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCounters({
              events: Math.round(targets.events * easeOut),
              clients: Math.round(targets.clients * easeOut),
              years: Math.round(targets.years * easeOut)
            });
            
            if (step >= steps) clearInterval(timer);
          }, stepTime);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: Calendar, label: "Events Completed", value: counters.events, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: counters.clients, suffix: "+" },
    { icon: Award, label: "Years Experience", value: counters.years, suffix: "+" }
  ];

  const features = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be Sri Lanka's most trusted event partner by exceeding client expectations with creativity and innovation.",
      gradient: "linear-gradient(135deg, var(--color-accent-light), var(--color-highlight))"
    },
    {
      icon: Target,
      title: "Our Mission", 
      description: "To deliver exceptional, personalized event experiences through flawless execution and premium service.",
      gradient: "linear-gradient(135deg, var(--color-highlight), var(--color-accent))"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full"
          style={{ background: 'var(--color-accent)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full"
          style={{ background: 'var(--color-highlight)' }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full"
          style={{ background: 'var(--color-secondary)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              backgroundColor: 'var(--overlay-accent-light)',
              borderColor: 'var(--color-accent)',
            }}
          >
            <Star size={16} style={{ color: 'var(--color-accent)' }} />
            <span 
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-primary)' }}
            >
              About Us
            </span>
          </div>
          
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1'
            }}
          >
            Crafting <span style={{ color: 'var(--color-accent)' }}>Unforgettable</span><br />
            Event Experiences
          </h2>
          
          <p 
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ color: 'var(--color-gray-600)' }}
          >
            Motivista Events brings creativity, precision, and passion together to craft premium experiences that exceed expectations and create lasting memories.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Description Card */}
            <div 
              className={`p-6 sm:p-8 rounded-3xl backdrop-blur-sm border transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{
                backgroundColor: 'var(--color-white)',
                borderColor: 'var(--color-gray-200)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="p-3 rounded-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--color-accent-light), var(--color-highlight-light))',
                  }}
                >
                  <Users size={24} style={{ color: 'var(--color-white)' }} />
                </div>
                <div>
                  <h3 
                    className="text-xl sm:text-2xl font-bold mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Premium Event Coordination
                  </h3>
                  <p 
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: 'var(--color-gray-600)' }}
                  >
                    Whether it's a corporate gathering, elegant wedding, or large-scale festival, we handle every detail with excellence and bring your vision to life through meticulous planning and flawless execution.
                  </p>
                </div>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.label}
                    className="text-center group"
                  >
                    <div className="mb-2">
                      <achievement.icon 
                        size={20} 
                        className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                        style={{ color: 'var(--color-accent)' }} 
                      />
                      <div 
                        className="text-2xl sm:text-3xl font-black"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {achievement.value}{achievement.suffix}
                      </div>
                    </div>
                    <div 
                      className="text-xs sm:text-sm font-medium uppercase tracking-wide"
                      style={{ color: 'var(--color-gray-500)' }}
                    >
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`group p-6 rounded-2xl border transition-all duration-1000 hover:scale-105 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderColor: 'var(--color-gray-200)',
                    boxShadow: 'var(--shadow-card)',
                    transitionDelay: `${800 + index * 200}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ background: feature.gradient }}
                    >
                      <feature.icon size={18} style={{ color: 'var(--color-white)' }} />
                    </div>
                    <h3 
                      className="text-lg sm:text-xl font-bold"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p 
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: 'var(--color-gray-600)' }}
                  >
                    "{feature.description}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced Image */}
          <div className="lg:col-span-5">
            <div 
              className={`relative transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}
            >
              {/* Main Image Container */}
              <div 
                className="relative overflow-hidden rounded-3xl"
                style={{ boxShadow: '0 25px 80px rgba(10, 9, 3, 0.15)' }}
              >
                <img
                  src="https://i.pinimg.com/1200x/53/05/e9/5305e9c68dae7278fce7102972c32e23.jpg"
                  alt="About Motivista Events"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, transparent 50%, var(--color-accent) 100%)'
                  }}
                />
              </div>

              {/* Floating Elements */}
              <div 
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-60 animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
                  filter: 'blur(20px)',
                }}
              />
              
              <div 
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full opacity-40"
                style={{
                  background: 'linear-gradient(135deg, var(--color-highlight), var(--color-accent))',
                  filter: 'blur(15px)',
                  animation: 'pulse 3s infinite',
                }}
              />

              {/* Experience Badge */}
              <div 
                className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md border"
                style={{
                  backgroundColor: 'var(--overlay-white-30)',
                  borderColor: 'var(--color-white)',
                }}
              >
                <span 
                  className="text-sm font-bold"
                  style={{ color: 'var(--color-white)' }}
                >
                  8+ Years Excellence
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}