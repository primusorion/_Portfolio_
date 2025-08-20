// src/components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import Starfield from "./Starfield";
import BackgroundImage from "../assets/cosnos.jpg"; // replace with your background
import ProfileImage from "../assets/ayano.jpeg"; // replace with your face image

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BackgroundImage}
          alt="Cosmic Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* dark overlay */}
      </div>

      {/* Starfield Overlay */}
      <Starfield />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          G. Sai Pradhun
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Future Edge AI Architect | Starry-Eyed Astronomer | Digital Dreamer <br />
          I build thinking machines by day, wander the cosmos (and code) by night. | KLU CSE’27
        </p>

        <img
          src={ProfileImage}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-6 object-cover"
        />

        <a
          href="#about"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all"
        >
          Explore My Work
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
