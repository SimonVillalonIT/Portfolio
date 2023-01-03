"use client";
import React from "react";
import AvatarHover from "../molecules/AvatarHover";

function Hero() {
  return (
    <section className="w-screen h-screen flex justify-center">
      <div className="pt-24 text-center flex flex-col items-center">
        <span className="typing block w-[18ch] border-blue font-bold whitespace-nowrap border-r-4 text-5xl dark:text-white">
          Full Stack Developer
        </span>
        <p className="text-xl font-thin text-blue pt-6">
          I really enjoy building things for the web
        </p>
        <AvatarHover className="" width={264} height={280} />
      </div>
    </section>
  );
}

export default Hero;
