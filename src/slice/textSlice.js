import {createSlice} from '@reduxjs/toolkit';

export const textSlice = createSlice({
      name: 'text',
        initialState: {
          login : false,
        },
        reducers: {
          setText: (text) => {
            text.login =  !text.login ;
          }
        },
      
})
export const { setText } = textSlice.actions;
export default textSlice.reducer

