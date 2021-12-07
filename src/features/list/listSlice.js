import { createSlice } from "@reduxjs/toolkit";

export const myListSlice = createSlice({
  name: "mylist",
  initialState: {
    mylist: [],
  },
  reducers: {
    addToMyList: (state, action) => {
      state.mylist = [...state.mylist, action.payload];
    },
    removeFromMyList: (state, action) => {
      state.mylist = state.mylist.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addToMyList, removeFromMyList } = myListSlice.actions;

export default myListSlice.reducer;
