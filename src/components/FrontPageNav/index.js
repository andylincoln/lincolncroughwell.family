import React from 'react'
import Link from 'gatsby-link'

import Icon from '../Icon/'

export default class FrontPageNav extends React.Component {
  componentWillUpdate() {}

  menuButtonOnClick(e) {
    const expanded = e.target.getAttribute('aria-expanded')
    if (expanded === 'true') {
      return e.target.setAttribute('aria-expanded', 'false')
    }
    return e.target.setAttribute('aria-expanded', 'true')
  }

  render() {
    return (
      <nav className="main-navigation main-navigation--front-page">
        <button
          className="menu-button"
          aria-expanded="false"
          onClick={this.menuButtonOnClick.bind(this)}
        >
          <span className="a11y">Toggle to open or close the menu</span>
          <Icon name="menu" />
          <Icon name="close" />
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
        </ul>
      </nav>
    )
  }
}
