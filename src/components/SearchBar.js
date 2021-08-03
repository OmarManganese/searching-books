import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { termSearched } from "../components/books/booksSlice";
import { getBooks } from "../components/books/booksSlice";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      dispatch(getBooks(searchTerm));
      dispatch(termSearched(searchTerm));
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles["search-bar-container"]}>
      <input type="text" onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}
