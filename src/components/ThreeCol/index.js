import React from 'react'
import Link from 'gatsby-link';

const ThreeCol = (props) => (
  <div className="three-col">
    <div className="col facebook">
      <a href={props.facebook_url}>
        <span className="icon"></span>
        <span className="link-text">Join the Facebook group</span>
      </a>
    </div>
    <div className="col rsvp">
      <Link to="/rsvp">
        <span className="icon"></span>
        <span className="link-text">RSVP to the Wedding</span>
      </Link>
    </div>
    <div className="col registry">
      <Link to="/registry">
        <span className="icon"></span>
        <span className="link-text">Check out the registry</span>
      </Link>
    </div>
  </div>
)

export default ThreeCol
