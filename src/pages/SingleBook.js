import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

import styles from "./SingleBook.module.css";

export default function SingleBook({ match }) {
  const id = match.params.id;
  const [book, setBook] = useState({});

  async function getBook(url) {
    const response = await axios.get(url);
    setBook(response);
  }

  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
    getBook(url);
  }, [id]);

  
  let content;

  if(_.isEmpty(book)) {
    content = <h1>Loading...</h1>;
  } else {
    const {
      title,
      authors,
      publisher,
      publishedDate,
      description,
      pageCount,
      imageLinks,
      language
    } = book.data.volumeInfo;

    const img = _.get(imageLinks, "thumbnail", "/no-image.jpg");

    content = 
      <div>
        <h1>{title}</h1>
        <img src={img} alt={title} className={styles["single-book-img"]}/>
        <div>
          <h4><strong>Language</strong>: {language}</h4>
          <h4><strong>Authors</strong>: {authors}</h4>
          <h4><strong>Publisher</strong>: {publisher}</h4>
          <h4><strong>Publish Date</strong>: {publishedDate}</h4>
          <h4><strong>Pages</strong>: {pageCount}</h4>
        </div>
        <div>
          <p className={styles["content"]}>{description}</p>
        </div>
      </div>
  }

  return (
    <div className="page-container">
      <Link to="/">
        <button className={styles["back-home-btn"]}>Back Home</button>
      </Link>
      {content}
    </div>
  );
}
