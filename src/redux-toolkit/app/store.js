import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categoriesSlice";
import  commentsSlcie  from "../features/commentsSlice";
import  serviceSlice  from "../features/serviceSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    user: usersSlice,
    serv: serviceSlice,
    cat: categoriesSlice,
    com: commentsSlcie,
  }
})