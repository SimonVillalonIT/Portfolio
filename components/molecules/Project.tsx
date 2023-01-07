'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

function Project({
  image,
  title,
  description,
  link,
  github,
  onLoad,
  className,
  loaded
}) {
  return (
    <div className="relative w-144 h-fit group duration-500">
      <div className="overflow-hidden relative">
        <Image
          className={`${className} duration-1000 rounded-xl h-80 w-144 group-hover:blur-sm object-cover`}
          src={image}
          alt="title"
          width={1920}
          height={1080}
          onLoad={onLoad}
        />
        <div
          className={`${
            loaded ? 'opacity-100' : 'opacity-0'
          } absolute text-white bg-blue/90 w-full h-full rounded-xl flex flex-col items-center justify-evenly -bottom-96 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <h3 className="font-bold underline text-xl">{title}</h3>
          <p className="w-4/5">{description}</p>
          <div className="flex w-3/4 justify-evenly items-center">
            <Link href={link} target="_blank">
              <button className="border rounded-2xl duration-150 border-white p-2 hover:bg-white hover:text-blue">
                Visit Website
              </button>
            </Link>
            <Link href={github} target="_blank">
              <FaGithub className="text-4xl hover:rotate-6 hover:scale-105 duration-150" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
