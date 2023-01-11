import React from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const paths = {
  sm: [
    { x: 10, y: 20 },
    { x: 370, y: 0 },
    { x: 10, y: -60 },
    { x: 10, y: 200 },
    { x: 450, y: 800 },
    { x: 250, y: 1200 },
    { x: -10, y: 1600 },
    { x: 450, y: 2600 }
  ],
  md: [
    { x: 20, y: 20 },
    { x: 1000, y: 40 },
    { x: 1000, y: -20 },
    { x: 400, y: -20 },
    { x: 200, y: 1000 },
    { x: 1000, y: 1000 },
    { x: 1800, y: 1000 },
    { x: 1200, y: 1400 },
    { x: 800, y: 1800 },
    { x: 200, y: 2300 },
    { x: 640, y: 2950 }
  ],
  xl: [
    { x: 20, y: 20 },
    { x: 2000, y: 80 },
    { x: 2000, y: -80 },
    { x: 800, y: -40 },
    { x: 200, y: 1000 },
    { x: 1000, y: 1000 },
    { x: 1800, y: 1000 }
  ]
}

const usePlane = (
  paperPlaneRef: React.MutableRefObject<any>,
  hero: React.MutableRefObject<any>,
  screen: number
) => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)
  const tween = gsap.timeline()
  tween.add(
    gsap.to(paperPlaneRef.current, {
      ease: '',
      scrollTrigger: {
        trigger: hero.current,
        start: 'top',
        end: screen <= 450 ? 2600 : 2700,
        scrub: 1,
        once: true
      },
      motionPath: {
        path: screen <= 450 ? paths.sm : screen <= 1366 ? paths.md : paths.xl,
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
        start: screen <= 450 ? 2580 : 2300,
        end: screen <= 450 ? 2800 : 2400,
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
        markers: true,
        start: screen <= 450 ? 2650 : 2500,
        end: screen <= 450 ? 2800 : 2600,
        once: true,
        scrub: 1
      }
    })
  )
}

export default usePlane
