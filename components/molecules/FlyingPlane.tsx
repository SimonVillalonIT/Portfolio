'use client'
import React, { useRef, useEffect, useState } from 'react'
import planeAnimation from '../../utils/PlaneAnimation'

function FlyingPlane({ heroRef }) {
  const paperPlane = useRef(null)
  const [screen, setScreen] = useState(window.innerWidth)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreen(window.innerWidth)
    }
  }, [])
  useEffect(() => {
    planeAnimation(paperPlane, heroRef.current, screen)
  }, [])
  return (
    <img
      ref={paperPlane}
      className="paperplane absolute -left-14 w-24 z-[99]"
      src="/Plane.png"
      alt="Paper Plane"
    />
  )
}

export default FlyingPlane
