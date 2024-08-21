import { createSlice } from "@reduxjs/toolkit";

const starSlice = createSlice({
  name: "star",
  initialState: {
    rating: 0,
  },
  reducers: {
    incrementRating: (state) => {
      state.rating += 1;
    },
    decrementRating: (state) => {
      state.rating -= 1;
    },
  },
});

export const { incrementRating, decrementRating } = starSlice.actions;

export default starSlice.reducer;
