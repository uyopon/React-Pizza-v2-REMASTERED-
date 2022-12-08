import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem(state, action) {

      // state.items.push(action.payload)
      // state.totalPrice = state.items.reduce((sum,obj)=> sum+ obj.price,0)

      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if (findItem) findItem.count++
      else { state.items.push({ ...action.payload, count: 1 }) }

      state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0)
    },
    removeItem(state, action) {
      state.items.filter(obj => obj.id !== action.payload)
    },

    clearItems(state) {
      state.items = []
    },
    plusItem(state,action) {

      console.log(state.items)
      
      const finded = state.items.find(( obj) => obj.id===action.payload)

    },
    minusItem(state,action) {
      
    },

  },
})


export const { addItem, removeItem, clearItems,plusItem,minusItem } = cartSlice.actions

export default cartSlice.reducer