import Link from 'next/link'
import React from 'react'

function DownloadButton() {
  return (
    <Link href="/Curriculum.pdf" download>
      <button className="font-bold mt-2 py-2 px-4 bg-blue text-white rounded-3xl hover:scale-110 hover:shadow-blue hover:shadow-lg duration-300 ml-2 sm:ml-16 md:text-xl xl:text-2xl xl:py-4 xl:px-6 2xl:py-6 2xl:px-8 2xl:text-4xl">
        Download CV
      </button>
    </Link>
  )
}

export default DownloadButton
