import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Theme {
  name: string;
}

const initialState: Theme = {
  name: "",
};

export const ThemeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
