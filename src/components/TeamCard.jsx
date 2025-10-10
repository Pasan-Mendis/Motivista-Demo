import React from "react";
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ member }) => {
  return (
    <div className="group !relative !overflow-hidden !w-full">
      {/* Profile Image Container with fixed aspect ratio */}
      <div
        className="!relative !w-full aspect-[2.5/5] !overflow-hidden !rounded-2xl"
        style={{
          minHeight: "360px",
          backgroundColor: "var(--color-gray-100)",
        }}
      >
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
          
        </div>

        {/* Subtle Gradient Overlay */}
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
