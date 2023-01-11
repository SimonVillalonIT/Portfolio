import React from 'react'

function SuccessMessage() {
  return (
    <div className="relative mt-28">
      <div className="cont scale-[0.3] xl:scale-75">
        <button className="btn dark:bg-gray-dark">
          <span>Send</span>
          <img
            src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
            alt="success message"
            height="62"
            width="62"
          />
        </button>
      </div>
    </div>
  )
}

export default SuccessMessage
