import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { IoPerson, IoSearchSharp } from 'react-icons/io5'

import Logo from '../assets/logo.png'
import { FaChevronDown, FaChevronUp, FaShoppingBag } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove } from '../slice/addToCard'
import axios from 'axios'
import List from '../components/List'

const Header = () => {
    let dispatch = useDispatch()
    let data = useSelector((state) => state.cart.value)
    let [allitem, setAllitem] = useState([])
    let [alltotal, setAlltotal] = useState(0)
    let [show, setShow] = useState(false)
    let [find, setFind] = useState([])
    let [input, setInput] = useState('')
    let [show1, setShow1]= useState(false)
 

    let cartRef = useRef(null)

    useEffect(()=>{
       async function alldata(){
            let data =await axios.get('https://dummyjson.com/products')
            setAllitem(data.data.products)
        }
        alldata()
    },[])

    let inputRef = useRef()

    let handleFocus =()=>{
        inputRef.current.focus()
    }
    let handleNav=()=>{
        setShow1(!show1)
    }
    let handleClick = () => {
        setShow(!show)
    }

    let handleIncrement = (item) => {
        dispatch(increment(item))
    }

    let handleDecrement = (item) => {
        dispatch(decrement(item))
    }

    let handleRemove = (item) => {
        dispatch(remove(item))
    }

    let handleChange=(e)=>{
       let search = allitem.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
       setFind(search)
       setInput(e.target.value)
    }
    
    let handleProductClick=()=>{
        setInput('')
        setFind([])
    }
    useEffect(() => {
        let total = 0
        data.map(item => {
            total += item.price * item.quantity
        })
        setAlltotal(total)
    }, [data])

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (show && cartRef.current && !cartRef.current.contains(event.target)) {
                setShow(false)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [show])

    return (
        <header className='bg-third py-5 lg:py-7 px-4 border-b border-first'>

            <Container>
                <Flex className='justify-between items-center pb-5'>
                   <nav className='py-3 block lg:hidden '>
                {
                    show1 ? <FaChevronUp  onClick={handleNav} /> : <FaChevronDown  onClick={handleNav} />

                }
                {
                    show1 &&
                    <div className='bg-first absolute top-[115px] left-0 w-full py-5'>
                        <Flex className='flex-col gap-y-5 items-center'>
                            <Link onClick={()=>handleBread('jewelryaccessories')} to='/jewelryaccessories'><List text='Jewelry & Accessories' /></Link>
                            <Link onClick={()=>handleBread('clothingshoes')} to='/clothingshoes'><List text='Clothing & Shoes' /></Link>
                            <Link onClick={()=>handleBread('homeliving')} to='/homeliving'><List text='Home & Living' /></Link>
                            <Link onClick={()=>handleBread('weddingparty')} to='/weddingparty'><List text='Wedding & Party' /></Link>
                            <Link onClick={()=>handleBread('toyentertainment')} to='/toyentertainment'><List text='Toys & Entertainment' /></Link>
                            <Link onClick={()=>handleBread('artcollectibles')} to='/artcollectibles'><List text='Art & Collectibles' /></Link>
                            <Link onClick={()=>handleBread('craftsuppliestools')} to='/craftsuppliestools'><List text='Craft Supplies & Tools' /></Link>
                        </Flex>
                    </div>
                }

            </nav>

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

                            <div ref={cartRef} className='w-[250px] md:w-[500px] lg:w-[700px] h-auto bg-black absolute top-0 right-2 lg:right-5 z-10'>
                                <RxCross2 onClick={() => (setShow(!show))} className='text-xl font-bold text-white m-5' />
                                <ul className='flex justify-between md:justify-around lg:justify-around text-sm md:text-base lg:text-lg text-white font-bold border border-white py-2 px-6'>
                                    <li >Action:</li>
                                    <li>Product:</li>
                                    <li className='hidden md:block lg:block'>price:</li>
                                    <li className='hidden md:block lg:block'> Quantity:</li>
                                    <li>Subtotal:</li>
                                </ul>
                                {
                                    data.length > 0
                                        ?
                                        data.map(item => (
                                            <ul className='relative flex justify-between md:justify-around lg:justify-around items-center text-xs md:text-sm lg:text-base text-white border border-white py-2 px-6 cursor-pointer'>
                                                <li onClick={() => handleRemove(item)}><RxCross2 /></li>
                                                <li className='md:w-[140px] lg:w-[140px] pl-10'>{item.title}</li>
                                                <li className='md:[70px] lg:w-[70px] hidden md:block lg:block '>${item.price}</li>
                                                <li className='border border-fivth py-1 px-5 my-5 h-[35px] mr-4 hidden md:block lg:block'>
                                                    <span onClick={() => handleDecrement(item)}>-</span>
                                                    <span className='px-2'>{item.quantity}</span>
                                                    <span onClick={() => handleIncrement(item)}>+</span>
                                                </li>
                                                <li className='md:w-[70px] lg:w-[70px] lg:pr-7'>${(item.quantity * item.price).toFixed(2)}</li>

                                            </ul>
                                        ))
                                        :
                                        <h1 className='text-white text-xl lg:text-3xl text-center pt-25'>Cart Empty</h1>
                                }

                                <div className='flex gap-x-3 lg:gap-x-5 pt-12 lg:pt-20 pb-12 lg:pb-20 justify-center'>
                                    <Link onClick={() => (setShow(false))} to='/cartpage'><button className='text-sm font-bold font-san py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white'>View cart</button></Link>
                                    <button className='text-sm font-bold font-san py-4 px-3 md:px-8 lg:px-10 text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white'>Checkout</button>
                                </div>
                                <p className='text-lg md:text-xl lg:text-2xl text-white font-semibold py-5 text-right pr-5 '>Total: ${alltotal.toFixed(2)}</p>
                            </div>
                        }


                    </div>

                </Flex>
                 <div  className='relative w-full lg:w-1/2 mx-auto ' >
                    <input onChange={handleChange} ref={inputRef} className=' py-1 lg:py-2 px-2 border border-second rounded-lg w-full ' type="text" placeholder='search'/>
                    <IoSearchSharp onClick={handleFocus} className='text-sm lg:text-lg absolute top-1/2 -translate-y-[50%] right-3' />
                   {
                    find.length>0 &&
                    input.length>0 &&
                    
                   <div  className= 'w-full mx-auto absolute top-[50px] left-0 py-4 bg-white border border-second '>
                    {
                        find.map(item=>(
                            <Link onClick={handleProductClick} to={`/productdetail/${item.title}`}><p className='flex gap-3 items-center border-b border-second last:border-0'><Image className='w-[50px]' src={item.thumbnail}/> {item.title}</p></Link>
                        ))
                    }
                   </div>
                    
                   }
                    </div>
            </Container>

        </header >
    )
}

export default Header