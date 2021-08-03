import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { termSearched } from "../components/books/booksSlice";
import { getBooks } from "../components/books/booksSlice";

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
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
    <form onSubmit={handleSubmit}>
      <MDBContainer breakpoint="md">
        <MDBRow>
          <MDBCol md="6">
            <input type="text" onChange={handleChange} className="search-bar" />
          </MDBCol>
          <MDBCol md="6">
            <button>Search</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}
