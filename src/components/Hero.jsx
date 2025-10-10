// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/images/hero/holdings.png";
import Section from "./ui/Section";

const Hero = () => {
  return (
    <Section
      fullWidth
      className="!p-0 !relative !min-h-[100vh] !overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="!absolute !inset-0 !w-full !h-full !object-cover !brightness-75"
      />

      {/* Floating Orbs (decorative) */}
      <div className="!absolute !top-1/4 !left-5 sm:!left-10 !w-20 sm:!w-32 !h-20 sm:!h-32 !bg-[var(--color-primary)]/30 !rounded-full !blur-3xl animate-float"></div>
      <div className="!absolute !bottom-1/4 !right-5 sm:!right-10 !w-24 sm:!w-40 !h-24 sm:!h-40 !bg-[var(--color-accent)]/30 !rounded-full !blur-3xl animate-float-delay"></div>

      {/* Content */}
      <div className="!relative z-10 !flex !flex-col !items-center !text-center !px-4 sm:!px-6 md:!px-12">
        <h1
          className="!text-[var(--color-background)] !text-4xl sm:!text-5xl md:!text-6xl !font-extrabold !mb-6 !leading-tight"
        >
          We Bring Growth Through Creativity,
          <br className="!block" />
          Innovation & Knowledge
        </h1>

        <p
          className="!text-[rgba(255,255,255,0.8)] !text-base sm:!text-lg md:!text-xl !max-w-lg sm:!max-w-2xl !mb-8 !leading-relaxed"
        >
          We empower people and brands to grow through inspired ideas,
          cutting edge solutions, and the continuous pursuit of knowledge.
          Together, we create, innovate, and build what’s next.
        </p>

        {/* Buttons */}
        <div className="!flex !flex-col sm:!flex-row !gap-4 sm:!gap-6 !justify-center !w-full sm:!w-auto">
          {/* Primary Button */}
          <a
            href="#services"
            className="
              !relative !inline-flex !items-center !justify-center !gap-3 
              !px-6 sm:!px-8 !py-3 sm:!py-4 
              !rounded-full !font-semibold !text-white !no-underline
              !transition-all !duration-300 !ease-out !overflow-hidden
              hover:!-translate-y-0.5 hover:!scale-105 active:!scale-95
              !shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              hover:!shadow-[0_12px_40px_rgba(0,0,0,0.4)]
            "
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.target.style.setProperty("background", "rgba(255, 255, 255, 0.15)");
            }}
            onMouseLeave={(e) => {
              e.target.style.setProperty("background", "rgba(255, 255, 255, 0.1)");
            }}
          >
            Get Started
            <svg
              className="!w-4 !h-4 !transition-transform hover:!translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Secondary Button */}
          <a
            href="#projects"
            className="
              !relative !inline-flex !items-center !justify-center !gap-3
              !px-6 sm:!px-8 !py-3 sm:!py-4 
              !rounded-full !font-semibold !text-white !no-underline
              !transition-all !duration-300 !ease-out !overflow-hidden
              hover:!-translate-y-0.5 hover:!scale-105 active:!scale-95
              !shadow-[0_8px_32px_rgba(0,0,0,0.2)]
              hover:!shadow-[0_12px_40px_rgba(0,0,0,0.3)]
            "
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(247, 146, 42, 1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.setProperty("background", "rgba(0, 0, 0, 0.5)");
            }}
            onMouseLeave={(e) => {
              e.target.style.setProperty("background", "rgba(0, 0, 0, 0.2)");
            }}
          >
            Our Work
            <div className="!w-2 !h-2 !rounded-full !bg-white/60 !transition-all hover:!bg-white hover:!scale-125"></div>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
