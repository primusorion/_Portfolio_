// src/components/ProjectCard.js
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech, link }) => {
  return (
    <motion.article whileHover={{ y: -6 }} className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-900/60 to-gray-900/40 border border-white/5">
      {image && <img src={image} alt={title} className="w-full h-44 object-cover" />}

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech && tech.map((t, i) => (
            <span key={i} className="text-xs bg-purple-600/80 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-300 hover:underline">View Project</a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
