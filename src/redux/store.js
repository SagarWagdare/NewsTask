import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "./features/NewsSlice.js";
export const Store = configureStore({
  reducer: {
    news: NewsSlice,
  },
});
