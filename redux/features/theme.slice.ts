import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Theme {
  name: 'dark'|'light';
}

const initialState: Theme = {
  name: "dark",
};

export const ThemeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'dark'|'light'>) => {
      state.name = action.payload;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
