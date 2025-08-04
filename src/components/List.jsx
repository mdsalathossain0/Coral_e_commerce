import React from 'react'

const List = ({text, className}) => {
  return (
    <li className={`text-sm lg:text-base text-black font-normal font-san leading-6 list-none ${className}`}>{text}</li>
  )
}

export default List