import React from 'react'

function Button(props) {
  return (
    <a className="" href={props.link}>
      <button
        id={props.id}
        className={`rounded-3xl duration-500 py-2 px-4 ${
          props.many === false ? null : 'mr-4'
        } text-blue text-lg font-thin border-blue border-2 active:bg-blue active:text-white hover:bg-blue hover:scale-110 hover:shadow-md hover:shadow-blue hover:text-white`}
      >
        {props.text}
      </button>
    </a>
  )
}

export default Button
