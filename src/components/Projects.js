// src/components/Projects.js
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

// Example projects – replace with your own
const projects = [
  {
    title: "AI Space Explorer",
    description: "Edge AI project simulating cosmic exploration.",
    image: "/assets/project1.png",
    tech: ["Python", "TensorFlow", "Docker"],
    link: "#",
  },
  {
    title: "Stellar Dashboard",
    description: "Interactive dashboard visualizing star data.",
    image: "/assets/project2.png",
    tech: ["React", "D3.js", "Tailwind"],
    link: "#",
  },
  {
    title: "Cosmic Chatbot",
    description: "AI-driven chatbot for astronomy enthusiasts.",
    image: "/assets/project3.png",
    tech: ["Node.js", "GPT", "Cloud"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="container mx-auto px-4 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
