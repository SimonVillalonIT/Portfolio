import React from 'react'

function About() {
  return (
    <section
      className="w-screen bg-blue flex justify-center pb-56 sm:pb-72"
      id="About"
    >
      <div className="pt-24 flex flex-col items-center sm:pt-44 xl:pt-36">
        <h2 className="text-center text-2xl font-bold text-white xl:text-4xl 2xl:text-6xl">
          Hi, I’m Simon. Nice to see you.
        </h2>
        <p className="w-4/5 text-white text-lg text-center font-thin pt-6 leading-8 break-words sm:w-3/5 xl:text-2xl xl:w-2/3 xl:leading-[3rem] 2xl:text-4xl 2xl:w-1/2 2xl:leading-[3rem]">
          I am a young junior developer really eager to show what I am capable
          of. I love being able to create solutions for the different needs that
          arise putting all my skills and knowledge to the test.
        </p>
      </div>
    </section>
  )
}
export default About
