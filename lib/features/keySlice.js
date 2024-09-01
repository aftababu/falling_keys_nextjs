import { createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
  name: "key",
  initialState: {
    pressedKey: {},
    currentKey: {},
    errorKey: {},
    currentKeyIndex: 0,
  },
  reducers: {
    setPressedKey: (state, action) => {
      state.pressedKey = action.payload;
    },
    setCurrentKey: (state, action) => {
      state.currentKey = action.payload;
    },
    setErrorKey: (state, action) => {
      state.errorKey = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentKeyIndex = action.payload;
    },
  },
});

export const { setPressedKey, setCurrentKey, setErrorKey ,setCurrentIndex} = keySlice.actions;

export default keySlice.reducer;
