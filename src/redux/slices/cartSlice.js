import { createSlice ,current} from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: [],
  
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem(state, action) {

      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if (findItem) findItem.count++
      else { state.items.push({ ...action.payload, count: 1 }) }

      state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0)
    },
    removeItem(state, action) { ///не работает
 
      // const findItem = state.items.find(obj => obj.id === action.payload.id)
      // state.totalPrice =  (state.totalPrice -findItem.count*findItem.price)
      state.items = state.items.filter((obj) => obj.id !== action.payload)

    },

    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
    plusItem(state,action){

      const findItem = state.items.find(obj => obj.id === action.payload)
      if (findItem) findItem.count++

      state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0)
    },
    minusItem(state,action){

      const findItem = state.items.find(obj => obj.id === action.payload)
      if (findItem) findItem.count--

      state.totalPrice = state.items.reduce((sum, obj) => sum - (obj.price * obj.count), 0)

    },
  },
})

export const { addItem, removeItem, clearItems,plusItem,minusItem} = cartSlice.actions

export default cartSlice.reducer
















