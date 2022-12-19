"use client";
import React from "react";
import { useState, useEffect } from "react";

function ButtonToggleMode() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="relative cursor-pointer w-fit mr-16">
      <input type="checkbox" id="toggleB" className="sr-only" />
      <div className="bg-gray dark:bg-gray-light w-14 h-8 rounded-full"></div>
      <div
        onClick={handleThemeSwitch}
        className="dot absolute bg-white left-1 top-1 dark:bg-gray-dark dark:transform dark:translate-x-full w-6 h-6 rounded-full transition"
      ></div>
    </div>
  );
}

export default ButtonToggleMode;
