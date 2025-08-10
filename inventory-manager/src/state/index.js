import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action) => {
      state.isSidebarCollapsed = action.payload;
    },
  },
  setIsDarkMode: (state, action) => {
    state.isDarkMode = action.payload;
  }
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;