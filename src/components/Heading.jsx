import React from 'react'

const Heading = ({text, className}) => {
  return (
    <h2 className={`text-50p text-black font-medium font-robo ${className}`}>{text}</h2>
  )
}

export default Heading