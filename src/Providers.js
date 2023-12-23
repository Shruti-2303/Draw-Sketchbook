"use client";
import { Provider } from "react-redux";
import { appStore } from "./store";

export function Providers({ children }) {
  return <Provider store={appStore}>{children}</Provider>;
}
