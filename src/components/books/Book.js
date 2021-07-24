import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({id, title}) {
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/book/${id}`}>details</Link>
    </div>
  )
}
