import React from 'react'
import Link from 'gatsby-link';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="main-navigation">
          <ul>
            <li>
              <Link to="/rsvp">RSVP</Link>
            </li>
            <li>
              <Link to="/wedding-details">Wedding Details</Link>
            </li>
            <li>
              <Link to="/registry">Registry</Link>
            </li>
            <li>
              <Link to="/our-story">Our Story</Link>
            </li>
            <li>
              <Link to="/things-to-do">Around Lowell</Link>
            </li>
          </ul>
        </nav>
    );
  }
}