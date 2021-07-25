import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBooks } from "../components/books/booksSlice";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchTerm(e.target.value);
    dispatch(getBooks(searchTerm));
  }

  // useEffect(() => dispatch(getBooks(searchTerm)), [searchTerm]);

  return (
    <form>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
