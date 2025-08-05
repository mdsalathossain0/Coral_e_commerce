import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'

import banner from '../assets/banner.png'
const Banner = () => {
  return (
    <div className='bg-[#0000001a] py-10  lg:py-15 px-4'>
        <Container>
            <Image src={banner}/>
        </Container>
    </div>
  )
}

export default Banner

