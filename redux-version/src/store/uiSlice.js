import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    notification: null,
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setNotification(state, action) {
      state.notification = action.payload;
    },
    clearNotification(state) {
      state.notification = null;
    },
  },
});

export const { setTheme, setNotification, clearNotification } = uiSlice.actions;
export default uiSlice.reducer;