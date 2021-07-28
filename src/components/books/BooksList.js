import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import Book from "./Book";

export default function BooksList() {
  const searchTerm = useSelector((state) => state.books.searchTerm);
  const books = useSelector((state) =>
    _.get(state, "books.books.data.items", {})
  );
  const status = useSelector((state) => state.books.status);

  if (_.isEmpty(books) && !searchTerm) {
    return null;
  }

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "failed") {
    return <h2>Error</h2>;
  }

  if (status === "succeeded") {
    return (
      <MDBContainer breakpoint="md">
        <MDBRow>
          {books.map((book) => (
            <MDBCol key={book.id} md="6" lg="4">
              <Book
                id={book.id}
                title={book.volumeInfo.title}
                img={book.volumeInfo.imageLinks.thumbnail}
              />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    );
  }
}
