import React from 'react'
import Image from '../components/Image'
import ClgImg from '../assets/collection.png'
const Collection = () => {
  return (
    <section className='py-10 lg:py-15'>
        <div className='w-full h-[376px] md:h-[476px] lg:h-[576px]'><Image className='w-full h-full' src={ClgImg}/></div>
    </section>
  )
}

export default Collection