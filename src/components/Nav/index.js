import React from 'react'
import Link from 'gatsby-link'
import Icon from '../Icon/'
import monogram_black from '../../images/svg/monogram_black.svg'

export default class Nav extends React.Component {
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
          <li className="page--home">
            <Link to="/" className="page--home">
              <img src={monogram_black} alt="Home" />
              Home
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
        </ul>
      </nav>
    )
  }
}
