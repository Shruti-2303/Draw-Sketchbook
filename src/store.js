import { configureStore } from "@reduxjs/toolkit";
import MenuItem from "./slice/menuSlice";
import ToolboxReducer from "./slice/toolBoxSlice";
export const appStore = configureStore({
  reducer: {
    menu: MenuItem,
    toolbox: ToolboxReducer,
  },
});
