import React from 'react'
import { useSelector } from 'react-redux';

import Book from './Book';


export default function BooksList() {
  const books = useSelector(state => state.books.books.items);
  
  return (
    <>
      {/* {books.map(book => <Book key={book.id} id={book.id} title={book.title} />)} */}
      <h2>Books</h2>
    </>
  )
}


