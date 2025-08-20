// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import AboutBg from "../assets/cosnos.jpg"; // replace with your About background
import Starfield from "./Starfield"; // reuse the same star overlay

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 -mt-20 text-white flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={AboutBg}
          alt="About Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* dark overlay */}
        {/* Top gradient for smooth overlap */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Starfield overlay */}
      <Starfield />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          I’m a Future Edge AI Architect and a Starry-Eyed Astronomer. I build thinking machines by day and wander the cosmos (and code) by night.  
          I’m passionate about exploring the intersection of AI, space, and creativity, and I strive to build projects that reflect curiosity and innovation.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-4 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all">
            <h3 className="font-semibold text-lg mb-1">Python</h3>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all">
            <h3 className="font-semibold text-lg mb-1">AI/ML</h3>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all">
            <h3 className="font-semibold text-lg mb-1">React</h3>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all">
            <h3 className="font-semibold text-lg mb-1">Cloud</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
