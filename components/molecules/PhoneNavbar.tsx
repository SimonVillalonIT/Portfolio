import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import ButtonToggleMode from '../atoms/ButtonToggleMode'

function PhoneNavbar({ onClick }) {
  return (
    <div className="phoneNavbar absolute flex-col items-center pt-24 px-6 h-screen w-screen top-0 -right-40 bg-blue z-[99]">
      <div className="absolute flex left-4 top-4 text-3xl w-1/2 justify-between">
        <AiOutlineMenu onClick={onClick} />
        <ButtonToggleMode className="relative" />
      </div>
      <div className="text-4xl text-white">
        <a onClick={onClick} href="/">
          <p className="py-2 border-t-2 border-b w-1/2 border-y-white border-x-white text-center">
            Main
          </p>
        </a>
        <a onClick={onClick} href="#About">
          <p className="py-2 border-t border-b w-1/2 border-y-white border-x-white text-center">
            About
          </p>
        </a>
        <a onClick={onClick} href="/Contact">
          <p className="py-2 border-t border-b-2  w-1/2 border-y-white border-x-white text-center">
            Contact
          </p>
        </a>
      </div>
    </div>
  )
}

export default PhoneNavbar
