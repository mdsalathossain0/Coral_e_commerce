import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'
import Product4 from '../assets/product4.png'
import Product5 from '../assets/product5.png'
import Product6 from '../assets/product6.png'
import Heading from '../components/Heading'

const Products = () => {
  return (
    <section className='bg-third py-10 lg:py-15 px-4'>
        <Container>
            <Heading className='text-center pb-10' text='Follow products and discounts on Instagram'/>
            <Flex className='gap-6 flex-wrap justify-center'>
                <div className=' w-[160px] md:w-[199px] h-[200px]'><Image src={Product1}/></div>
                <div className=' w-[160px] md:w-[199px] h-[200px]'><Image src={Product2}/></div>
                <div className=' w-[160px] md:w-[199px] h-[200px]'><Image src={Product3}/></div>
                <div className=' w-[160px] md:w-[199px] h-[200px]'><Image src={Product4}/></div>
                <div className=' w-[160px] md:w-[199px] h-[200px]'><Image src={Product5}/></div>
                <div className=' w-[160px] md:w-[199px] h-[200px]'><Image src={Product6}/></div>

            </Flex>
            <Heading className='text-center pt-8 lg:pt-18 pb-10' text='Or subscribe to the newsletter'/>
            <div className='flex gap-x-10 justify-center'>
                <input className='w-1/3 border-b border-black py-3 px-3' type="email" placeholder='Email Address...'/> 
                <input type="submit" className='text-base text-black font-normal font-san border-b border-black cursor-pointer' value='Submit'/>
            </div>
        </Container>
    </section>
  )
}

export default Products