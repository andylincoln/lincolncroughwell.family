import React from 'react';

export default class MenuIcon extends React.Component {
  render() {
    return (
      <svg
        className="icon icon-menu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <title>Menu</title>
        <g transform="translate(0 -7.5 )">
          <rect width="50" height="8" transform="translate(0 15)" />
          <rect width="50" height="8" transform="translate(0 30)" />
          <rect width="50" height="8" transform="translate(0 45)" />
        </g>
      </svg>
    );
  }
}
