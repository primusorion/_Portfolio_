// src/components/Starfield.js
import React from "react";
import Particles from "react-tsparticles";

const Starfield = () => {
  return (
    <Particles
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } },
        },
        particles: {
          number: { value: 150, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 1.5, random: true },
          move: { enable: true, speed: 0.2, direction: "none", outModes: "bounce" },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default Starfield;
