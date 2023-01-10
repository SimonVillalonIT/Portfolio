import React from 'react'

function SkillContainer({ children, title }) {
  return (
    <div className="w-full sm:w-1/2 flex flex-col items-center border-x border-gray-light/50 dark:border-gray-light/5 pb-8">
      <h1 className="text-blue text-2xl sm:text-4xl font-bold">{title}</h1>
      {children}
    </div>
  )
}

export default SkillContainer
