import { gsap } from "gsap";

export interface SkillsInterface {
  name: string;
  src: string;
}

export default function SkillsAnimation(
  FrontendSkills: SkillsInterface[],
  BackendSkills: SkillsInterface[]
) {
  let tl = gsap.timeline({
    delay: 0.3,
    scrollTrigger: { trigger: "#wrapper", start: "-200" },
  });

  FrontendSkills > BackendSkills
    ? FrontendSkills.map((skill, i) => {
        tl.to(`#skill${i}`, {
          autoAlpha: 1,
          duration: 1,
          scale: 1,
          ease: "power4.inOut",
        });
      })
    : BackendSkills.map((skill, i) => {
        tl.to(`#skill${i}`, {
          autoAlpha: 1,
          duration: 1,
          scale: 1,
          ease: "power4.inOut",
        });
      });
}
