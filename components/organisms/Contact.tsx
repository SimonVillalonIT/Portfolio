'use client'
import React from 'react'
import AvatarHover from '../molecules/AvatarHover'
import ContactForm from '../molecules/ContactForm'

function Contact() {
  return (
    <div className="flex flex-col w-4/5 items-center sm:3/5">
      <AvatarHover
        className="absolute top-0 scale-50 hover:scale-50 xl:top-16"
        width={264}
        height={280}
      />
      <h2 className="text-center mt-44 text-2xl text-blue xl:mt-72 xl:text-5xl">
        Use the form below to contact me. Lets work together!
      </h2>
      <ContactForm />
    </div>
  )
}

export default Contact
