import React from 'react'
import { Link } from 'react-router-dom';

export default function SingleBook() {
  return (
    <div>
      <Link to="/">
        <button>Back Home</button>
      </Link>
      <h1>Single Book</h1>
    </div>
  )
}

