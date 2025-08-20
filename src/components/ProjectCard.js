// src/components/ProjectCard.js
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((t, index) => (
            <span
              key={index}
              className="text-sm bg-purple-600 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
