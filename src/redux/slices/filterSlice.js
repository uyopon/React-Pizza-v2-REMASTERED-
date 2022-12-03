import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage:1,
  
  sort: {
    name: 'популярности',
    sortProperty: '-rating',
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setCategory(state, action) {
      state.categoryId = action.payload
    },
    setSortBy(state, action) {
      state.sort=  action.payload
    },
    setCurrentPage(state,action) {
      state.currentPage=  action.payload
    }
  },
})


export const { setCategory, setSortBy,setCurrentPage} = filterSlice.actions

export default filterSlice.reducer