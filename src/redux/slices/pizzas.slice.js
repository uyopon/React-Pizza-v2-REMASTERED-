import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(   //это ассинхронны экшен
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params
    const resp = await axios.get(`https://637cafc572f3ce38eaaa7e31.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search} `)
   
    return resp.data
  }
)
const initialState = {
  items: [],
  status : 'loading'
}
export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,

  reducers: {

    // setItems(state, action) {
    //   console.log(action.payload)
    //   state.items = action.payload
    // }
  },
  extraReducers: { //дл ассинронных actions   это try catch for toolkit async
    [fetchPizzas.pending ] : (state)=>{
      state.status = 'loading'
      state.items = []
      
    },
    [fetchPizzas.fulfilled ] : (state,action)=>{
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected ] : (state,action)=>{
      state.status = 'error'
      state.items = []
    }
  }


})

export const { } = pizzasSlice.actions

export default pizzasSlice.reducer



