// src/components/Testimonials.jsx
import React from "react";
import testimonials from "../services/testimonialData";
import Section from "./ui/Section";
import { FaQuoteLeft, FaStar, FaHeart } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Section className="py-32 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-background)] relative overflow-hidden">
      {/* Background elements - redesigned but kept */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes - simpler design */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-primary)]/15 rounded-3xl rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[var(--color-accent)]/20 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[var(--color-secondary)]/18 rounded-2xl rotate-12 animate-bounce"></div>

        {/* Pattern overlay - cleaner approach */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-primary) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Header Section - redesigned */}
        <div className="text-center mb-20">
          {/* Badge - cleaner design */}
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-[var(--color-gray-200)] rounded-full px-6 py-3 mb-8 shadow-sm">
            <FaHeart className="text-[var(--color-accent)] animate-pulse text-lg" />
            <span className="text-[var(--color-neutral)] font-semibold uppercase tracking-wider text-sm">
              Client Love
            </span>
          </div>

          {/* Title - more readable gradient */}
          <h2 className="text-5xl md:text-6xl font-[var(--font-heading)] mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <p className="text-xl text-[var(--color-neutral)] max-w-2xl mx-auto mb-12 leading-relaxed">
            Real stories from real people who trusted us with their vision
          </p>

          {/* Stats row - redesigned with cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-gray-200)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-[var(--color-neutral)] uppercase tracking-wide font-medium">
                Happy Clients
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-gray-200)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <div className="text-sm text-[var(--color-neutral)] uppercase tracking-wide font-medium">
                Average Rating
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-gray-200)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-[var(--color-neutral)] uppercase tracking-wide font-medium">
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - kept staggered layout but cleaner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max mb-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group transform transition-all duration-700 hover:scale-105 ${
                index % 3 === 0
                  ? "lg:mt-0"
                  : index % 3 === 1
                  ? "lg:mt-8"
                  : "lg:mt-16"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Testimonial card - redesigned but kept all elements */}
              <div className="relative">
                {/* Glow effect - subtler */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-highlight)]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

                {/* Main card - cleaner design */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-[var(--color-gray-200)] rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:border-[var(--color-accent)]/30">
                  
                  {/* Quote icon - redesigned */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-md">
                    <FaQuoteLeft className="text-white text-lg" />
                  </div>

                  {/* Star rating - kept animation */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className="text-[var(--color-accent)] text-lg animate-pulse"
                        style={{ animationDelay: `${starIndex * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial text - improved typography */}
                  <blockquote className="text-[var(--color-primary)]/85 text-lg leading-relaxed mb-8 italic font-light">
                    "{testimonial.feedback}"
                  </blockquote>

                  {/* Client info - cleaner layout */}
                  <div className="flex items-center gap-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name || "Client"}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-[var(--color-gray-200)] shadow-sm"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center border-2 border-[var(--color-gray-200)] shadow-sm">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name?.charAt(0) || "A"}
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="font-semibold text-[var(--color-primary)] text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-[var(--color-neutral)] text-sm font-medium">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured testimonial spotlight - kept but redesigned */}
        {testimonials.length > 0 && (
          <div className="relative">
            <div
              className="
                relative 
                rounded-[var(--radius-card)] 
                p-12 md:p-16 
                text-center 
                overflow-hidden
                shadow-[var(--shadow-card-hover)]
              "
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
              }}
            >
              {/* Background pattern - simpler */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-32 h-32 bg-[var(--color-accent)] rounded-full blur-3xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-[var(--color-highlight)] rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto">
                {/* Quote icon */}
                <FaQuoteLeft className="text-5xl text-white/30 mx-auto mb-8" />

                {/* Quote text */}
                <blockquote className="text-2xl md:text-3xl text-white leading-relaxed font-light italic mb-8">
                  "{testimonials[0]?.feedback || "Amazing work! Highly recommended."}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center justify-center gap-4">
                  {testimonials[0]?.image ? (
                    <img
                      src={testimonials[0].image}
                      alt={testimonials[0].name || "Client"}
                      className="w-16 h-16 rounded-2xl object-cover border-3 border-white/30 shadow-lg"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)]/80 to-[var(--color-highlight)]/80 rounded-2xl flex items-center justify-center border-3 border-white/30 shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {testimonials[0]?.name?.charAt(0) || "A"}
                      </span>
                    </div>
                  )}

                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {testimonials[0]?.name || "Anonymous"}
                    </div>
                    <div className="text-white/80 text-base">
                      {testimonials[0]?.position || "Valued Client"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom animations - using your existing ones */}
      <style jsx>{`
        /* Using your existing float animations from index.css */
      `}</style>
    </Section>
  );
};

export default Testimonials;