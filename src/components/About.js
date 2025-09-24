// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import Starfield from "./Starfield";
import resume from "../data/resume.json";
import AboutBg from "../assets/cosnos.jpg";

const About = () => {
  return (
    <section id="about" className="relative pt-40 md:pt-56 lg:pt-72 pb-20 text-white">
      <div className="absolute inset-0">
        <img src={AboutBg} alt="About background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Starfield />

  <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-gray-300 text-center max-w-3xl mx-auto mb-8"
        >
          {resume.tagline}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-xl mb-4">Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resume.experience.map((exp, i) => (
                <article key={i} className="relative bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm border border-white/5 p-4 pt-8 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="absolute right-3 top-3 bg-black/50 border border-white/8 px-2 py-0.5 rounded text-[11px] text-gray-200 whitespace-nowrap">{exp.dates}</div>
                  <div className="mb-2">
                    <div className="font-semibold text-lg">{exp.role}</div>
                    <div className="text-sm text-gray-400">{exp.company}</div>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 z-20 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm border border-white/5 p-4 rounded-xl max-h-[64vh] overflow-auto">
              <h3 className="font-semibold text-lg mb-2">Skills & Education</h3>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Education</div>
                {resume.education.map((ed, i) => (
                  <div key={i} className="mb-2">
                    <div className="font-medium text-base">{ed.degree}</div>
                    <div className="text-sm text-gray-400">{ed.institution} • <span className="text-xs">{ed.year}</span></div>
                  </div>
                ))}
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-3">Skills</div>
                <div className="flex flex-wrap gap-3">
                  {resume.skills.map((s, i) => (
                    <span key={i} className="inline-flex items-center justify-center px-3 py-1 bg-purple-600/95 rounded-full text-sm max-w-[9rem] min-w-0 text-center whitespace-normal">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
