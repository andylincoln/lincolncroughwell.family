import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import FacebookGroupIcon from '../Icon/FacebookGroupIcon';
import RSVPIcon from '../Icon/RSVPIcon';
import RegistryIcon from '../Icon/RegistryIcon';

// const background_plaid_tartan = withPrefix(
//   'static/backgrounds/black_watch_tartan_pattern.svg'
// );
// const threeColStyle = {
//   backgroundImage: `url('${background_plaid_tartan}')`,
// };
// style={threeColStyle}
const ThreeCol = props => (
  <div className="three-col">
    <div className="col facebook">
      <a href={props.facebook_url}>
        <FacebookGroupIcon className="icon" />
        <span className="link-text">Join the Facebook group</span>
      </a>
    </div>
    <div className="col rsvp">
      <Link to="/rsvp">
        <RSVPIcon className="icon" />
        <span className="link-text">RSVP to the Wedding</span>
      </Link>
    </div>
    <div className="col registry">
      <Link to="/registry">
        <RegistryIcon className="icon" />
        <span className="link-text">Check out the registry</span>
      </Link>
    </div>
  </div>
);

export default ThreeCol;
