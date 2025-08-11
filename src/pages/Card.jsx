import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Image from '../components/Image'

import image1 from '../assets/12.png'

const Card = () => {
  return (
       <section className='py-10 lg:py-20 px-5 '>
  <Container>
    <Heading text='Cart' className='pb-10'/>


    <Flex className='hidden md:flex justify-between bg-third py-4 px-4 rounded-md'>
      <h5 className='text-sm lg:text-base text-black font-bold font-san w-1/4'>Product</h5>
      <h5 className='text-sm lg:text-base text-black font-bold font-san w-1/4'>Price</h5>
      <h5 className='text-sm lg:text-base text-black font-bold font-san w-1/4'>Quantity</h5>
      <h5 className='text-sm lg:text-base text-black font-bold font-san w-1/4'>Total</h5>
    </Flex>

   
      <Flex  className='flex flex-col md:flex-row items-start md:items-center border border-sixth py-5 px-4 gap-4 md:gap-0'>
        <div className='flex items-center gap-4 w-full md:w-1/4'>
          <div className='text-base text-black font-bold cursor-pointer'>x</div>
          <div className='w-[80px] h-[80px]'><Image className='w-full h-full object-cover' src={image1} /></div>
          <p className='text-base text-black font-bold'>$6</p>
        </div>

        <div className='w-full md:w-1/4 pt-2 md:pt-0'>
          <h5 className='text-base text-black font-bold'>$8</h5>
        </div>

        <div className='w-full md:w-1/4 pt-2 md:pt-0'>
          <div className='flex items-center justify-start gap-x-4 border border-sixth px-4 py-2 w-fit'>
            <p  className='cursor-pointer'>-</p>
            <p>1</p>
            <p  className='cursor-pointer'>+</p>
          </div>
        </div>

        <div className='w-full md:w-1/4 pt-2 md:pt-0'>
          <h5 className='text-base text-black font-bold'>$16</h5>
        </div>
      </Flex>
   

    <Flex className='flex-col md:flex-row justify-between items-start md:items-center gap-5 pt-6 pb-7 border border-sixth px-4'>
      <div className='flex gap-3 items-center'>
        <select className='px-4 py-2 border border-sixth' name="Size" id="Size">
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="XL">XL</option>
        </select>
        <h5 className='text-sm text-black font-bold'>Apply coupon</h5>
      </div>
      <h5 className='text-sm text-black font-bold'>Update cart</h5>
    </Flex>

    <h5 className='text-lg sm:text-xl text-black font-bold text-right pt-10 pb-4'>Cart totals</h5>

    <div className='flex justify-end'>
      <table className='w-full sm:w-2/3 lg:w-1/2 border border-black text-left'>
        <tbody>
          <tr>
            <td className='px-5 py-4 border border-black font-bold text-black'>Subtotal</td>
            <td className='px-5 py-4 border border-black textblack'>$45</td>
          </tr>
          <tr>
            <td className='px-5 py-4 border border-black font-bold text-black'>Total</td>
            <td className='px-5 py-4 border border-black text-black'>$5</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className='text-right pt-6'>
      <button className='bg-black text-white py-2 px-5 lg:px-7 font-san font-semibold text-base'>Checkout</button>
    </div>
  </Container>
</section>
  
  )
}

export default Card