import { configureStore } from "@reduxjs/toolkit";
import MenuItem from "./slice/menuSlice";
export const appStore = configureStore({
  reducer: {
    menu: MenuItem,
  },
});
