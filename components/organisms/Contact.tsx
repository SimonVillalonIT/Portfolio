'use client'
import React from 'react'
import AvatarHover from '../molecules/AvatarHover'
import ContactForm from '../molecules/ContactForm'

function Contact() {
  return (
    <div className="flex flex-col w-3/5 items-center">
      <AvatarHover
        className="absolute top-0 scale-50 hover:scale-50"
        width={264}
        height={280}
      />
      <h2 className="text-center mt-32 text-2xl text-blue">
        Use the form below to contact me. Lets work together!
      </h2>
      <ContactForm />
    </div>
  )
}

export default Contact
