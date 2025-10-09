// src/components/MeetTheTeam.jsx
import React, { useState } from "react";
import teamMembers from "../services/teamData";
import TeamCard from "./TeamCard";
import Section from "./ui/Section";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Award, Coffee } from "lucide-react";

const MeetTheTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // show 4 at a time

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < teamMembers.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleMembers = teamMembers.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <Section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle geometric decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elegant line patterns using theme colors */}
        <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-[var(--color-neutral)]/30 to-transparent"></div>
        <div className="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent -rotate-12"></div>
        
        {/* Subtle dots pattern with theme colors */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[var(--color-primary)]/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[var(--color-secondary)]/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-[var(--color-accent)]/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Large subtle circles with theme colors */}
        <div className="absolute -top-40 -right-40 w-96 h-96 border border-[var(--color-neutral)]/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 border border-[var(--color-primary)]/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge with theme colors */}
          <div className="inline-flex items-center gap-3 bg-[var(--color-background)] border border-[var(--color-neutral)]/30 rounded-full px-6 py-3 mb-8">
            <Users className="text-[var(--color-primary)] w-5 h-5" />
            <span className="text-[var(--color-neutral)] font-semibold uppercase tracking-wider text-sm">Our Team</span>
          </div>
          
          {/* Main heading with theme gradient */}
          <h2 className="text-5xl md:text-6xl font-[var(--font-heading)] font-black text-[var(--color-dark)] mb-6 leading-tight">
            Meet The 
            <span 
              className="ml-4 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent"
            >
              Dream Team
            </span>
          </h2>
          
          <p className="text-xl text-[var(--color-neutral)] max-w-3xl mx-auto leading-relaxed mb-12">
            The creative minds and passionate individuals behind every successful project
          </p>

          {/* Team stats with theme colors */}
          <div className="flex justify-center gap-16 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/20 rounded-2xl mb-3 mx-auto">
                <Users className="text-[var(--color-primary)] w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-[var(--color-dark)]">{teamMembers.length}+</div>
              <div className="text-sm text-[var(--color-neutral)] uppercase tracking-wide">Team Members</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-secondary)]/20 rounded-2xl mb-3 mx-auto">
                <Award className="text-[var(--color-secondary)] w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-[var(--color-dark)]">50+</div>
              <div className="text-sm text-[var(--color-neutral)] uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent)]/20 rounded-2xl mb-3 mx-auto">
                <Coffee className="text-[var(--color-accent)] w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-[var(--color-dark)]">1000+</div>
              <div className="text-sm text-[var(--color-neutral)] uppercase tracking-wide">Cups of Coffee</div>
            </div>
          </div>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Progress indicator with theme gradient */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(teamMembers.length / itemsPerPage) }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] w-8'
                      : 'bg-[var(--color-neutral)]/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Left Arrow with theme colors */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`group flex items-center justify-center w-14 h-14 bg-white border-2 border-[var(--color-neutral)]/30 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 ${
                currentIndex === 0 
                  ? "opacity-30 cursor-not-allowed" 
                  : "hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5"
              }`}
            >
              <ChevronLeft 
                size={24} 
                className={`transition-colors duration-300 ${
                  currentIndex === 0 ? "text-[var(--color-neutral)]/50" : "text-[var(--color-neutral)] group-hover:text-[var(--color-primary)]"
                }`} 
              />
            </button>

            {/* Team Cards Container */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <AnimatePresence mode="wait">
                  {visibleMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 60, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -60, scale: 0.9 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      className="group"
                    >
                      <div className="relative">
                        {/* Hover glow effect with theme gradient */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-secondary)]/20 to-[var(--color-accent)]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                        <TeamCard member={member} />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Arrow with theme colors */}
            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= teamMembers.length}
              className={`group flex items-center justify-center w-14 h-14 bg-white border-2 border-[var(--color-neutral)]/30 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 ${
                currentIndex + itemsPerPage >= teamMembers.length
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/5"
              }`}
            >
              <ChevronRight 
                size={24} 
                className={`transition-colors duration-300 ${
                  currentIndex + itemsPerPage >= teamMembers.length 
                    ? "text-[var(--color-neutral)]/50" 
                    : "text-[var(--color-neutral)] group-hover:text-[var(--color-primary)]"
                }`} 
              />
            </button>
          </div>

          {/* Team navigation dots with theme gradient */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: Math.ceil(teamMembers.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] scale-125'
                    : 'bg-[var(--color-neutral)]/40 hover:bg-[var(--color-neutral)]/60'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations - keeping your existing keyframes */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </Section>
  );
};

export default MeetTheTeam;