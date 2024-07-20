import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageReducer';
import navReducer from "./slices/navSlice";

const store = configureStore({
  reducer: {
    images: imageReducer,
    // Add other reducers as needed
    nav: navReducer,
  },
});

export default store;