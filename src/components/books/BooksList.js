import React from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Book from './Book';


export default function BooksList() {
  const searchTerm = useSelector(state => state.books.searchTerm);
  const books = useSelector(state => _.get(state, "books.books.data.items", {}));
  const status = useSelector(state => state.books.status);

  if (_.isEmpty(books) && !searchTerm) {
    return (
      <h2>Nulla</h2>
    )
  }

  if (status === "loading") {
    return (
      <h2>Loading...</h2>
    )
  }
  
  if (status === "failed") {
    return (
      <h2>Error</h2>
    )
  }
  
  if (status === "succeeded") {
    return (
      <h2>Books</h2>
    )
  }

}


