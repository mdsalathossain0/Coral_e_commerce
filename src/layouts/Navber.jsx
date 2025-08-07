import React, { useState } from 'react'
import Flex from '../components/Flex'
import List from '../components/List'
import Container from '../components/Container'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Navber = () => {

    let [show, setShow] = useState(false)

    let handleClick = () => {
        setShow(!show)
    }
    return (
        <>
            <nav className='bg-third py-7 px-4 hidden lg:block'>
                <Container>
                    <Flex className='justify-between items-center'>
                        <List text='Jewelry & Accessories' />
                        <List text='Clothing & Shoes' />
                        <List text='Home & Living' />
                        <List text='Wedding & Party' />
                        <List text='Toys & Entertainment' />
                        <List text='Art & Collectibles' />
                        <List text='Craft Supplies & Tools' />
                    </Flex>
                </Container>
            </nav>

            <nav className='bg-third py-3 block lg:hidden '>
                {
                    show ? <FaChevronUp className='absolute top-[58px] left-1/2 -transform-y-[50%]' onClick={handleClick} /> :<FaChevronDown className='absolute top-[58px] left-1/2 -transform-y-[50%]' onClick={handleClick} />  

                }
                {
                    show &&
                    <div className='bg-white absolute top-[85px]  w-full py-5'>
                        <Flex className='flex-col gap-y-5 items-center'>
                            <List text='Jewelry & Accessories' />
                            <List text='Clothing & Shoes' />
                            <List text='Home & Living' />
                            <List text='Wedding & Party' />
                            <List text='Toys & Entertainment' />
                            <List text='Art & Collectibles' />
                            <List text='Craft Supplies & Tools' />
                        </Flex>
                    </div>
                }

            </nav>
        </>
    )
}

export default Navber