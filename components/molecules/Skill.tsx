import React from "react";

function Skill({ src, name }) {
  return (
    <div className="mt-4 dark:bg-gray-dark/5 bg-gray/10 shadow-xl rounded-2xl backdrop-blur-xl p-2">
      <img className="w-32 h-32 object-cover rounded-2xl" src={src} />
      <p className="dark:text-white text-center text-xl mt-1">{name}</p>
    </div>
  );
}

export default Skill;
