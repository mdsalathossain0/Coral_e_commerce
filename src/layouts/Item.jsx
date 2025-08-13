import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import { MdFilterListAlt } from 'react-icons/md'
import Card from '../components/Card'


import image from '../assets/12.png'
import Paginate from '../components/Paginate'

const Item = () => {
  return (
    <section className='py-10 lg:py-15 px-4'>
        <Container>
            <Heading className='text-center pb-9' text='Subscribe to the newsletter'/>
            <Flex className='justify-between flex-col md:flex-row gap-y-4 md:gap-y-0 pb-10'>
                <div className='flex gap-x-10'>
                    <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>all products</p>
                    <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>t-shirt</p>
                    <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>hoodies</p>
                    <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>jacket</p>
                </div>
                <div>
                     <span className=' inline-flex items-center gap-x-2 bg-black py-1 px-3 text-white text-xs md:text-sm font-san font-semibold'>
                        <MdFilterListAlt /><span> Filter</span>
                        </span>
                     </div>
            </Flex>

            <div>
                <Paginate itemsPerPage={8} />
            </div>
        </Container>
    </section>
  )
}

export default Item