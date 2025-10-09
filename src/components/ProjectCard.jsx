// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const truncateText = (text, limit = 150) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <motion.div
      className="!relative !rounded-3xl !overflow-hidden !cursor-pointer !transition-all !duration-700 hover:!scale-[1.03] hover:!shadow-2xl !bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-highlight-dark)] border border-[var(--color-accent)]/30 backdrop-blur-xl"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* === Image === */}
      <div className="!relative !overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="!w-full !h-64 !object-cover !transition-transform !duration-[1.2s] hover:!scale-110"
        />

        {/* Hover Overlay */}
        <div
          className="!absolute !inset-0 !flex !flex-col !justify-end !p-6 !bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 !transition-opacity !duration-500"
          style={{ willChange: "opacity" }}
        >
          <h3 className="!text-2xl !font-bold !text-white !mb-2 !leading-tight drop-shadow-lg">
            {project.title}
          </h3>
          <p className="!text-gray-200 !text-sm !mb-4 !leading-relaxed">
            {truncateText(project.description)}
          </p>

          {/* Buttons */}
          <div className="!flex !gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="!flex !items-center !gap-2 !px-4 !py-2 !rounded-full !bg-white/10 hover:!bg-[var(--color-accent)] !backdrop-blur-lg !border !border-white/30 hover:!border-[var(--color-accent)] !transition-all !duration-300 hover:!scale-105"
              >
                <FaGithub className="!text-lg !text-white" />
                <span className="!text-white !text-sm !font-semibold">
                  Code
                </span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="!flex !items-center !gap-2 !px-4 !py-2 !rounded-full !bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] hover:!opacity-90 !transition-all !duration-300 hover:!scale-105"
              >
                <FaExternalLinkAlt className="!text-lg !text-white" />
                <span className="!text-white !text-sm !font-semibold">
                  Live
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* === Static Info (Always visible) === */}
      <div className="!p-6 !bg-gradient-to-t from-black/10 to-transparent">
        <h4
          className="!text-xl !font-extrabold !text-[var(--color-highlight)] !mb-2 !leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h4>
        <p className="!text-sm !text-[var(--color-white)]/80">
          {truncateText(project.shortDescription || project.description, 100)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
