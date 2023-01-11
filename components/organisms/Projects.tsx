import React from 'react'
import MonitorSvg from '../atoms/MonitorSvg'
import Carrousel from '../molecules/Carrousel'
import { projects } from '../../utils/Projects'

function Projects() {
  return (
    <section className="relative w-screen flex flex-col items-center xl:mb-24 2xl:mb-32">
      <h1 className="text-4xl font-bold dark:text-white xl:text-5xl 2xl:text-7xl">
        My Projects
      </h1>
      <p className="mb-4 text-blue text-xl text-center xl:text-3xl xl:mt-4 xl:mb-24 2xl:text-4xl 2xl:mt-8 2xl:mb-16">
        These are the projects I have developed
      </p>
      <MonitorSvg className="hidden sm:flex xl:scale-125 2xl:scale-150" />
      <div className="sm:bottom-0 sm:-top-6 sm:flex sm:absolute sm:justify-center sm:flex-shrink-0 xl:mt-12 2xl:mt-8">
        <Carrousel className={''} data={projects} />
      </div>
    </section>
  )
}

export default Projects
