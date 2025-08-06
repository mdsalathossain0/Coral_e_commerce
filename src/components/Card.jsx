import React from 'react'
import Flex from './Flex'
import Image from './Image'
import { FaRegHeart } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'


const Card = ({title, price, category, src }) => {
  return (
    <div className='w-[312px] h-[478px] relative group border border-[#0000001a]'>
        <div className='w-full h-[330px]'><Image className='w-full h-full' src={src}/></div>
        <p className='text-black text-base font-semibold font-san px-4 pt-8'>{title}</p>
        <Flex className='px-4 justify-between pt-5'>
            <span className='text-[#00000080] text-base font-normal font-san'>{category}</span>
            <span className='text-black text-base font-semibold font-san '>{price}</span>
        </Flex>
        <div className='absolute left-0 bottom-0 bg-black w-full h-[55px] flex justify-between items-center px-5 opacity-0 group-hover:opacity-95 group-hover:bottom-[147px] duration-500'>
            <FaRegHeart className='text-white'/> 
            <span className='flex gap-x-3 items-center'><FaBagShopping className='text-white'/> <span className='text-white text-sm font-semibold font-san'>Shop Now</span></span>
        </div>
    </div>
  )
}

export default Card