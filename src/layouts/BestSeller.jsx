import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { MdFilterListAlt } from 'react-icons/md'
import Card from '../components/Card'

import image from '../assets/12.png'
import axios from 'axios'

const BestSeller = () => {

    let [allitem,setAllitem]=useState([])

    useEffect(()=>{
       async function alldata(){
            let data =await axios.get('https://dummyjson.com/products')
            setAllitem(data.data.products)
        }
        alldata()
    },[])

    return (
        <section className='py-10 lg:py-15 px-4'>
            <Container>
                <Heading className='text-center pb-9' text='Best sellers' />
                <Flex className='justify-between flex-col md:flex-row gap-y-4 md:gap-y-0 pb-10'>
                    <div className='flex gap-x-10'>
                        <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>all products</p>
                        <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>t-shirt</p>
                        <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>hoodies</p>
                        <p className='text-[#00000080] text-xs md:text-sm lg:text-base font-san font-semibold'>jacket</p>
                    </div>
                    <div>
                        <span className=' inline-flex items-center gap-x-2 bg-black py-1 px-3 text-white text-xs md:text-sm font-san font-semibold'>
                            <MdFilterListAlt /><span>Show All</span>
                        </span>
                    </div>
                </Flex>
                <Flex className='gap-6 flex-wrap justify-center md:justify-start'>
                    {
                        allitem.map((item,index)=>(
                            index>=9 && index<=12 &&

                            <Card title={item.title} category={item.category} price={item.price} src={item.thumbnail}/>
                        ))
                    }
                    
                </Flex>
            </Container>
        </section>
    )
}

export default BestSeller