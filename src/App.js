import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      {/* Skills, Contact sections go here next */}
    </div>
  );
}

export default App;
