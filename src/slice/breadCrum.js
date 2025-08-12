import { createSlice } from '@reduxjs/toolkit'

export const breadCrum = createSlice({
  name: 'count',
  initialState: {
    prevvalue: null,
    currentvalue: null,
  },
  reducers: {
    breadButton: (state,action) => {
        state.prevvalue=state.currentvalue
        state.currentvalue=action.payload
    },
    

  },
})


export const { breadButton} = breadCrum.actions

export default breadCrum.reducer