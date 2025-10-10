import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import teamMembers from "../services/teamData";
import TeamCard from "./TeamCard";

const SWIPE_THRESHOLD = 50;
const TRANSITION_DURATION = 500;

const MeetTheTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchMoveX, setTouchMoveX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  // Sort team members by id
  const sortedTeamMembers = [...teamMembers].sort((a, b) => a.id - b.id);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    setTouchMoveX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    const deltaX = touchStartX - touchMoveX;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) nextMember();
      else prevMember();
    }
    setIsSwiping(false);
    setTouchMoveX(0);
  };

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % sortedTeamMembers.length);
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + sortedTeamMembers.length) % sortedTeamMembers.length);
  };

  const getVisibleCards = () => {
    const total = sortedTeamMembers.length;
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + total) % total;
      cards.push({ member: sortedTeamMembers[index], index, position: i });
    }
    return cards;
  };

  const getCardStyle = (position) => {
    const isMobileView = isMobile;
    const positions = {
      "-2": {
        x: isMobileView ? -220 : -600,
        scale: isMobileView ? 0.6 : 0.7,
        opacity: 0.2,
        zIndex: 10,
        blur: 2,
      },
      "-1": {
        x: isMobileView ? -120 : -310,
        scale: isMobileView ? 0.8 : 0.85,
        opacity: 0.5,
        zIndex: 20,
        blur: 1,
      },
      "0": {
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 40,
        blur: 0,
      },
      "1": {
        x: isMobileView ? 120 : 310,
        scale: isMobileView ? 0.8 : 0.85,
        opacity: 0.5,
        zIndex: 20,
        blur: 1,
      },
      "2": {
        x: isMobileView ? 220 : 600,
        scale: isMobileView ? 0.6 : 0.7,
        opacity: 0.2,
        zIndex: 10,
        blur: 2,
      },
    };
    return positions[position.toString()] || positions["2"];
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--color-highlight-light) 0%, transparent 70%)",
            animation: "float-delay 25s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-6 border"
            style={{
              backgroundColor: "var(--color-white)",
              borderColor: "var(--color-gray-200)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <Sparkles
              className="w-3 h-3 sm:w-4 sm:h-4"
              style={{ color: "var(--color-accent)" }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--color-secondary)" }}
            >
              Our Team
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight px-4"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Meet The{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
              }}
            >
              Dream Team
            </span>
          </h2>

          <p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
            style={{ color: "var(--color-neutral)" }}
          >
            The creative minds behind every successful project
          </p>
        </div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          {!isMobile && (
            <>
              <button
                onClick={prevMember}
                className="absolute left-0 lg:left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-white)",
                  borderColor: "var(--color-primary)",
                  boxShadow: "0 4px 12px rgba(10, 9, 3, 0.1)",
                }}
              >
                <ChevronLeft
                  className="w-6 h-6 lg:w-7 lg:h-7"
                  style={{ color: "var(--color-primary)" }}
                />
              </button>
              <button
                onClick={nextMember}
                className="absolute right-0 lg:right-4 xl:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-white)",
                  borderColor: "var(--color-primary)",
                  boxShadow: "0 4px 12px rgba(10, 9, 3, 0.1)",
                }}
              >
                <ChevronRight
                  className="w-6 h-6 lg:w-7 lg:h-7"
                  style={{ color: "var(--color-primary)" }}
                />
              </button>
            </>
          )}

          <div
            ref={containerRef}
            className="relative mx-auto"
            style={{
              height: isMobile ? "500px" : "650px",
              marginTop: isMobile ? "20px" : "40px",
              overflow: "visible",
              touchAction: "pan-y",
            }}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
          >
            {visibleCards.map(({ member, index, position }) => {
              const style = getCardStyle(position);
              const isActive = position === 0;
              const transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${TRANSITION_DURATION}ms ease, filter ${TRANSITION_DURATION}ms ease`;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${style.x}px) scale(${style.scale})`,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    transition,
                    width: isMobile ? "260px" : "320px",
                    filter: `blur(${style.blur}px)`,
                  }}
                  onClick={() => !isActive && setActiveIndex(index)}
                >
                  {/* Card Wrapper */}
                  <div 
                    className="!relative !overflow-hidden !rounded-2xl sm:!rounded-3xl"
                    style={{
                      backgroundColor: 'var(--color-white)',
                      boxShadow: isActive 
                        ? '0 30px 60px rgba(255, 115, 21, 0.35), 0 0 0 4px var(--color-accent)' 
                        : 'var(--shadow-card)',
                      border: isActive 
                        ? 'none'
                        : '1px solid var(--color-gray-200)',
                      transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                      transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                      minHeight: '420px',
                    }}
                  >
                    {/* TeamCard Component */}
                    <div className="!relative">
                      <TeamCard member={member} />
                      
                      {/* Overlay name tag */}
                      <div 
                        className="!absolute !bottom-0 !left-0 !right-0 !p-6 !pointer-events-none"
                        style={{
                          background: 'linear-gradient(180deg, transparent 0%, rgba(10, 9, 3, 0.95) 40%)',
                          transform: isActive ? 'translateY(0)' : 'translateY(100%)',
                          opacity: isActive ? 1 : 0,
                          transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1) 300ms, opacity ${TRANSITION_DURATION}ms ease 300ms`,
                          willChange: 'transform, opacity',
                        }}
                      >
                        <div 
                          className="!border-l-4 !pl-4 !py-2"
                          style={{
                            borderColor: 'var(--color-accent)',
                            transform: isActive ? 'translateX(0)' : 'translateX(-20px)',
                            opacity: isActive ? 1 : 0,
                            transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1) 500ms, opacity 400ms ease 500ms`,
                          }}
                        >
                          <h3 
                            className="!text-xl !font-bold !mb-1 !tracking-tight"
                            style={{ 
                              color: 'var(--color-white)',
                              transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                              opacity: isActive ? 1 : 0,
                              transition: `transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 600ms, opacity 300ms ease 600ms`,
                            }}
                          >
                            {member.name}
                          </h3>
                          <p 
                            className="!text-sm !font-semibold !uppercase !tracking-widest"
                            style={{ 
                              color: 'var(--color-highlight)',
                              transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                              opacity: isActive ? 1 : 0,
                              transition: `transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 700ms, opacity 300ms ease 700ms`,
                            }}
                          >
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent Triangle */}
                    <div 
                      className="!absolute !top-0 !left-0"
                      style={{
                        width: isActive ? '64px' : '0px',
                        height: isActive ? '64px' : '0px',
                        background: 'linear-gradient(135deg, var(--color-accent), transparent)',
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                        opacity: isActive ? 0.8 : 0,
                        transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1) 100ms`,
                      }}
                    />

                    {/* Bottom Accent Line */}
                    <div 
                      className="!absolute !bottom-0 !left-0 !right-0 !h-1"
                      style={{
                        background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight), var(--color-accent))',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'center',
                        transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms`,
                      }}
                    />

                    {/* Side Glow Effects */}
                    {isActive && (
                      <>
                        <div 
                          className="!absolute !top-1/2 !-left-2 !w-2 !h-24 !rounded-r-full"
                          style={{
                            background: 'linear-gradient(90deg, var(--color-accent), transparent)',
                            transform: 'translateY(-50%)',
                            opacity: 0.4,
                            filter: 'blur(8px)',
                            animation: 'fadeInGlow 0.6s ease 0.3s both',
                          }}
                        />
                        <div 
                          className="!absolute !top-1/2 !-right-2 !w-2 !h-24 !rounded-l-full"
                          style={{
                            background: 'linear-gradient(270deg, var(--color-accent), transparent)',
                            transform: 'translateY(-50%)',
                            opacity: 0.4,
                            filter: 'blur(8px)',
                            animation: 'fadeInGlow 0.6s ease 0.3s both',
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {isMobile && (
            <div className="text-center mt-6 sm:mt-8">
              <p
                className="text-xs sm:text-sm font-medium flex items-center justify-center gap-2"
                style={{ color: "var(--color-neutral)" }}
              >
                <span>←</span> Swipe to explore <span>→</span>
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className="flex justify-center mt-10 sm:mt-12 px-4">
            <div className="w-full max-w-md">
              <div 
                className="relative h-2 rounded-full"
                style={{
                  backgroundColor: 'var(--color-gray-200)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${((activeIndex + 1) / sortedTeamMembers.length) * 100}%`,
                    background: 'linear-gradient(90deg, var(--color-accent), var(--color-highlight))',
                    transition: 'width 0.6s ease',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Page Counter */}
          <div className="text-center mt-4 sm:mt-6">
            <span 
              className="text-base sm:text-lg font-bold"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {activeIndex + 1}
            </span>
            <span 
              className="text-xs sm:text-sm font-medium mx-2"
              style={{ color: 'var(--color-neutral)' }}
            >
              of
            </span>
            <span 
              className="text-base sm:text-lg font-bold"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {sortedTeamMembers.length}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        @keyframes fadeInGlow {
          from {
            opacity: 0;
            filter: blur(12px);
          }
          to {
            opacity: 0.4;
            filter: blur(8px);
          }
        }
      `}</style>
    </section>
  );
};

export default MeetTheTeam;