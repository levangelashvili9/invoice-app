import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isDarkMode: boolean;
};

const initialState: InitialState = {
  isDarkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
