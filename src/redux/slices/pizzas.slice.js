import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params
    const resp = await axios.get(`https://637cafc572f3ce38eaaa7e31.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search} `)
    return resp
  }
)
const initialState = {
  items: []
}
export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,

  reducers: {

    setItems(state, action) {
      console.log(action.payload)
      state.items = action.payload
    }
  },
  extraReducers: {
    [fetchPizzas.fulfilled ] : (state,action)=>{
      console.log(state)
    }
  }




})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer



