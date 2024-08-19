// src/features/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const starSlice = createSlice({
  name: "Star",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = starSlice.actions;

export default starSlice.reducer;
