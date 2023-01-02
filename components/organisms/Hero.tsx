"use client";
import React from "react";
import Avatar from "../atoms/Avatar";
import { useState } from "react";
import AvatarTongue from "../atoms/AvatarTongue";

function Hero() {
  const [avatarState, setAvatarState] = useState(false);

  const handleMouseOver = () => {
    setAvatarState(true);
  };
  const handleMouseLeave = () => {
    setAvatarState(false);
  };

  return (
    <section className="w-screen h-screen flex justify-center">
      <div className="pt-24 text-center flex flex-col items-center">

        <span className="typing block w-[18ch] border-blue font-bold whitespace-nowrap border-r-4 text-5xl dark:text-white">
          Full Stack Developer
        </span>
        <p className="text-xl font-thin text-blue pt-6">
          I really enjoy building things for the web
        </p>
        <div
          className="hover:scale-110 duration-150"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {avatarState ? <AvatarTongue /> : <Avatar />}
        </div>
      </div>
    </section>
  );
}

export default Hero;
