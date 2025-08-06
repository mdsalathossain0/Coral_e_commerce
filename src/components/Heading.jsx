import React from 'react'

const Heading = ({text, className}) => {
  return (
    <h2 className={`text-3xl md:text-4xl lg:text-50p text-black font-medium font-robo ${className}`}>{text}</h2>
  )
}

export default Heading