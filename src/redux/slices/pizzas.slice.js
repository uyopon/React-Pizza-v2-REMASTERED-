import { createSlice ,current} from '@reduxjs/toolkit'

const initialState = {
  items : []

}
export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,

  reducers: {

    setItems (state,action){
      state.items = action.payload.items

    }
  
      }

    
  
})

export const {setItems } = pizzasSlice.actions

export default pizzasSlice.reducer



