import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/list/listSlice";
import favReducer from "./features/fav/favSlice";

export default configureStore({
  reducer: {
    list: listReducer,
    favourites: favReducer,
  },
});
