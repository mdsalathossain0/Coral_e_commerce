import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { IoPerson, IoSearchSharp } from 'react-icons/io5'

import Logo from '../assets/logo.png'
import { FaShoppingBag } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='bg-white py-5 lg:py-7 px-4 border-b border-first'>

        <Container>
            <Flex className='justify-between items-center'>
                <div ><IoSearchSharp className='text-lg'/></div>
                <div ><div className='w-[100px] lg:w-full'><Image src={Logo}/></div></div>
                <div className='flex gap-x-6 items-center'>
                    <Flex className='gap-x-3 items-center'>
                        <IoPerson />
                        <p className='text-lg text-second font-robo font-normal hidden lg:block'>Account</p>
                    </Flex>
                    <Flex className='gap-x-3 items-center'>
                        <FaShoppingBag />
                        <p className='text-lg text-second font-robo font-normal hidden lg:block'>Shopping</p>
                    </Flex>
                </div>
            </Flex>
        </Container>

    </header>
  )
}

export default Header