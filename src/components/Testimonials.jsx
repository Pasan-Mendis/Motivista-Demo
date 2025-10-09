// src/components/Testimonials.jsx
import React from "react";
import testimonials from "../services/testimonialData";
import Section from "./ui/Section";
import { FaQuoteLeft, FaStar, FaHeart } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Section className="py-24 md:py-32 bg-gradient-to-br from-[var(--color-background)] via-white to-[var(--color-background)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 md:left-10 w-16 md:w-20 h-16 md:h-20 bg-[var(--color-primary)]/15 rounded-3xl rotate-45 animate-float"></div>
        <div className="absolute top-40 right-5 md:right-20 w-12 md:w-16 h-12 md:h-16 bg-[var(--color-accent)]/20 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-32 left-1/4 w-10 md:w-12 h-10 md:h-12 bg-[var(--color-secondary)]/18 rounded-2xl rotate-12 animate-bounce"></div>

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
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-white/70 backdrop-blur-sm border border-[var(--color-gray-200)] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 shadow-sm">
            <FaHeart className="text-[var(--color-accent)] animate-pulse text-base md:text-lg" />
            <span className="text-[var(--color-neutral)] font-semibold uppercase tracking-wider text-xs md:text-sm">
              Client Love
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-heading)] mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--color-neutral)] max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Real stories from real people who trusted us with their vision
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Happy Clients", gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]" },
              { value: "4.9★", label: "Average Rating", gradient: "from-[var(--color-accent)] to-[var(--color-primary)]" },
              { value: "100%", label: "Satisfaction", gradient: "from-[var(--color-secondary)] to-[var(--color-accent)]" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[var(--color-gray-200)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
                <div className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-[var(--color-neutral)] uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-max mb-16 md:mb-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group transform transition-all duration-700 hover:scale-105 ${index % 3 === 0 ? "lg:mt-0" : index % 3 === 1 ? "lg:mt-4 md:mt-8" : "lg:mt-8 md:mt-12"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-highlight)]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

                <div className="relative bg-white/90 backdrop-blur-sm border border-[var(--color-gray-200)] rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:border-[var(--color-accent)]/30">
                  <div className="absolute -top-3 -left-3 w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-md">
                    <FaQuoteLeft className="text-white text-base md:text-lg" />
                  </div>

                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar key={starIndex} className="text-[var(--color-accent)] text-base md:text-lg animate-pulse" style={{ animationDelay: `${starIndex * 0.1}s` }} />
                    ))}
                  </div>

                  <blockquote className="text-[var(--color-primary)]/85 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-8 italic font-light">
                    "{testimonial.feedback}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name || "Client"}
                        className="w-10 h-10 md:w-14 md:h-14 rounded-2xl object-cover border-2 border-[var(--color-gray-200)] shadow-sm"
                      />
                    ) : (
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center border-2 border-[var(--color-gray-200)] shadow-sm">
                        <span className="text-white font-bold text-sm md:text-lg">{testimonial.name?.charAt(0) || "A"}</span>
                      </div>
                    )}

                    <div>
                      <div className="font-semibold text-[var(--color-primary)] text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-[var(--color-neutral)] text-xs md:text-sm font-medium">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured testimonial */}
        {testimonials.length > 0 && (
          <div className="relative mb-16 md:mb-24">
            <div className="relative rounded-2xl p-8 md:p-16 text-center overflow-hidden shadow-[var(--shadow-card-hover)]"
              style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 md:top-8 left-4 md:left-8 w-20 md:w-32 h-20 md:h-32 bg-[var(--color-accent)] rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-16 md:w-24 h-16 md:h-24 bg-[var(--color-highlight)] rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 max-w-xl md:max-w-4xl mx-auto">
                <FaQuoteLeft className="text-3xl md:text-5xl text-white/30 mx-auto mb-4 md:mb-8" />

                <blockquote className="text-lg md:text-2xl lg:text-3xl text-white leading-relaxed font-light italic mb-4 md:mb-8">
                  "{testimonials[0]?.feedback || 'Amazing work! Highly recommended.'}"
                </blockquote>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
                  {testimonials[0]?.image ? (
                    <img
                      src={testimonials[0].image}
                      alt={testimonials[0].name || "Client"}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-white/30 shadow-lg"
                    />
                  ) : (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--color-accent)]/80 to-[var(--color-highlight)]/80 rounded-2xl flex items-center justify-center border-2 border-white/30 shadow-lg">
                      <span className="text-white font-bold text-lg">{testimonials[0]?.name?.charAt(0) || "A"}</span>
                    </div>
                  )}

                  <div className="text-center sm:text-left mt-2 sm:mt-0">
                    <div className="text-white font-semibold text-sm md:text-lg">{testimonials[0]?.name || "Anonymous"}</div>
                    <div className="text-white/80 text-xs md:text-base">{testimonials[0]?.position || "Valued Client"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </Section>
  );
};

export default Testimonials;
