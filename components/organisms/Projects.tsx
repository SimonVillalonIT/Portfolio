import React from 'react'
import MonitorSvg from '../atoms/MonitorSvg'
import Carrousel from '../molecules/Carrousel'
import { projects } from '../../utils/Projects'

function Projects() {
  return (
    <section className="relative w-screen flex flex-col items-center ">
      <h1 className="text-4xl font-bold dark:text-white">My Projects</h1>
      <p className="mb-4 text-blue text-xl text-center">
        These are the projects I have developed
      </p>
      <MonitorSvg className="hidden sm:flex" />
      <div className="sm:bottom-0 sm:-top-6 sm:flex sm:absolute sm:justify-center sm:flex-shrink-0">
        <Carrousel className={''} data={projects} />
      </div>
    </section>
  )
}

export default Projects
