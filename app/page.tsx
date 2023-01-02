import React from "react";
import About from "../components/organisms/About";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Projects from "../components/organisms/Projects";
import Skills from "../components/organisms/Skills";

function page() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <section className="w-screen h-screen" id="Contact"></section>
    </div>
  );
}

export default page;
