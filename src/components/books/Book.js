import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({id}) {
  return (
    <div>
      <h2>Book {id}</h2>
      <Link to={`/book/${id}`}>details</Link>
    </div>
  )
}
