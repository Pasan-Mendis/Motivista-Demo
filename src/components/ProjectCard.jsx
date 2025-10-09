//src/components/ProjectCard.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-t-2xl"
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex flex-col justify-end p-4 transition duration-300">
        <h3 className="text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
          {project.title}
        </h3>
        <p className="text-gray-200 mt-1 text-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
