import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  BsFillFilePersonFill,
  BsMailbox,
  BsTelephoneFill,
} from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="border-t-2 border-blue bottom-0 text-white bg-blue w-screen py-12">
        <div className="flex w-screen h-full justify-around">
          <div className="w-1/3 flex justify-end">
            <div className="bg-white/60 w-fit p-6 rounded-tl-5xl h-fit flex flex-col items-center rounded-br-5xl">
              <div className="text-gray-dark font-bold">
                <div className="flex items-center">
                  <BsFillFilePersonFill />{" "}
                  <p className="pl-2">Simón Enoch Villalón</p>
                </div>
                <div className="w-full flex items-center">
                  <BsMailbox />
                  <p className="pl-2">simonvillalon10@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <BsTelephoneFill />
                  <p className="pl-2">+54 3571 665914</p>
                </div>
                <div className="w-full flex items-center">
                    <FaGithub />
                  <p className="pl-2">
                    https://github.com/SimonVillalonIT/Portfolio
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-blue">Rio Tercero, Córdoba, Argentina</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 items-center">
            <h1 className="font-bold text-2xl">Sections</h1>
            <div className="flex flex-col justify-around h-full">
              <Link href="/">
                <p className="text-xl">Main</p>
              </Link>
              <Link href="#About">
                <p className="text-xl">About</p>
              </Link>
              <Link href="/Contact">
                <p className="text-xl">Contact</p>
              </Link>
            </div>
          </div>
          <div className="flex text-4xl w-1/3 flex-col justify-around">
            <div className="flex">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/simon-villalon-8268a8256/"
              >
                <FaLinkedin className="mr-4 hover:scale-110 duration-300" />
              </Link>
              <h1>Linkedin</h1>
            </div>
            <div className="flex">
              <Link target="_blank" href="https://github.com/SimonVillalonIT">
                <FaGithub className="mr-4 hover:scale-110 duration-300" />
              </Link>
              <h1>Github</h1>
            </div>
          </div>
        </div>
      </footer>
      <h1 className="font-bold text-xl text-center bg-gray-dark text-white py-2">
        @Copyright {new Date().getFullYear()} All rights reserved
      </h1>
    </div>
  );
}

export default Footer;
