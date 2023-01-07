import Link from 'next/link'
import React from 'react'

function DownloadButton() {
  return (
    <Link href="" download>
      <button className="font-bold ml-16 mt-10 py-2 px-4 bg-blue text-white rounded-3xl hover:scale-110 hover:shadow-blue hover:shadow-lg duration-300">
        Download CV
      </button>
    </Link>
  )
}

export default DownloadButton
