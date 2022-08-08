import {createSlice} from '@reduxjs/toolkit';

export const infoSlice = createSlice({
    name: 'info',
      initialState: {
        default : {
            email: 'melih',
            password: 'sargın',
        }
      },
      reducers: {
        setInfo: (info, action) => {
          info.default.email = action.payload.email;
          info.default.password = action.payload.password;
        }

      },
    
})
export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer