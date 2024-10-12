import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NewsData: [],
  toggleStatus: true,
  toggleFormStatus: false,
};
const NewsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {
    getNewsData: (state, action) => {
      state.NewsData = action.payload;
    },
    deleteNewsData: (state, action) => {
      state.NewsData = state.NewsData.filter(
        (newsId) => newsId.id !== action.payload
      );
    },
    toggleView: (state, action) => {
      state.toggleStatus = action.payload;
    },
    toggleForm: (state, action) => {
      state.toggleFormStatus = action.payload;
    },
  },
});

export const { getNewsData, deleteNewsData, toggleView, toggleForm } =
  NewsSlice.actions;
export default NewsSlice.reducer;
