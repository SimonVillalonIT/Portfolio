import React, { useRef, useEffect } from 'react'
import Path from '../atoms/Path'
import usePlane from '../../utils/PlaneAnimation'

function FlyingPlane() {
  const paperPlane = useRef(null)
  useEffect(() => {
    usePlane(paperPlane)
  }, [])
  return (
    <div>
      <Path className="absolute -z-30 -left-12 -top-48 opacity-0" />
      <img
        ref={paperPlane}
        className="paperplane absolute top-5 -left-32 w-24 z-50"
        src="/Plane.png"
        alt="Paper Plane"
      />
    </div>
  )
}

export default FlyingPlane
