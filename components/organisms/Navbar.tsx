import React from 'react'
import DownloadButton from '../atoms/DownloadButton'

function Navbar({ children }) {
  return (
    <header className="w-screen flex justify-between items-center">
      <DownloadButton />
      <div className="flex items-center">{children}</div>
    </header>
  )
}

export default Navbar
