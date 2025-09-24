import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-white">G. Sai Pradhun</a>

          <nav>
            <ul className="hidden md:flex gap-6 text-sm text-gray-200">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
