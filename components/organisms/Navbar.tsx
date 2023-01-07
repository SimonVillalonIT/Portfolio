import React from 'react'
import DownloadButton from '../atoms/DownloadButton'

function Navbar({ children }) {
  return (
    <header className="flex justify-between items-center w-screen">
      <DownloadButton />
      {children}
    </header>
  )
}

export default Navbar
