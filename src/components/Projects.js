// src/components/Projects.js
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import resume from "../data/resume.json";

const Projects = () => {
  const projects = resume.projects || [];

  return (
    <section id="projects" className="relative py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4">
        {projects.length === 0 ? (
          <div className="p-8 bg-gray-900/40 rounded-lg text-center">
            <p className="text-gray-300 mb-4">No projects listed yet. If you'd like, I can extract your real project entries from your PDF and populate them here with descriptions and images.</p>
            <p className="text-sm text-gray-400">To link the resume for download, put <code className="text-xs">Sai-Pradhun-Gudipudi_.pdf</code> in the <code className="text-xs">public/</code> folder and the Download Resume button will work.</p>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
