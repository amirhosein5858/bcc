import { configureStore } from "@reduxjs/toolkit";

//slices
import theme from "./features/theme.slice";
//slices-end
export const store = configureStore({
  reducer: {
    theme,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
