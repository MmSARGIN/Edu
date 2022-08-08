import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
  },
  reducers: {
   setModal: (state)=> {
    state.value = !state.value ;
   }
  },
})

// Action creators are generated for each case reducer function
export const { setModal } = counterSlice.actions

export default counterSlice.reducer