'use client'
import React, { useEffect, useState } from 'react'
import Skill from '../molecules/Skill'
import SkillContainer from '../molecules/SkillContainer'
import { FrontendSkills, BackendSkills } from '../../utils/Skills'
import SkillsAnimation from '../../utils/SkillsAnimation'
function Skills() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
    if (width < 500) {
      SkillsAnimation(FrontendSkills, BackendSkills)
    }
  }, [])
  return (
    <section
      id="wrapper"
      className="relative w-11/12 pb-2 bg-white shadow-2xl dark:bg-[#313E47] -top-32 rounded-2xl"
    >
      <h1 className="text-center p-0 text-3xl text-blue shadow-blue drop-shadow-2xl sm:text-5xl font-bold mt-4 mb-8 xl:text-5xl 2xl:text-7xl">
        Technologies that I use
      </h1>
      <div className="block sm:flex">
        <SkillContainer title="Frontend">
          <p className="pb-4 dark:text-white">
            (This is the part I enjoy the most)
          </p>
          <div className="flex flex-wrap justify-around w-8/12">
            {FrontendSkills.map((s, key) => {
              return (
                <Skill
                  width={width}
                  id={`skill${key}`}
                  key={key}
                  name={s.name}
                  src={s.src}
                />
              )
            })}
          </div>
        </SkillContainer>
        <SkillContainer title="Backend">
          <div className="pt-10 flex flex-wrap justify-around w-8/12">
            {BackendSkills.map((s, key) => {
              return (
                <Skill
                  width={width}
                  id={`skill${key}`}
                  key={key}
                  name={s.name}
                  src={s.src}
                />
              )
            })}
          </div>
        </SkillContainer>
      </div>
    </section>
  )
}

export default Skills
