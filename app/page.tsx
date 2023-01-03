import React from "react";
import About from "../components/organisms/About";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Projects from "../components/organisms/Projects";
import Skills from "../components/organisms/Skills";
import Footer from "../components/organisms/Footer";
import Buttons from "../components/molecules/Buttons";

function page() {
  return (
    <div className="flex flex-col items-center">
      <Navbar><Buttons /></Navbar>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default page;
