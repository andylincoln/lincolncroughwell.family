import React from 'react'
import Link from 'gatsby-link'

import Icon from '../Icon/'
// import monogram from '../../images/svg/monogram.svg';

export default class Nav extends React.Component {
  componentDidMount() {
    console.log(window.location.pathname)
  }

  currentPage(path) {
    if (typeof window !== 'undefined' && window.location.pathname == path) {
      return 'page--current'
    }
    return 'page'
  }
  menuButtonOnClick(e) {
    const expanded = e.target.getAttribute('aria-expanded')
    if (expanded === 'true') {
      return e.target.setAttribute('aria-expanded', 'false')
    }
    return e.target.setAttribute('aria-expanded', 'true')
  }

  render() {
    return (
      <nav className="main-navigation main-navigation--interior">
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
            <Link to="/" className="page--home">
              <img src="" alt="Home" />
            </Link>
          </li>
          <li>
            <Link
              to="/rsvp"
              className={`page--rsvp ${this.currentPage('/rsvp')}`}
            >
              RSVP
            </Link>
          </li>
          <li>
            <Link
              to="/wedding-details"
              className={this.currentPage('/wedding-details')}
            >
              Wedding Details
            </Link>
          </li>
          <li>
            <Link to="/registry" className={this.currentPage('/registry')}>
              Registry
            </Link>
          </li>
          <li>
            <Link to="/our-story" className={this.currentPage('/our-story')}>
              Our Story
            </Link>
          </li>
          <li>
            <Link
              to="/things-to-do"
              className={this.currentPage('/things-to-do')}
            >
              Around Lowell
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
