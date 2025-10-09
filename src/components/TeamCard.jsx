// src/components/TeamCard.jsx
import React from "react";
import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ member }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-96 object-cover" // increased height
        />

        {/* Social Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
            >
              <FaLinkedin className="text-white text-3xl hover:text-blue-500" />
            </a>
          )}
          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-100"
            >
              <FaFacebook className="text-white text-3xl hover:text-blue-400" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200"
            >
              <FaEnvelope className="text-white text-3xl hover:text-gray-300" />
            </a>
          )}
        </div>

        {/* Name & Role Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
          <h3 className="text-lg font-bold text-white">{member.name}</h3>
          <p className="text-sm text-gray-200">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
