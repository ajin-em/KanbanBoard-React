import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loader: true,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
      state.loader = false;
    },
  },
});

export const { setLoginStatus } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoader = (state) => state.auth.loader;

export default authSlice.reducer;
