// src/components/TeamCard.jsx
import React from "react";
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ member }) => {
  return (
    <div className="group !relative !h-full !overflow-hidden">
      {/* Profile Image Container */}
      <div className="!relative !h-full !min-h-[420px]">
        <img
          src={member.photo}
          alt={member.name}
          className="!w-full !h-full !object-cover !transition-transform !duration-500 group-hover:!scale-110"
          style={{
            objectPosition: "center",
            willChange: "transform",
          }}
        />

        {/* Social Media Overlay */}
        <div
          className="!absolute !inset-0 !flex !items-center !justify-center !gap-5 !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 9, 3, 0.3) 0%, rgba(10, 9, 3, 0.8) 100%)",
            willChange: "opacity",
          }}
        >
          {/* LinkedIn */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="!transform !scale-0 group-hover:!scale-100 !transition-all !duration-500 !delay-100"
              style={{ transitionDelay: "0.1s" }}
            >
              <div
                className="!w-12 !h-12 !flex !items-center !justify-center !rounded-full !transition-all !duration-200"
                style={{
                  backgroundColor: "var(--color-white)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  willChange: "transform, background-color",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaLinkedin
                  className="!text-2xl !transition-colors !duration-300"
                  style={{ color: "var(--color-primary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-white)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary)")
                  }
                />
              </div>
            </a>
          )}

          {/* Facebook */}
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="!transform !scale-0 group-hover:!scale-100 !transition-all !duration-500 !delay-200"
              style={{ transitionDelay: "0.2s" }}
            >
              <div
                className="!w-12 !h-12 !flex !items-center !justify-center !rounded-full !transition-all !duration-300"
                style={{
                  backgroundColor: "var(--color-white)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaFacebook
                  className="!text-2xl !transition-colors !duration-300"
                  style={{ color: "var(--color-primary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-white)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary)")
                  }
                />
              </div>
            </a>
          )}

          {/* Email */}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="!transform !scale-0 group-hover:!scale-100 !transition-all !duration-500 !delay-300"
              style={{ transitionDelay: "0.3s" }}
            >
              <div
                className="!w-12 !h-12 !flex !items-center !justify-center !rounded-full !transition-all !duration-300"
                style={{
                  backgroundColor: "var(--color-white)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <FaEnvelope
                  className="!text-2xl !transition-colors !duration-300"
                  style={{ color: "var(--color-primary)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-white)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary)")
                  }
                />
              </div>
            </a>
          )}
        </div>

        {/* Subtle Gradient Overlay (Always visible) */}
        <div
          className="!absolute !bottom-0 !left-0 !right-0 !h-32 !pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(10, 9, 3, 0.3) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default TeamCard;
