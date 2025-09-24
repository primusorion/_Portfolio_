import React from "react";
import { motion } from "framer-motion";
import resume from "../data/resume.json";

const Contact = () => {
  // (download removed) only email CTA remains

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Get in touch
        </motion.h2>

        <p className="text-gray-300 mb-8">I'm open to collaborations, freelance work, or interesting conversations about AI and space.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`mailto:${resume.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium">Email Me</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
