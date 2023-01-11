import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  BsFillFilePersonFill,
  BsMailbox,
  BsTelephoneFill
} from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
  return (
    <div className="absolute left-0 bottom-0 ">
      <footer className="border-t-2 border-blue text-white bg-blue w-screen py-12">
        <div className="flex flex-col w-screen h-full justify-around items-center sm:flex-row sm:items-start">
          <div className="w-1/3 flex justify-center">
            <div className="bg-white/60 w-fit p-6 rounded-tl-5xl h-fit flex flex-col items-center rounded-br-5xl xl:scale-125">
              <div className="text-gray-dark font-bold">
                <div className="flex items-center">
                  <BsFillFilePersonFill />{' '}
                  <p className="pl-2">Simón Enoch Villalón</p>
                </div>
                <div className="w-full flex items-center">
                  <BsMailbox />
                  <p className="pl-2">simonvillalon10@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <BsTelephoneFill />
                  <p className="pl-2">+54 3571 665914</p>
                </div>
                <div className="w-full flex items-center">
                  <FaGithub />
                  <p className="pl-2 text-sm sm:text-auto">
                    https://github.com/SimonVillalonIT/Portfolio
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-blue">Rio Tercero, Córdoba, Argentina</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 items-center text-center xl:scale-125">
            <h1 className="font-bold text-xl sm:text-4xl py-2">Sections</h1>
            <div className="flex flex-col justify-around h-full">
              <Link href="/">
                <p className="text-xl sm:text-2xl py-1">Main</p>
              </Link>
              <Link href="#About">
                <p className="text-xl sm:text-2xl sm:py-1">About</p>
              </Link>
              <Link href="/Contact">
                <p className="text-xl sm:text-2xl sm:py-1">Contact</p>
              </Link>
            </div>
          </div>
          <div className="flex w-1/3 flex-col justify-around items-start xl:scale-125">
            <div className="flex sm:text-5xl items-center justify-center sm:py-6">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/simon-villalon-8268a8256/"
              >
                <FaLinkedin className="mr-4 hover:scale-110 duration-300" />
              </Link>
              <h1 className="text-xl">Linkedin</h1>
            </div>
            <div className="flex items-center sm:py-6">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/SimonVillalonIT"
              >
                <FaGithub className="mr-4 hover:scale-110 duration-300 sm:text-5xl" />
              </Link>
              <h1 className="text-xl">Github</h1>
            </div>
          </div>
        </div>
      </footer>
      <h1 className="font-bold text-xl text-center bg-gray-dark text-white py-2">
        @Copyright {new Date().getFullYear()} All rights reserved
      </h1>
    </div>
  )
}

export default Footer
