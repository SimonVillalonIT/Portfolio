'use client'
import React from 'react'
import Button from '../atoms/Button'

function Buttons() {
  return (
    <div className="hidden items-center p-4 text-3xl dark:text-white justify-center sm:pr-4 sm:justify-between sm:p-10 sm:flex">
      <Button text={'About Me'} link="#About" />
      <Button text={'Contact'} link="/Contact" />
    </div>
  )
}

export default Buttons
