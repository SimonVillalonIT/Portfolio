import React from 'react'
import Button from '../atoms/Button'
import ButtonToggleMode from '../atoms/ButtonToggleMode'

function Buttons() {
  return (
    <div className="flex items-center justify-between pt-10">
      <Button text={'About Me'} link="#About" />
      <Button text={'Contact'} link="/Contact" />
      <ButtonToggleMode />
    </div>
  )
}

export default Buttons
