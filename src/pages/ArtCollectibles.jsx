import React from 'react'
import Image from '../components/Image'

import Message from '../assets/message.png'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'


const ArtCollectibles = () => {
  let prev = useSelector((state)=>state.bread.prevvalue)
  let current = useSelector((state)=>state.bread.currentvalue)

  console.log('Prev:', JSON.stringify(prev))

  return (
    <section className='py-10 lg:py-15'>
      <Container>
        <Heading text='Art & Collectibles' />

        <p className='pb-10'>{prev && prev!==current ? `${prev} >` : ''  } Art & Collectibles</p>
      </Container>
      <Image src={Message} />
    </section>
  )
}

export default ArtCollectibles