import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: {
    items: [
      {
        id: 1,
        title: 'Book a'
      },
      {
        id: 2,
        title: 'Book b'
      },
      {
        id: 3,
        title: 'Book c'
      }
    ]
  },
  status: "",
  error: null
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {}
})

export default booksSlice.reducer;