import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import Card from '../assets/card.png'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Card4 from '../assets/card4.png'
import Heading from '../components/Heading'


const Style = () => {

  return (
    <section className='py-10 lg:py-15 px-4'>
        <Container>
     
            <Heading className='text-center pb-10' text='Explore new and popular styles'/>
            <Flex className='gap-x-6 flex-col lg:flex-row gap-y-6 lg:gap-y-0'>
                <div className='w-full lg:w-1/2'>
                    <div className='h-[400px] md:h-[500px] lg:h-[648px]'><Image className='w-full h-full' src={Card}/></div>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <Flex className='gap-6 flex-wrap justify-center'>
                        <div className='w-[46%] lg:w-[48%] h-[200px] md:h-[240px] lg:h-[312px]'><Image className='w-full h-full' src={Card1}/></div>
                        <div className='w-[46%] lg:w-[48%] h-[200px] md:h-[240px] lg:h-[312px]'><Image className='w-full h-full' src={Card2}/></div>
                        <div className='w-[46%] lg:w-[48%] h-[200px] md:h-[240px] lg:h-[312px]'><Image className='w-full h-full' src={Card3}/></div>
                        <div className='w-[46%] lg:w-[48%] h-[200px] md:h-[240px] lg:h-[312px]'><Image className='w-full h-full' src={Card4}/></div>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Style