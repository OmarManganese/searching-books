import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const initialState = {
  searchTerm: "",
  books: {},
  status: "",
  error: null
}

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (searchTerm) => {
    const queryString = searchTerm.toLowerCase().replace(" ", "+")
    const url = `https://www.googleapis.com/books/v1/volumes?q=${queryString}&key=${googleApiKey}`;
    const response = await axios.get(url);
    return response;
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    termSearched(state, action) {
      state.searchTerm = action.payload
    }
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.status = "loading"
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.books = action.payload
    },
    [getBooks.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.payload
    },
  }
})

export const { termSearched } = booksSlice.actions;

export default booksSlice.reducer;