'use client'
import React, { useRef, useEffect } from 'react'
import planeAnimation from '../../utils/PlaneAnimation'

function FlyingPlane({ heroRef }) {
  const paperPlane = useRef(null)
  useEffect(() => {
    planeAnimation(paperPlane, heroRef.current)
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
