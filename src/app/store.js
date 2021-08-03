import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "../components/books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer
  },
});
