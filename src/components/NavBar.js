import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav>
      <div>
        <Link>Searching Books</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
