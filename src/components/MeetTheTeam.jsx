import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Users, Award, Sparkles } from "lucide-react";
import teamMembers from "../services/teamData";
import TeamCard from "./TeamCard";

// Custom TeamCard wrapper component
const CustomTeamCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group !relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div 
        className="!relative !overflow-hidden !transition-all !duration-300 !ease-out"
        style={{
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--radius-card)',
          boxShadow: isHovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
          minHeight: '420px',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          willChange: 'transform, box-shadow',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TeamCard member={member} />
        
        {/* Overlay name tag */}
        <div 
          className="!absolute !bottom-0 !left-0 !right-0 !p-6 !pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(10, 9, 3, 0.95) 40%)',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
          }}
        >
          <div 
            className="!border-l-4 !pl-4 !py-2"
            style={{
              borderColor: 'var(--color-accent)',
            }}
          >
            <h3 
              className="!text-xl !font-bold !mb-1 !tracking-tight"
              style={{ color: 'var(--color-white)' }}
            >
              {member.name}
            </h3>
            <p 
              className="!text-sm !font-semibold !uppercase !tracking-widest"
              style={{ color: 'var(--color-highlight)' }}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* Accent corner */}
        <div 
          className="!absolute !top-0 !right-0 !w-20 !h-20 !pointer-events-none !transition-opacity !duration-300"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-highlight) 100%)',
            clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
            opacity: isHovered ? 1 : 0,
            willChange: 'opacity',
          }}
        />
      </div>
    </div>
  );
};

const MeetTheTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < teamMembers.length && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + itemsPerPage);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - itemsPerPage);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const visibleMembers = teamMembers.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);
  const progressWidth = ((currentPage + 1) / totalPages) * 100;

  return (
    <section 
      className="!relative !overflow-hidden"
      style={{
        backgroundColor: 'var(--color-background)',
        padding: '5rem 0',
      }}
    >
      {/* Background Decorations */}
      <div className="!absolute !inset-0 !pointer-events-none !opacity-30">
        <div 
          className="!absolute !top-0 !left-0 !w-96 !h-96 !rounded-full !blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div 
          className="!absolute !bottom-0 !right-0 !w-96 !h-96 !rounded-full !blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--color-highlight-light) 0%, transparent 70%)',
            animation: 'float-delay 25s ease-in-out infinite',
          }}
        />
      </div>

      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 !relative !z-10">
        {/* Header */}
        <div className="!text-center !mb-16">
          <div 
            className="!inline-flex !items-center !gap-2 !px-5 !py-2.5 !rounded-full !mb-6 !border"
            style={{
              backgroundColor: 'var(--color-white)',
              borderColor: 'var(--color-gray-200)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <Sparkles 
              className="!w-4 !h-4" 
              style={{ color: 'var(--color-accent)' }}
            />
            <span 
              className="!text-xs !font-bold !uppercase !tracking-widest"
              style={{ color: 'var(--color-secondary)' }}
            >
              Our Team
            </span>
          </div>

          <h2 
            className="!text-4xl md:!text-6xl lg:!text-7xl !font-black !mb-6 !leading-tight"
            style={{ 
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Meet The{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--color-accent), var(--color-highlight))',
              }}
            >
              Dream Team
            </span>
          </h2>

          <p 
            className="!text-base sm:!text-lg !max-w-2xl !mx-auto"
            style={{ color: 'var(--color-neutral)' }}
          >
            The creative minds behind every successful project
          </p>
        </div>

        {/* Stats */}
        <div className="!flex !flex-wrap !justify-center !gap-8 sm:!gap-16 !mb-16">
          {[
            { icon: Users, value: `${teamMembers.length}+`, label: "Team Members", color: "var(--color-primary)" },
            { icon: Award, value: "50+", label: "Projects Delivered", color: "var(--color-accent)" },
          ].map((stat, i) => (
            <div key={i} className="!text-center !group">
              <div
                className="!flex !items-center !justify-center !w-16 !h-16 sm:!w-20 sm:!h-20 !rounded-2xl !mb-4 !mx-auto !transition-all !duration-500 group-hover:!scale-110"
                style={{
                  backgroundColor: 'var(--color-white)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}
              >
                <stat.icon
                  className="!w-7 !h-7 sm:!w-9 sm:!h-9 !transition-transform !duration-500 group-hover:!rotate-12"
                  style={{ color: stat.color }}
                />
              </div>
              <div 
                className="!text-2xl sm:!text-3xl !font-black !mb-1"
                style={{ color: 'var(--color-primary)' }}
              >
                {stat.value}
              </div>
              <div 
                className="!text-xs sm:!text-sm !uppercase !tracking-wider !font-semibold"
                style={{ color: 'var(--color-neutral)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Carousel */}
        <div className="!relative" ref={containerRef}>
          <div className="!flex !items-center !gap-4 sm:!gap-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="!flex-shrink-0 !w-12 !h-12 sm:!w-14 sm:!h-14 !rounded-2xl !flex !items-center !justify-center !border-2 !transition-all !duration-300 !group"
              style={{
                backgroundColor: currentIndex === 0 ? 'var(--color-gray-100)' : 'var(--color-white)',
                borderColor: currentIndex === 0 ? 'var(--color-gray-200)' : 'var(--color-primary)',
                cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                boxShadow: currentIndex === 0 ? 'none' : '0 4px 12px rgba(10, 9, 3, 0.1)',
              }}
            >
              <ChevronLeft
                className="!w-6 !h-6 sm:!w-7 sm:!h-7"
                style={{
                  color: currentIndex === 0 ? 'var(--color-gray-400)' : 'var(--color-primary)',
                }}
              />
            </button>

            {/* Cards */}
            <div className="!flex-1 !overflow-hidden">
              <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-4 sm:!gap-6">
                {visibleMembers.map((member, index) => (
                  <CustomTeamCard key={member.id} member={member} index={index} />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= teamMembers.length}
              className="!flex-shrink-0 !w-12 !h-12 sm:!w-14 sm:!h-14 !rounded-2xl !flex !items-center !justify-center !border-2 !transition-all !duration-300 !group"
              style={{
                backgroundColor: currentIndex + itemsPerPage >= teamMembers.length ? 'var(--color-gray-100)' : 'var(--color-white)',
                borderColor: currentIndex + itemsPerPage >= teamMembers.length ? 'var(--color-gray-200)' : 'var(--color-primary)',
                cursor: currentIndex + itemsPerPage >= teamMembers.length ? 'not-allowed' : 'pointer',
                boxShadow: currentIndex + itemsPerPage >= teamMembers.length ? 'none' : '0 4px 12px rgba(10, 9, 3, 0.1)',
              }}
            >
              <ChevronRight
                className="!w-6 !h-6 sm:!w-7 sm:!h-7"
                style={{
                  color: currentIndex + itemsPerPage >= teamMembers.length ? 'var(--color-gray-400)' : 'var(--color-primary)',
                }}
              />
            </button>
          </div>

          {/* Premium progress bar instead of buttons */}
          <div className="!relative !w-full !h-2 !rounded-full !overflow-hidden !mt-10 !bg-gray-200/60">
            <div
              className="!absolute !top-0 !left-0 !h-full !rounded-full"
              style={{
                width: `${progressWidth}%`,
                background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight))',
                transition: 'width 0.6s ease, background 0.6s ease',
                boxShadow: '0 0 10px var(--overlay-accent-2)',
              }}
            />
          </div>

          {/* Page Counter */}
          <div className="!text-center !mt-4">
            <span 
              className="!text-sm !font-semibold"
              style={{ color: 'var(--color-neutral)' }}
            >
              {currentPage + 1} / {totalPages}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
      `}</style>
    </section>
  );
};

export default MeetTheTeam;
