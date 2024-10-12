import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    NewsData:[]
}
const NewsSlice = createSlice({
    name:'News',
    initialState,
    reducers:{
      getNewsData:(state,action)=>{
        state.NewsData = action.payload;
      }
    }
})

export const {getNewsData} = NewsSlice.actions;
export default NewsSlice.reducer;