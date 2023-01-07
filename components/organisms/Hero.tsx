'use client'
import React from 'react'
import AvatarHover from '../molecules/AvatarHover'
import FlyingPlane from '../molecules/FlyingPlane'

function Hero() {
  return (
    <section className="pt-20 relative w-screen h-screen flex justify-center">
      <FlyingPlane />
      <div className="text-center flex flex-col items-center">
        <span className="typing block w-full max-w-[20ch] border-blue font-bold whitespace-nowrap border-r-4 text-5xl dark:text-white">
          Full Stack Developer
        </span>
        <p className="text-xl font-thin text-blue pt-6">
          I really enjoy building things for the web
        </p>
        <AvatarHover className="" width={264} height={280} />
      </div>
    </section>
  )
}

export default Hero
