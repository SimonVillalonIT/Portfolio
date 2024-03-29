import React from 'react'

function Button(props) {
  return (
    <a className="" onClick={props.onClick} href={props.link}>
      <button
        id={props.id}
        className={`rounded-3xl duration-500 py-2 px-4 ${
          props.many === false ? null : 'mr-4 xl:mr-8'
        } text-blue text-lg font-thin border-blue border-2 active:bg-blue active:text-white hover:bg-blue hover:scale-110 hover:shadow-md hover:shadow-blue hover:text-white xl:text-2xl xl:py-4 xl:px-6 2xl:text-4xl 2xl:py-6 2xl:px-8 ${
          props.className
        }`}
      >
        {props.text}
      </button>
    </a>
  )
}

export default Button
