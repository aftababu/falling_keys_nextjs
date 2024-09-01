import { configureStore } from "@reduxjs/toolkit";
import keySlice from "./features/keySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      key: keySlice,
    },
  });
};
