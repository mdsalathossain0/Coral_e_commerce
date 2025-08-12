import React from 'react'
import Image from '../components/Image'

import Message from '../assets/message.png'
import Container from '../components/Container'
import Heading from '../components/Heading'

const CraftSuppliesTools = () => {
  return (
    <section className='py-10 lg:py-15'>
      <Container>
        <Heading text='Craft Supplies & Tools' />

        <p className='pb-10'>home</p>
      </Container>
        <Image src={Message}/>
    </section>
  )
}

export default CraftSuppliesTools