import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SuccessMessage from "../atoms/SuccessMessage";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgj5haf",
        "template_awcrawr",
        form.current,
        "S4cEkUuIYWHJmqsT6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="flex w-4/5 flex-wrap justify-between"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="pr-4 flex flex-col flex-wrap justify-center w-6/12">
        <label className="text-gray">Name</label>
        <input
          className="dark:bg-gray-dark dark:text-white/80 p-2 border-b-4 border text-black/60 border-gray border-b-blue rounded-xl focus:outline-4 focus:outline-blue"
          type="text"
          name="user_name"
          required
        />
      </div>
      <div className="pr-4 flex flex-col flex-wrap justify-center w-6/12 ">
        <label className="text-gray">Email</label>
        <input
          className="dark:bg-gray-dark dark:text-white/80 p-2 border-b-4 border text-black/60 border-gray border-b-blue rounded-xl focus:outline-4 focus:outline-blue"
          type="email"
          name="user_email"
          required
        />
      </div>
      <div className="flex flex-col items-center w-full relative">
        <div className="flex flex-col flex-wrap justify-center w-full">
          <label className="text-gray">Message</label>
          <textarea
            className="text-black/60 dark:text-white/80 dark:bg-gray-dark w-full h-48 border-b-4 border border-gray border-b-blue rounded-xl focus:outline-4 focus:outline-blue"
            name="message"
            required
          />
        </div>
        <SuccessMessage />
      </div>
    </form>
  );
}

export default ContactForm;
