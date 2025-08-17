import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { IoPerson, IoSearchSharp } from 'react-icons/io5'

import Logo from '../assets/logo.png'
import { FaShoppingBag } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slice/addToCard'

const Header = () => {
    let dispatch=useDispatch()
    let data = useSelector((state) => state.cart.value)
    let [show, setShow] = useState(false)
    let handleClick = () => {
        setShow(!show)
    }

    let handleIncrement=(item)=>{
        dispatch(increment(item))
    }

    let handleDecrement=(item)=>{
        dispatch(decrement(item))
    }
    return (
        <header className='bg-third py-5 lg:py-7 px-4 border-b border-first'>

            <Container>
                <Flex className='justify-between items-center'>
                    <div ><IoSearchSharp className='text-lg' /></div>
                    <div ><Link to='/'><div className='w-[100px] lg:w-full'><Image src={Logo} /></div></Link></div>
                    <div className='flex gap-x-6 items-center'>
                        <Flex className='gap-x-3 items-center'>
                            <IoPerson />
                            <p className='text-lg text-second font-robo font-normal hidden lg:block'>Account</p>
                        </Flex>
                        <div onClick={handleClick} className='flex gap-x-3 items-center'>
                            <FaShoppingBag />
                            <p className='text-lg text-second font-robo font-normal hidden lg:block'>Shopping</p>
                        </div>
                        {
                            show &&
                            <div className='w-[250px] md:w-[500px] lg:w-[700px] h-auto bg-black absolute top-0 right-2 lg:right-5 z-10'>
                                <RxCross2 onClick={() => (setShow(!show))} className='text-xl font-bold text-white m-5' />
                                <ul className='flex justify-between md:justify-around lg:justify-around text-sm md:text-base lg:text-lg text-white font-bold border border-white py-2 px-6'>
                                    <li >Action:</li>
                                    <li>Product:</li>
                                    <li className='hidden md:block lg:block'>price:</li>
                                    <li className='hidden md:block lg:block'> Quantity:</li>
                                    <li>Subtotal:</li>
                                </ul>
                                {
                                    data.map(item => (
                                        <ul className='relative flex justify-between md:justify-around lg:justify-around items-center text-xs md:text-sm lg:text-base text-white border border-white py-2 px-6 cursor-pointer'>
                                            <li ><RxCross2 /></li>
                                            <li className='md:w-[140px] lg:w-[140px] pl-10'>{item.title}</li>
                                            <li className='md:[70px] lg:w-[70px] hidden md:block lg:block '>${item.price}</li>
                                            <li className='border border-fivth py-1 px-5 my-5 h-[35px] mr-4 hidden md:block lg:block'>
                                                <span onClick={()=>handleDecrement(item)}>-</span>
                                                <span className='px-2'>{item.quantity}</span>
                                                <span onClick={()=>handleIncrement(item)}>+</span>
                                            </li>
                                            <li className='md:w-[70px] lg:w-[70px] lg:pr-7'>$50</li>

                                        </ul>
                                    ))
                                }







                                <div className='flex gap-x-3 lg:gap-x-5 pt-12 lg:pt-20 pb-12 lg:pb-20 justify-center'>
                                    <Link onClick={() => (setShow(false))} to='/cartpage'><button className='text-sm font-bold font-san py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white'>View cart</button></Link>
                                    <button className='text-sm font-bold font-san py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white'>Checkout</button>
                                </div>
                                <p className='text-lg md:text-xl lg:text-2xl text-white font-semibold py-5 text-right pr-5 '>Total: $50</p>
                            </div>

                        }


                    </div>

                </Flex>
            </Container>

        </header >
    )
}

export default Header