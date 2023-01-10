'use client'
import React from 'react'
import AvatarHover from '../molecules/AvatarHover'
import FlyingPlane from '../molecules/FlyingPlane'

function Hero() {
  const heroRef = React.useRef(null)
  return (
    <section
      ref={heroRef}
      className="pt-20 relative w-screen h-screen flex justify-center xl:pt-40"
    >
      <FlyingPlane heroRef={heroRef} />
      <div className="text-center flex flex-col items-center">
        <span className="typing block w-full max-w-[20ch] border-blue font-bold whitespace-nowrap border-r-4 text-3xl dark:text-white sm:text-5xl">
          Full Stack Developer
        </span>
        <p className="text-lg font-thin text-blue pt-6">
          I really enjoy building things for the web
        </p>
        <AvatarHover className="pt-12 sm:pt-0" width={264} height={280} />
      </div>
    </section>
  )
}

export default Hero
