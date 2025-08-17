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
    
    increment:(state,action)=>{
        state.value.map(item=>{
            if(item.title===action.payload.title){
            item.quantity+=1
        }
        })

    },
    decrement:(state,action)=>{
        state.value.map(item=>{
            if(item.title===action.payload.title){
            if(item.quantity>1){
                item.quantity-=1
            }
        }
        })

    },
    remove:(state,action)=>{
        state.value.map((item,index)=>{
            if(item.title===action.payload.title){
            state.value.splice(index,1)
        }
        })

    },
  },
})


export const { addtocard,increment,decrement,remove} = addToCard.actions

export default addToCard.reducer