import React from 'react';
import Link from 'gatsby-link';
import Nav from '../Nav';
import FrontPageNav from '../FrontPageNav';

const nav = function(front_page) {
  if (front_page) {
    return <FrontPageNav/>
  }
  return <Nav />
}

const Header = (props) => (
  <header className="site-header">
  {nav(props.front_page)}
</header>
)

export default Header
