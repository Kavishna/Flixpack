import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "mylist",
  initialState: {
    favourites: [],
  },
  reducers: {
    addToFav: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFromFav: (state, action) => {
      state.favourites = state.favourites.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;

export default favSlice.reducer;
