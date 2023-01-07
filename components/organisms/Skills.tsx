"use client";
import React, { useEffect } from "react";
import Skill from "../molecules/Skill";
import SkillContainer from "../molecules/SkillContainer";
import { FrontendSkills, BackendSkills } from "../../utils/Skills";
import SkillsAnimation from "../../utils/SkillsAnimation";
function Skills() {
  useEffect(() => {
    SkillsAnimation(FrontendSkills, BackendSkills);
  }, []);
  return (
    <section
      id="wrapper"
      className="relative w-10/12 pb-2 bg-white shadow-2xl dark:bg-[#313E47] -top-32 rounded-2xl"
    >
      <h1 className="text-center p-0 underline text-blue text-4xl font-bold mt-4 mb-8">
        Technologies that I use
      </h1>
      <div className="flex">
        <SkillContainer title="Frontend">
          <p className="pb-4 dark:text-white">
            (This is the part I enjoy the most)
          </p>
          <div className="flex flex-wrap justify-around w-8/12">
            {FrontendSkills.map((s, key) => {
              return (
                <Skill id={`skill${key}`} key={key} name={s.name} src={s.src} />
              );
            })}
          </div>
        </SkillContainer>
        <SkillContainer title="Backend">
          <div className="pt-10 flex flex-wrap justify-around w-8/12">
            {BackendSkills.map((s, key) => {
              return (
                <Skill id={`skill${key}`} key={key} name={s.name} src={s.src} />
              );
            })}
          </div>
        </SkillContainer>
      </div>
    </section>
  );
}

export default Skills;
