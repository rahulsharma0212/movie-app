import { createSlice } from "@reduxjs/toolkit";

export const themeModelSlice = createSlice({
  name: "ThemeMode",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = themeModelSlice.actions;

export default themeModelSlice.reducer;
