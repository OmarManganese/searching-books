import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import Book from "./Book";

import styles from "./BookList.module.css";

export default function BooksList() {
  const searchTerm = useSelector((state) => state.books.searchTerm);
  const books = useSelector((state) =>
    _.get(state, "books.books.data.items", {})
  );

  const booksTotItems = useSelector((state) =>
    _.get(state, "books.books.data.totalItems", {})
  );
  const status = useSelector((state) => state.books.status);

  let content;

  if (_.isEmpty(books) && !searchTerm) {
    content = null;
  }
  
 

  if (status === "loading") {
    content = <h2>Loading...</h2>;
  }

  if (status === "failed") {
    content = <h2>An error has occurred.<br/> Please try typing something else </h2>;
  }


  if (status === "succeeded" && !booksTotItems) {
    content = <h2>No results for this search term.<br/> Please try typing something else </h2>;
  }

  if (status === "succeeded" && booksTotItems) {
    content = (
      <MDBRow className="g-4">
        {books.map((book) => {
          const img = _.get(book, "volumeInfo.imageLinks.thumbnail", "/no-image.jpg");

          return (
          <MDBCol key={book.id} md="6" lg="4">
            <Book
              id={book.id}
              title={book.volumeInfo.title}
              img={img}
            />
          </MDBCol>
          )
        })}
      </MDBRow>
    );
  }

  return <MDBContainer breakpoint="md" className={`d-flex justify-content-center ${styles["book-list-container"]}`}>{content}</MDBContainer>;
}
