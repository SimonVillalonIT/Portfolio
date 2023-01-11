import React from 'react'
import Button from '../atoms/Button'

function PreContact() {
  return (
    <div className="w-4/5 mt-20 h-32 mb-40 flex flex-col justify-center items-center text-center sm:mt-0 xl:pt-36 xl:pb-96">
      <h1 className="dark:text-white text-3xl font-bold xl:text-6xl">
        Interested in collaborating with me?
      </h1>
      <p className="text-blue text-xl mt-8 mb-8 xl:text-4xl">
        You can contact me with the button below
      </p>
      <Button
        id="contactButton"
        many={false}
        link="/Contact"
        text="Lets work together!"
      />
    </div>
  )
}

export default PreContact
