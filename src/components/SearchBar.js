import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { termSearched, selectSearchTerm } from "../components/books/booksSlice";
import { getBooks } from "../components/books/booksSlice";

export default function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(termSearched(e.target.value));
  }

  console.log(searchTerm);

  // useEffect(() => dispatch(getBooks(searchTerm)), [searchTerm]);

  return (
    <form>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
