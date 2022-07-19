import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: 'navSlice',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleNav(state){      
      state.isOpen = !state.isOpen;
    }
  }
})

const store = configureStore({
  reducer: {
    nav: navSlice.reducer
  }
})

export const navDispatcher = navSlice.actions;

export default store