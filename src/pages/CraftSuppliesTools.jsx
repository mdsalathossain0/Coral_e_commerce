import React from 'react'
import Image from '../components/Image'

import Message from '../assets/message.png'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CraftSuppliesTools = () => {
  let prev = useSelector((state)=>state.bread.prevvalue)
  let current = useSelector((state)=>state.bread.currentvalue)
  return (
    <section className='py-10 lg:py-15'>
      <Container>
        <Heading className='px-4' text='Craft Supplies & Tools' />

        <p className='pb-10 px-4'>{prev && prev!==current ? <Link to={prev==='Home' ? '/' : `/${prev}`}>{`${prev} >`}</Link> : ''  } Craft Supplies & Tools</p>
      </Container>
        <Image src={Message}/>
    </section>
  )
}

export default CraftSuppliesTools