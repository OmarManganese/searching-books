import React from 'react'
import { useSelector } from 'react-redux';

import Book from './Book';


export default function BooksList() {
  const searchTerm = useSelector(state => state.books.searchTerm);
  const books = useSelector(state => state.books.books);
  const status = useSelector(state => state.books.status);

  console.log(!books)

  if (!searchTerm && !books) {
    return (
      <h2>Nulla</h2>
    )
  }
  
  return (
    <>
      <h2>Books</h2>
    </>
  )
}


