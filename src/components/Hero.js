// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import Starfield from "./Starfield";
import resume from "../data/resume.json";
import downloadResume from "../utils/downloadResume";
import BackgroundImage from "../assets/cosnos.jpg";
import ProfileImage from "../assets/ayano.jpeg";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={BackgroundImage} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Starfield />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          {resume.name}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          {resume.title}
        </p>

        <p className="text-sm md:text-base text-gray-400 mb-6">{resume.tagline}</p>

        <img src={ProfileImage} alt="Profile" className="w-28 h-28 rounded-full border-4 border-white mx-auto mb-6 object-cover" />

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              // Resolve resume path safely:
              const path = resume.resumeFile || 'Sai-Pradhun-Gudipudi_.pdf';
              const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
              let url = path;
              if (/^https?:\/\//i.test(path)) {
                url = path;
              } else if (path.startsWith('/')) {
                // absolute path from site root
                url = path;
              } else {
                // relative to PUBLIC_URL (handles hosting under subpath)
                url = (base ? `${base}/${path}` : `/${path}`).replace(/\\/g, '/');
              }
              downloadResume(url, 'Sai-Pradhun-Gudipudi_.pdf');
            }}
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            Download Resume
          </button>

          <a href="#about" className="inline-block px-6 py-3 border border-white/10 rounded-lg text-white">About</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
