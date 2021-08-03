import React from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/books/BooksList";

export default function Home() {
  return (
    <>
      <SearchBar />
      <BookList />
    </>
  );
}
