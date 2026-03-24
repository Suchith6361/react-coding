import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themes: themeReducer,
    users: userReducer,
  },
});
