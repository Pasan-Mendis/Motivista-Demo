import React, { useState } from "react";
import { CheckCircle, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: CheckCircle,
      title: "Holistic Development, Real Results:",
      description: "We integrate professional growth with Mental Health & Wellbeing support.",
      color: "var(--color-accent)",
    },
    {
      icon: Users,
      title: "Tailored Expertise for Every Audience:",
      description: "Programs customized to meet you where you are.",
      color: "var(--color-highlight)",
    },
    {
      icon: TrendingUp,
      title: "Future-Proofing Your Potential:",
      description: "Cultivating confident, future-ready leaders with mastery of Digital Fluency and AI tools.",
      color: "var(--color-accent)",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Right Gradient Blob */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
          }}
        />
        
        {/* Bottom Left Gradient Blob */}
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-highlight), transparent 70%)",
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 right-1/4 w-32 h-32 opacity-5 animate-float"
          style={{
            background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-24 h-24 opacity-5 animate-float-delay"
          style={{
            background: "linear-gradient(135deg, var(--color-highlight), var(--color-accent))",
            borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
          }}
        />

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, var(--color-white) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Side - Heading & Intro */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                backgroundColor: "rgba(255, 115, 21, 0.1)",
                borderColor: "var(--color-accent)",
              }}
            >
              <Sparkles size={16} style={{ color: "var(--color-accent)" }} />
              <span 
                className="text-xs sm:text-sm font-semibold tracking-wider uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Your Success Partner
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8"
              style={{
                color: "var(--color-white)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Why Choose{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Motivista Academy?
              </span>
            </h2>

            {/* Lead Paragraph */}
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: "var(--color-gray-300)" }}
            >
              We are your reliable partner, delivering personalized development
              that empowers every individual and measurably transforms business performance.
            </p>

            {/* Stats/Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Students Trained" },
                { value: "98%", label: "Success Rate" },
                { value: "50+", label: "Expert Mentors" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2"
                    style={{
                      background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "var(--color-gray-400)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image with overlay */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
              }}
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 115, 21, 0.2), rgba(247, 146, 42, 0.2))",
                }}
              />

              {/* Floating Badge on Image */}
              <div
                className="absolute bottom-6 left-6 px-6 py-4 rounded-2xl backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
                    }}
                  >
                    <Zap size={24} style={{ color: "var(--color-white)" }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "var(--color-white)" }}>
                      Transform Today
                    </div>
                    <div className="text-xs" style={{ color: "var(--color-gray-300)" }}>
                      Start Your Journey
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent element */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl -z-10"
              style={{
                background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
                opacity: 0.3,
              }}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Feature Card */}
                <div
                  className="relative h-full rounded-3xl border transition-all duration-500 overflow-hidden"
                  style={{
                    backgroundColor: isHovered 
                      ? "rgba(255, 255, 255, 0.05)" 
                      : "transparent",
                    borderColor: isHovered 
                      ? feature.color 
                      : "var(--color-gray-700)",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  }}
                >
                  {/* Gradient background on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}10, ${feature.color}05)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  <div className="relative p-8 sm:p-10">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: isHovered 
                          ? `linear-gradient(135deg, ${feature.color}, var(--color-highlight))` 
                          : `${feature.color}20`,
                      }}
                    >
                      <Icon
                        size={28}
                        style={{
                          color: isHovered ? "var(--color-white)" : feature.color,
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-4"
                      style={{
                        color: isHovered ? feature.color : "var(--color-white)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: "var(--color-gray-300)" }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${feature.color}, var(--color-highlight))`,
                      transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-highlight))",
              color: "var(--color-white)",
              boxShadow: "0 10px 40px rgba(255, 115, 21, 0.3)",
            }}
          >
            Start Your Transformation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;