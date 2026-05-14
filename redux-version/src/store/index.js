import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import uiReducer from './uiSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    user: userReducer,
  },
});