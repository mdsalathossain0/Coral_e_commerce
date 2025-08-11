import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import Container from '../components/Container'
import { FaStar } from 'react-icons/fa'
import Flex from '../components/Flex'

import image1 from '../assets/12.png'
import Image from '../components/Image'

const ProductDetails = () => {
    let [detail, setDetail]=useState(false)
    let [detail2, setDetail2]=useState(false)
    let handleDetails=()=>{
        setDetail(!detail)
    }
    let handleDetails1=()=>{
        setDetail2(!detail2)
        
    }
  return (
    <section className='py-15 lg:py-20 px-5'>
        <Container>
                
                 <>
                 <div className='w-full md:w-[400px] h-[230px] md:h-[300px] mt-10 lg:mt-20'><Image className='w-full h-full' src={image1}/></div>
                 <h4 className='text-2xl md:text-[28px] lg:text-[39px] text-sblack font-bold font-san pt-5'>Title</h4>
            <Flex className='gap-x-6 items-center pt-4 pb-6'>
                <ul className='flex gap-x-[2px] '>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                </ul>
                <p className='text-sm text-fivth font-normal font-san'>1 Review</p>
            </Flex>
            <Flex className=' gap-x-[22px] items-center pb-7 border-b-3 border-sixth w-full lg:w-[49%]'>
                <h5 className= 'text-sm lg:text-base text-fivth font-normal font-san'><del>$88.00</del></h5>
                <h5 className='text-base md:text-lg lg:text-xl text-sblack font-bold font-san'>$5</h5>
            </Flex>
            <Flex className='gap-x-13 items-center pt-14'>
                <h4 className='text-sm lg:text-base text-sblack font-bold font-san leading-6'>COLOR:</h4>
                <ul className='flex gap-x-4'>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#979797] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#FF8686] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#7ED321] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#B6B6B6] hover:scale-[1.5] duration-300'></li>
                    <li className='w-[20px] h-[20px] rounded-full bg-[#15CBA5] hover:scale-[1.5] duration-300'></li>
                </ul>
            </Flex>
            <Flex className='gap-x-[75px] items-center pt-14'>
                <h4 className='text-sm lg:text-base text-sblack font-bold font-san leading-6'>SIZE:</h4>
                <select className='py-2 px-8 border border-sixth'>
                    <option value="S">S</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </Flex>
            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-full lg:w-[49%]'>
                <h4 className='text-sm lg:text-base text-sblack font-bold font-san leading-6'>QUANTITY:</h4>
                <Flex className='gap-x-9 py-2 px-8 border border-sixth '>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </Flex>
            </Flex>
            <Flex className='gap-x-7 items-center pt-14 pb-7 border-b-3 border-sixth w-full lg:w-[49%]'>
                <h4 className='text-sm lg:text-base text-sblack font-bold font-san leading-6'>STATUS:</h4>
                <p className='text-base text-black font-normal font-san leading-7'>In Stock</p>
                
            </Flex>
            
            <div className='border-b-3 border-black w-full lg:w-[49%] pb-5'>
                <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7  '>
                <h4 className='text-sm lg:text-base text-sblack font-bold font-san leading-6'>FEATURES & DETAILS</h4>
                <div onClick={handleDetails}>{detail ? <RxCross2 className='text-xl text-sblack font-bold'/>:<MdAdd  className='text-xl text-second font-bold'/> } </div>
            </Flex>
                    {
                        detail && 
                        <>
                        <ul className='flex flex-col gap-y-5'>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-san leading-8'>Brand: yes</li>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-san leading-8'>Model: 7736</li>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-san leading-8'>Weight: 100 gm</li>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-san leading-8'>Warranty: no</li>
                        </ul>
                        </>
                    }
            </div>
            <div className='border-b-3 border-sixth w-full lg:w-[49%] pb-5'>
                <Flex className='justify-between  gap-x-7 items-center pt-14 pb-7 '>
                <h4 className='text-sm lg:text-base text-sblack font-bold font-san leading-6'>SHIPPING & RETURNS</h4>
                <div onClick={handleDetails1}>{detail2 ? <RxCross2 className='text-xl text-sblack font-bold'/>:<MdAdd  className='text-xl text-second font-bold'/> }</div>
            </Flex>
             {
                detail2 && 
                <>
                <ul className='flex flex-col gap-y-5'>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-san leading-8'>ShippingInformation: hmmm</li>
                        <li className='list-none text-sm lg:text-base text-black font-normal font-san leading-8'>ReturnPolicy: hello</li>
                        </ul>
                </>
             }
            </div>
            <p className='w-full lg:w-[49%] text-sm lg:text-base text-black font-normal font-san leading-8 pt-7 pb-15 lg:pb-[122px]'>hello</p>
            <Flex className='gap-x-15 pb-10'>
                <div >
                    <h5  className='text-xl text-black font-normal font-san leading-7'>Description</h5>
                    
                </div>
                <h5  className='text-xl text-sblack font-bold font-san leading-7'>Reviews (1)</h5>
            </Flex>
            <p className='text-sm text-black font-normal font-san leading-7 pb-4 border-b-2 border-sixth'>1 review for Product</p>
            <Flex className='flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between lg:items-center pt-4 '>
                <div className='flex items-center gap-x-9'>
                   
               
                    <ul className='flex gap-x-[2px] '>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                    <li className='text-sm text-[#FFD881]'><FaStar /></li>
                </ul>
                
                </div>
                <div>
                    <p className='text-base text-black font-normal font-san'>6 months ago</p>
                </div>
            </Flex>
           
            
                </>
                
            
        

            
            
            
        </Container>
    </section>
  )
}

export default ProductDetails