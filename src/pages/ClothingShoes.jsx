import React from 'react'
import Message from '../assets/message.png'
import Image from '../components/Image'
import Container from '../components/Container'
import Heading from '../components/Heading'
const ClothingShoes = () => {
  return (
    <section className='py-10 lg:py-15'> 
    <Container>
        <Heading text='Clothing & Shoes' />

        <p className='pb-10'>home</p>
      </Container>
        <Image src={Message}/>
    </section>
  )
}

export default ClothingShoes