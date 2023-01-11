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
    { x: 1000, y: 80 },
    { x: 1000, y: -60 },
    { x: 300, y: -60 },
    { x: 300, y: 1000 },
    { x: 1000, y: 1000 },
    { x: 1800, y: 1000 },
    { x: 1000, y: 2000 },
    { x: 300, y: 2000 },
    { x: 300, y: 2500 },
    { x: 200, y: 3300 },
    { x: 500, y: 3500 }
  ],
  xxl: [
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
        markers: true,
        trigger: hero.current,
        start: 'top',
        end:
          screen <= 450
            ? 4000
            : screen <= 1366
            ? 3000
            : screen <= 1919
            ? 3400
            : 3800,
        scrub: 1,
        once: true
      },
      motionPath: {
        path:
          screen <= 450
            ? paths.sm
            : screen <= 1366
            ? paths.md
            : screen <= 1919
            ? paths.xl
            : paths.xxl,
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
        markers: true,
        trigger: paperPlaneRef.current,
        start: screen <= 450 ? 3450 : screen <= 1366 ? 2500 : 3200,
        end: screen <= 450 ? 3500 : screen <= 1366 ? 2550 : 3300,
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
        markers: true,
        trigger: paperPlaneRef.current,
        start: screen <= 450 ? 6000 : screen <= 1366 ? 2480 : 3200,
        end: screen <= 450 ? 6150 : screen <= 1366 ? 2580 : 3300,
        once: true,
        scrub: 1
      }
    })
  )
}

export default usePlane
