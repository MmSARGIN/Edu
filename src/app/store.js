import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import textReducer from '../slice/textSlice';
import infoReducer from '../slice/infoSlice';
 
export default configureStore({
  reducer: {
    modal: counterReducer,
    text: textReducer,
    info: infoReducer
  },
})