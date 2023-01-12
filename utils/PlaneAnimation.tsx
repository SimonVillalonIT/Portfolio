import React from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const path = [
  { x: 20, y: 20 },
  { x: 1600, y: 80 },
  { x: 1600, y: -60 },
  { x: 600, y: -60 },
  { x: 600, y: 1000 },
  { x: 1600, y: 1000 },
  { x: 1900, y: 1000 },
  { x: 1600, y: 2000 },
  { x: 600, y: 2000 },
  { x: 600, y: 2500 },
  { x: 400, y: 3300 },
  { x: 1000, y: 3900 }
]

const usePlane = (
  paperPlaneRef: React.MutableRefObject<any>,
  hero: React.MutableRefObject<any>
) => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
  const tween = gsap.timeline()
  tween.add(
    gsap.to(paperPlaneRef.current, {
      ease: '',
      scrollTrigger: {
        trigger: hero.current,
        start: 'top',
        end: 3000,
        scrub: 1,
        once: true
      },
      motionPath: {
        path: path,
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    })
  )
  tween.add(
    gsap.to(paperPlaneRef.current, {
      scale: 0.1,
      opacity: 0,
      scrollTrigger: {
        trigger: paperPlaneRef.current,
        start: 2900,
        end: 3000,
        once: true,
        scrub: 1
      }
    })
  )
  tween.add(
    gsap.to('#contactButton', {
      backgroundColor: '#3084F2',
      color: '#fff',
      scrollTrigger: {
        trigger: paperPlaneRef.current,
        start: 2900,
        end: 3000,
        once: true,
        scrub: 1
      }
    })
  )
}

export default usePlane
