import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsMailbox, BsTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'
import AvatarHover from '../molecules/AvatarHover'

function Footer() {
  return (
    <footer className="absolute left-0 bottom-0 bg-blue w-screen flex flex-col sm:flex-row sm:justify-center text-[#ffffffbd]">
      <div className="flex flex-col w-full sm:w-10/12">
        <div className="flex flex-col items-center sm:flex-row w-full sm:justify-between">
          <div className="">
            <AvatarHover
              width={264}
              height={280}
              className="pt-12 w-fit scale-75 hover:scale-90 sm:pt-0 xl:mt-24 2xl:mt-36"
            />
          </div>
          <div className="flex flex-col pt-16">
            <h3 className="mb-8 text-base">SITEMAP</h3>
            <Link href="/">
              <p className="mb-4 text-sm">Home</p>
            </Link>
            <Link href="/#About">
              <p className="mb-4 text-sm">About</p>
            </Link>
            <Link href="/Contact">
              <p className="mb-4 text-sm">Contact</p>
            </Link>
          </div>
          <div className="flex flex-col pt-16">
            <h3 className="mb-8 text-base">SOCIALS</h3>
            <div className="flex items-center mb-4 text-sm">
              <FaGithub />
              <p className="ml-1">Github</p>
            </div>
            <div className="flex items-center mb-4 text-sm">
              <FaLinkedin />
              <p className="ml-1">Linkedin</p>
            </div>
          </div>
          <div className="flex flex-col pt-16">
            <h3 className="mb-8 text-base">LOCATION</h3>
            <div>
              <p>🇦🇷 Argentina</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:justify-between py-10 pb-24 font-bold">
          <div className="flex items-center">
            <BsMailbox />
            <p className="ml-2">simonvillalon9@gmail.com</p>
          </div>
          <div className="flex items-center">
            <BsTelephoneFill />
            <p className="ml-2">+54 3571-665914</p>
          </div>
          <p>&#169; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
