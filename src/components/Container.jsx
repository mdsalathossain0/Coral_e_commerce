import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto bg-red-500 h-[300px]'>
        {children}
    </div>
  )
}

export default Container