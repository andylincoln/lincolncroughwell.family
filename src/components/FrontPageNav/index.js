import React from 'react';
import Link from 'gatsby-link';

import Icon from '../Icon/';

export default class FrontPageNav extends React.Component {
  componentWillUpdate() {}

  render() {
    return (
      <nav className="main-navigation main-navigation--front-page">
        <button className="menu-button" aria-expanded="false">
          <span className="a11y">Toggle to open or close the menu</span>
          <Icon name="menu" />
        </button>
        <ul className="menu">
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
