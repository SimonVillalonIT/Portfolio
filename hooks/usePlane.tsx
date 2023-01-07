import { gsap } from "gsap";
import React from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const usePlane = (paperPlaneRef: React.MutableRefObject<any>) => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
  const tween = gsap.timeline();
  tween.add(
    gsap.to(paperPlaneRef.current, {
      ease: "",
      scrollTrigger: {
        trigger: paperPlaneRef.current,
        start: -100,
        end: 2800,
        scrub: 1,
        once: true,
      },
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    })
  );
  tween.add(
    gsap.to(paperPlaneRef.current, {
      scale: 0.1,
      opacity: 0,
      scrollTrigger: {
        trigger: paperPlaneRef.current,
        start: 2580,
        end: 2800,
        once: true,
        scrub: 1,
      },
    })
  );
  tween.add(
    gsap.to("#contactButton", {
      backgroundColor: "#3084F2",
      color: "#fff",
      scrollTrigger: {
        trigger: paperPlaneRef.current,
        start: 2600,
        end: 2650,
        once: true,
        scrub: 1,
      },
    })
  );
};

export default usePlane;
