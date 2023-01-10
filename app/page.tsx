'use client'
import React, { useState } from 'react'
import About from '../components/organisms/About'
import Hero from '../components/organisms/Hero'
import Navbar from '../components/organisms/Navbar'
import Projects from '../components/organisms/Projects'
import Skills from '../components/organisms/Skills'
import Footer from '../components/organisms/Footer'
import Buttons from '../components/molecules/Buttons'
import PreContact from '../components/molecules/PreContact'
import ButtonToggleMode from '../components/atoms/ButtonToggleMode'
import PhoneNavbar from '../components/molecules/PhoneNavbar'
import { AiOutlineMenu } from 'react-icons/ai'

function page() {
  const [showMenu, setShowMenu] = useState(false)
  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className="flex flex-col items-center w-screen">
      <Navbar>
        <Buttons />
        <ButtonToggleMode className="hidden relative w-fit mr-4 sm:mr-16 sm:flex" />
        <AiOutlineMenu
          className="flex mr-2 text-3xl sm:hidden"
          onClick={handleOnClick}
        />
        {showMenu ? <PhoneNavbar onClick={handleOnClick} /> : null}
      </Navbar>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <PreContact />
      <Footer />
    </div>
  )
}

export default page
