import React from 'react'
import Header from '../layouts/Header'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'
import Brand from '../layouts/Brand'
import Style from '../layouts/Style'
import Item from '../layouts/Item'
import Collection from '../layouts/Collection'
import BestSeller from '../layouts/BestSeller'
import Products from '../layouts/Products'

const Home = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Banner/>
    <Brand/>
    <Style/>
    <Item/>
    <Collection/>
    <BestSeller/>
    <Products/>
    </>
  )
}

export default Home