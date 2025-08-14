import React from 'react'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ClothingShoes from './pages/ClothingShoes';
import HomeLiving from './pages/HomeLiving';
import WeddingParty from './pages/WeddingParty';
import ToysEntertainment from './pages/ToysEntertainment';
import ArtCollectibles from './pages/ArtCollectibles';
import CraftSuppliesTools from './pages/CraftSuppliesTools';
import JewelryAccessories from './pages/JewelryAccessories';
import RootLayout from './layouts/RootLayout';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout/>}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/cartpage" element={<CartPage />}></Route>
    <Route path="/jewelryaccessories" element={<JewelryAccessories />}></Route>
    <Route path="/clothingshoes" element={<ClothingShoes />}></Route>
    <Route path="/homeliving" element={<HomeLiving />}></Route>
    <Route path="/weddingparty" element={<WeddingParty />}></Route>
    <Route path="/toyentertainment" element={<ToysEntertainment />}></Route>
    <Route path="/artcollectibles" element={<ArtCollectibles />}></Route>
    <Route path="/craftsuppliestools" element={<CraftSuppliesTools />}></Route>
    <Route path="/productdetail/:title" element={<ProductDetails />}></Route>
    </Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App