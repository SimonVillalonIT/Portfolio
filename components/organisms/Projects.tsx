import React from "react";
import Project from "../molecules/Project";

function Projects() {
  return (
    <section className="w-screen h-screen flex flex-col items-center ">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="mb-12 text-blue text-xl">
        These are the projects I have developed
      </p>
      <div className="flex flex-wrap">
        <Project
          image="/Purple.png"
          title="Purple Library"
          github={"https://github.com/SimonVillalonIT/Purple-Library"}
          description={"This is a project made for the schoolsaada "}
          link="https://purplelibrary.000webhostapp.com/Purple/"
        />
        <Project
          image="/RandomQuoteMachine.png"
          title="Random Quote Machine"
          github={"https://github.com/SimonVillalonIT/Random-quote-machine"}
          description={""}
          link="https://simonvillalonit.github.io/Random-quote-machine/"
        />
      </div>
    </section>
  );
}

export default Projects;
