import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function SingleBook({ match }) {
  const bookId = Number(match.params.id);
 
  const book = useSelector(state => state.books.books.items.find(book => book.id === bookId));

  return (
    <div>
      <Link to="/">
        <button>Back Home</button>
      </Link>
      <h1>{book.title}</h1>
    </div>
  )
}

