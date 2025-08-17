import { createSlice } from '@reduxjs/toolkit'

export const addToCard = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocard: (state,action) => {
        
        let allitem=state.value.find(item=>item.title===action.payload.title)

        allitem ? allitem.quantity+=1 : state.value.push({...action.payload, quantity:1})
        
    },
    

  },
})


export const { addtocard} = addToCard.actions

export default addToCard.reducer