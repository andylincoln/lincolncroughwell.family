import React from 'react';
import Link from 'gatsby-link';
import Nav from '../Nav';

const Header = (props) => (
  <header class="site-header">
  <Nav frontpage={props.frontpage}></Nav>
</header>
)

export default Header
