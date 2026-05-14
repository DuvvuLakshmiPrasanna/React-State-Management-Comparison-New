import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Lakshmi Prasanna Duvvu',
    isLoggedIn: true,
  },
  reducers: {
    setUserName(state, action) {
      state.name = action.payload;
    },
    setLoginState(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUserName, setLoginState } = userSlice.actions;
export default userSlice.reducer;