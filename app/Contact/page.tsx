'use client'
import React, { useState } from 'react'
import ButtonsContact from '../../components/molecules/ButtonsContact'
import Navbar from '../../components/organisms/Navbar'
import Contact from '../../components/organisms/Contact'
import Footer from '../../components/organisms/Footer'
import ButtonToggleMode from '../../components/atoms/ButtonToggleMode'
import PhoneNavbar from '../../components/molecules/PhoneNavbar'
import { AiOutlineMenu } from 'react-icons/ai'

function page() {
  const [showMenu, setShowMenu] = useState(false)
  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className="flex flex-col items-center w-screen relative">
      <Navbar>
        <ButtonsContact />
        <ButtonToggleMode className="hidden relative w-fit mr-4 sm:mr-16 sm:flex" />
        <AiOutlineMenu
          className="flex mr-2 text-3xl sm:hidden"
          onClick={handleOnClick}
        />
        {showMenu ? <PhoneNavbar onClick={handleOnClick} /> : null}
      </Navbar>
      <Contact />
      <Footer />
    </div>
  )
}

export default page
