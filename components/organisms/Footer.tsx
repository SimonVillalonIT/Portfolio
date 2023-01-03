import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bottom-0 text-white bg-gray-dark dark:text-gray-dark dark:bg-white flex items-center justify-around w-screen py-6">
      <h1 className="font-bold text-xl">
        All rights reserved {new Date().getFullYear()}
      </h1>
      <div className="flex text-5xl">
        <Link target="_blank" href="https://www.linkedin.com/in/simon-villalon-8268a8256/">
          <FaLinkedin className="mr-4 hover:scale-110 duration-300" />
        </Link>
        <Link target="_blank" href="https://github.com/SimonVillalonIT">
          <FaGithub className="hover:scale-110 duration-300" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
