import Link from 'next/link'
import React from 'react'

function DownloadButton() {
  return (
    <Link href="" download>
      <button className="font-bold mt-2 py-2 px-4 bg-blue text-white rounded-3xl hover:scale-110 hover:shadow-blue hover:shadow-lg duration-300 ml-2 sm:ml-16 xl:py-6 xl:px-8 xl:text-4xl">
        Download CV
      </button>
    </Link>
  )
}

export default DownloadButton
