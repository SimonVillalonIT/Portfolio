'use client'
import React from 'react'
import Project from './Project'
import useCarrousel from '../../hooks/useCarrousel'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

function Carrousel({ data, className }) {
  const { previous, next, selectedData, loaded, setLoaded } = useCarrousel(data)

  return (
    <div
      className={
        className +
        'flex items-center justify-between xl:scale-125 2xl:scale-150'
      }
    >
      <span
        onClick={previous}
        className="text-2xl sm:text-5xl mx-2 pointer cursor-pointer text-gray-dark sm:text-white"
      >
        <FaArrowCircleLeft />
      </span>
      <Project
        className={loaded ? 'opacity-100' : 'opacity-0'}
        link={selectedData.link}
        title={selectedData.title}
        description={selectedData.description}
        image={selectedData.image}
        github={selectedData.github}
        onLoad={() => {
          setLoaded(true)
        }}
        loaded={loaded}
      />
      <span
        onClick={next}
        className="text-2xl sm:text-5xl mx-2 cursor-pointer text-gray-dark sm:text-white"
      >
        <FaArrowCircleRight />
      </span>
    </div>
  )
}

export default Carrousel
