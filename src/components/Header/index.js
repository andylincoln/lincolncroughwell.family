import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header class="site-header">
    <nav class="main-navigation">
      <ul>
        <li>
          <Link to="/">RSVP</Link>
        </li>
        <li>
          <Link to="/">Wedding Details</Link>
        </li>
        <li>
          <a to="/">Registry</a>
        </li>
        <li>
          <Link to="/">Our Story</Link>
        </li>
        <li>
          <Link to="/">Around Lowell</Link>
        </li>
      </ul>
    </nav>
</header>
)

export default Header
