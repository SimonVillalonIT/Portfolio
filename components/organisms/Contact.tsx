"use client";
import React, { useState } from "react";
import AvatarHover from "../molecules/AvatarHover";

function Contact() {
  const [sent, setSent] = useState(false);

  const messageStateToggle = () => {
    setSent(true);
  };
  return (
    <div className="flex flex-col w-3/5 items-center h-screen">
      <AvatarHover
        className="absolute top-0 scale-50 hover:scale-50"
        width={264}
        height={280}
      />
      <h2 className="text-center mt-32 text-2xl text-blue">
        {sent
          ? "Thank you for contacting me. I will answer your message as soon as possible"
          : "Use the form below to contact me. Let's work together!"}
      </h2>
      <button type="submit" onClick={messageStateToggle}>Submit</button>
    </div>
  );
}

export default Contact;
