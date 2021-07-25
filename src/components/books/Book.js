import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({id, title, img}) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img}/>
      <Link to={`/book/${id}`}>details</Link>
    </div>
  )
}
