import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { termSearched, selectSearchTerm } from "../components/books/booksSlice";
import { getBooks } from "../components/books/booksSlice";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getBooks(searchTerm));
    dispatch(termSearched(searchTerm));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}
