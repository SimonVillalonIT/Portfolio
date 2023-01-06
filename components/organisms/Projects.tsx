import React from "react";
import MonitorSvg from "../atoms/MonitorSvg";
import Carrousel from "../molecules/Carrousel";

function Projects() {
  const projects = [
    {
      title: "Purple Library",
      image: "/Purple.png",
      description: "This is a project made for the schoolsaada ",
      link: "https://purplelibrary.000webhostapp.com/Purple/",
      github: "https://github.com/SimonVillalonIT/Purple-Library",
    },
    {
      title: "Random Quote Machine",
      image: "/RandomQuoteMachine.png",
      description: "https://github.com/SimonVillalonIT/Random-quote-machine",
      link: "https://simonvillalonit.github.io/Random-quote-machine/",
      github: "https://github.com/SimonVillalonIT/Random-quote-machine",
    },
  ];

  return (
    <section className="relative w-screen flex flex-col items-center ">
      <h1 className="text-4xl font-bold dark:text-white">My Projects</h1>
      <p className="mb-4 text-blue text-xl">
        These are the projects I have developed
      </p>
      <MonitorSvg className="" />
      <div className="bottom-0 -top-6 flex absolute justify-center flex-shrink-0">
        <Carrousel className={""} data={projects} />
      </div>
    </section>
  );
}

export default Projects;
