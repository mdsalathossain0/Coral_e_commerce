import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import Logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Footerlist from '../components/Footerlist'

import Payment from '../assets/payment.png'
import { IoIosArrowRoundUp } from 'react-icons/io'

const Footer = () => {
  return (
    <>
    <section className='py-10 lg:py-15 px-4'>
        <Container>
            <Flex className='flex-col lg:flex-row gap-y-6 lg:gap-y-0'>
                <div className='w-full lg:w-4/12'> 
                <div> <Image src={Logo}/></div>
                <p className='text-sm lg:text-base text-[#000000bf] font-normal font-san pt-8 w-full lg:w-[392px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Flex className='pt-10 gap-x-9'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </Flex>
                </div>
                <div className='w-full lg:w-3/12'> 
                 <h3 className='text-base text-black font-semibold font-san pb-6'>CATALOG</h3>
                 <Flex className='flex-col gap-y-5'>
                    <Footerlist text='Necklaces'/>
                    <Footerlist text='hoodies'/>
                    <Footerlist text='Jewelry Box'/>
                    <Footerlist text='t-shirt'/>
                    <Footerlist text='jacket'/>
                 </Flex>
                </div>
                <div className='w-full lg:w-3/12'>
                <h3 className='text-base text-black font-semibold font-san pb-6'>ABOUT US</h3>
                 <Flex className='flex-col gap-y-5'>
                    <Footerlist text='Our Producers'/>
                    <Footerlist text='Sitemap'/>
                    <Footerlist text='FAQ'/>
                    <Footerlist text='About Us'/>
                    <Footerlist text='Terms & Conditions'/>
                 </Flex>
                </div>
                <div className='w-full lg:w-2/12'> 
                <h3 className='text-base text-black font-semibold font-san pb-6'>CUSTOMER SERVICES</h3>
                 <Flex className='flex-col gap-y-5'>
                    <Footerlist text='Contact Us'/>
                    <Footerlist text='Track Your Order'/>
                    <Footerlist text='Product Care & Repair'/>
                    <Footerlist text='Book an Appointment'/>
                    <Footerlist text='Shipping & Returns'/>
                 </Flex>
                </div>
            </Flex>
        </Container>
    </section>
    <section className='bg-black py-5'>
        <Container>
            <Flex className='flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 lg:justify-between'>
                <div>
                    <p className='text-base text-white font-normal font-san'>© 2022 Coral , Inc.</p>
                </div>
                <div>
                    
                    <Image src={Payment}/>

                </div>
                <div>
                    <span className='text-base text-white font-normal font-san flex items-center gap-x-2'>Scroll to top <IoIosArrowRoundUp className='text-lg font-bold'/></span>
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Footer