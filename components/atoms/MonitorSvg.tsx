import React from 'react'

function MonitorSvg({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={700}
      height={700}
    >
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#1e252b',
          fillOpacity: 1
        }}
        d="M311.313 523.367h99.222v61.762h-99.223Zm0 0"
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#000',
          fillOpacity: 1
        }}
        d="M678.145 134.258c0-24.551-20.09-44.637-44.637-44.637H44.633C20.082 89.621 0 109.707 0 134.258v346.46c0 24.552 20.082 44.637 44.633 44.637h588.875c24.547 0 44.637-20.09 44.637-44.636Zm0 0"
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#333e48',
          fillOpacity: 1
        }}
        d="M0 460.863v19.856c0 24.55 20.082 44.636 44.633 44.636h588.875c24.547 0 44.637-20.09 44.637-44.636v-19.856Zm0 0"
      />
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#000',
          fillOpacity: 1
        }}
        d="M700 134.258c0-24.551-20.086-44.637-44.633-44.637H66.492c-24.55 0-44.637 20.086-44.637 44.637v346.46c0 24.552 20.086 44.637 44.637 44.637h588.875c24.547 0 44.633-20.09 44.633-44.636Zm0 0"
      />

      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#333e48',
          fillOpacity: 1
        }}
        d="M21.855 460.863v19.856c0 24.55 20.086 44.636 44.637 44.636h588.875c24.547 0 44.633-20.09 44.633-44.636v-19.856ZM257.262 582.035h207.324v28.344H257.262Zm0 0"
      />
    </svg>
  )
}

export default MonitorSvg
