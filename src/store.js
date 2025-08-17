import { configureStore } from '@reduxjs/toolkit'
import counterslice from './slice/counterSlice'
import breadCrum from './slice/breadCrum'
import  addtocard  from './slice/addToCard'

export default configureStore({
  reducer: {
    count: counterslice,
    bread: breadCrum,
    cart:addtocard
  },
})