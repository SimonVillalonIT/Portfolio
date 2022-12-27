import React from "react";

function Button({ link, text }) {
  return (
    <a href={link}>
      <button className="rounded-3xl duration-500 font-bold py-2 px-4 mr-10 text-blue border-blue border-2 active:bg-blue active:text-white hover:bg-blue hover:scale-110 hover:shadow-md hover:shadow-blue hover:text-white">
        {text}
      </button>
    </a>
  );
}

export default Button;
