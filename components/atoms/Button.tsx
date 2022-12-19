import React from "react";
import Link from "next/link";

function Button({ link, text }) {
  return (
    <Link href={link}>
      <button className="rounded-3xl duration-500 font-bold py-2 px-4 mr-10 text-blue border-blue border-2 hover:bg-blue hover:text-white">
        {text}
      </button>
    </Link>
  );
}

export default Button;
