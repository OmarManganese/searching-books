import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

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
  }, []);

  
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

    content = 
      <div>
        <h1>{title}</h1>
        <img src={imageLinks.thumbnail} />
        <div>
          <h3>Language: {language}</h3>
          <h3>Authors: {authors}</h3>
          <h3>Publisher: {publisher}</h3>
          <h3>Publish Date: {publishedDate}</h3>
          <h3>Pages: {pageCount}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
  }

  return (
    <div>
      <Link to="/">
        <button>Back Home</button>
      </Link>
      {content}
    </div>
  );
}
