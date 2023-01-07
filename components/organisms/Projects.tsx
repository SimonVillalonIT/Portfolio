import React from 'react'
import MonitorSvg from '../atoms/MonitorSvg'
import Carrousel from '../molecules/Carrousel'
import { projects } from '../../utils/Projects'

function Projects() {
  return (
    <section className="relative w-screen flex flex-col items-center ">
      <h1 className="text-4xl font-bold dark:text-white">My Projects</h1>
      <p className="mb-4 text-blue text-xl">
        These are the projects I have developed
      </p>
      <MonitorSvg className="" />
      <div className="bottom-0 -top-6 flex absolute justify-center flex-shrink-0">
        <Carrousel className={''} data={projects} />
      </div>
    </section>
  )
}

export default Projects
