// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Import default storage (localStorage)
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import movieReducer from "./movieSlice";
import starReducer from "./starSlice";

// Combine the reducers
const rootReducer = combineReducers({
  movie: movieReducer,
  star: starReducer,
});

// Configure Redux Persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movie", "star"], // Optional: specify reducers you want to persist
  debug: true,
  // blacklist: ["someOtherReducer"], // Optional: specify reducers you don't want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Uncomment this if you encounter serialization issues
    }),
});

export const persistor = persistStore(store); // Create a persistor
export default store;
