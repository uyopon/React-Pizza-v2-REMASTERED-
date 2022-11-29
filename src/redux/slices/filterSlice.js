import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
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
    }
  },
})


export const { setCategory, setSortBy} = filterSlice.actions

export default filterSlice.reducer