import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import SuccessMessage from '../atoms/SuccessMessage'

function ContactForm() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_zgj5haf',
        'template_awcrawr',
        form.current,
        'S4cEkUuIYWHJmqsT6'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <form
      className="w-11/12 flex flex-wrap justify-between pb-144 lg:w-4/5"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="pr-4 flex flex-col flex-wrap justify-center w-full sm:w-6/12 xl:text-2xl xl:my-4 2xl:text-4xl 2xl:my-8">
        <label className="text-gray xl:my-8">Name</label>
        <input
          className="dark:bg-gray-dark dark:text-white/80 p-2 border-b-4 border text-black/60 border-gray border-b-blue rounded-xl focus:outline-4 focus:outline-blue xl:p-4 2xl:p-8"
          type="text"
          name="user_name"
          required
        />
      </div>
      <div className="pr-4 flex flex-col flex-wrap justify-center w-full sm:w-6/12 xl:text-2xl xl:my-4 2xl:text-4xl 2xl:my-8">
        <label className="text-gray xl:my-8">Email</label>
        <input
          className="dark:bg-gray-dark dark:text-white/80 p-2 border-b-4 border text-black/60 border-gray border-b-blue rounded-xl focus:outline-4 focus:outline-blue xl:p-4 2xl:p-8"
          type="email"
          name="user_email"
          required
        />
      </div>
      <div className="flex flex-col items-center w-full relative">
        <div className="flex flex-col flex-wrap justify-center w-full xl:text-2xl xl:my-4 2xl:text-4xl 2xl:my-8">
          <label className="text-gray xl:my-8">Message</label>
          <textarea
            className="text-black/60 dark:text-white/80 dark:bg-gray-dark w-full h-48 border-b-4 border border-gray border-b-blue rounded-xl focus:outline-4 focus:outline-blue xl:p-4 2xl:p-8"
            name="message"
            required
          />
        </div>
        <SuccessMessage />
      </div>
    </form>
  )
}

export default ContactForm
