import React from 'react'
import Link from 'gatsby-link';

const Nav = () => (
  <nav class="main-navigation">
      <ul>
        <li>
          <Link to="/">RSVP</Link>
        </li>
        <li>
          <Link to="/">Wedding Details</Link>
        </li>
        <li>
          <Link to="/">Registry</Link>
        </li>
        <li>
          <Link to="/">Our Story</Link>
        </li>
        <li>
          <Link to="/">Around Lowell</Link>
        </li>
      </ul>
    </nav>
)

export default Nav
