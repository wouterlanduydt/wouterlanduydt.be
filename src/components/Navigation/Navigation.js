import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <nav role="navigation">
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

export default Navigation
