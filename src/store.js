import { configureStore } from '@reduxjs/toolkit'
import counterslice from './slice/counterSlice'
import breadCrum from './slice/breadCrum'

export default configureStore({
  reducer: {
    count: counterslice,
    bread: breadCrum
  },
})