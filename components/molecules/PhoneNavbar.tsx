import React from 'react'
import { ImCross } from 'react-icons/im'
import Button from '../atoms/Button'
import ButtonToggleMode from '../atoms/ButtonToggleMode'

function PhoneNavbar({ onClick }) {
  return (
    <div className="phoneNavbar relative -top-96 flex items-center justify-center w-screen z-[99]">
      <div className="absolute flex right-2 top-1 text-1xl justify-between dark:text-white">
        <ImCross onClick={onClick} />
      </div>
      <div className="w-screen flex flex-col items-center pt-12">
        <div className="flex items-center justify-center text-2xl w-8">
          <p className="mr-2 dark:text-white">Dark</p>
          <ButtonToggleMode className="relative" />
        </div>
        <Button
          onClick={onClick}
          className="my-4"
          text="About"
          link="#About"
          many={false}
        />
        <Button onClick={onClick} text="Contact" link="/Contact" many={false} />
      </div>
    </div>
  )
}

export default PhoneNavbar
