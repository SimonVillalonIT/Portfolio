'use client'
import React, { useEffect } from 'react'
import useTheme from '../../hooks/useTheme'

function ButtonToggleMode({ className }) {
  const { theme, setTheme, handleThemeSwitch } = useTheme()

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [theme])

  return (
    <div className={`${className}`}>
      <input type="checkbox" id="toggleB" className="sr-only" />
      <div className="bg-gray dark:bg-gray-light w-14 h-8 rounded-full"></div>
      <div
        onClick={handleThemeSwitch}
        className="dot cursor-pointer absolute bg-white left-1 top-1 dark:bg-gray-dark dark:transform dark:translate-x-full w-6 h-6 rounded-full transition"
      ></div>
    </div>
  )
}

export default ButtonToggleMode
