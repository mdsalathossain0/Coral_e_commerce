import { configureStore } from '@reduxjs/toolkit'
import counterslice from './slice/counterSlice'

export default configureStore({
  reducer: {
    count: counterslice
  },
})