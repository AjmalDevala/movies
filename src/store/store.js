import { configureStore } from "@reduxjs/toolkit"; // src/store/store.js
import movieReducer from "./movieSlice";
import starReducer from "./starSlice";
const store = configureStore({
  reducer: {
    movie: movieReducer,
    starSlice: starReducer,
  },
});

export default store;
