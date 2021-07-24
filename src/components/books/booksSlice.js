import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: {},
  status: "",
  error: null
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
})

export default booksSlice.reducer;