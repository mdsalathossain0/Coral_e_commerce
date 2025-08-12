import React, { useState } from 'react'
import Flex from '../components/Flex'
import List from '../components/List'
import Container from '../components/Container'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { breadButton } from '../slice/breadCrum'

const Navber = () => {
    let dispatch=useDispatch()
    let [show, setShow] = useState(false)

    let handleClick = () => {
        setShow(!show)
    }

    let handleBread=(item)=>{
        dispatch(breadButton(item))
    }
    return (
        <>
            <nav className='bg-third py-7 px-4 hidden lg:block'>
                <Container>
                    <Flex className='justify-between items-center'>
                         <Link onClick={()=>handleBread('jewelryaccessories')} to='/jewelryaccessories'><List text='Jewelry & Accessories' /></Link>
                            <Link onClick={()=>handleBread('clothingshoes')} to='/clothingshoes'><List text='Clothing & Shoes' /></Link>
                            <Link onClick={()=>handleBread('homeliving')} to='/homeliving'><List text='Home & Living' /></Link>
                            <Link onClick={()=>handleBread('weddingparty')} to='/weddingparty'><List text='Wedding & Party' /></Link>
                            <Link onClick={()=>handleBread('toyentertainment')} to='/toyentertainment'><List text='Toys & Entertainment' /></Link>
                            <Link onClick={()=>handleBread('artcollectibles')} to='/artcollectibles'><List text='Art & Collectibles' /></Link>
                            <Link onClick={()=>handleBread('craftsuppliestools')} to='/craftsuppliestools'><List text='Craft Supplies & Tools' /></Link>
                    </Flex>
                </Container>
            </nav>

            <nav className='bg-third py-3 block lg:hidden '>
                {
                    show ? <FaChevronUp className='absolute top-[58px] left-1/2 -transform-y-[50%]' onClick={handleClick} /> : <FaChevronDown className='absolute top-[58px] left-1/2 -transform-y-[50%]' onClick={handleClick} />

                }
                {
                    show &&
                    <div className='bg-first absolute top-[85px]  w-full py-5'>
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
        </>
    )
}

export default Navber