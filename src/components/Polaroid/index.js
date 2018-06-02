import React from 'react';
import Link from 'gatsby-link';
import Icon from '../Icon';

export default class Polaroid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const theme = this.props.theme || 'light';
    const image = this.props.image;
    const icon = this.props.icon;
    const heading = this.props.heading;
    const body = this.props.body;
    const button = this.props.button;
    const alignment = this.props.alignment;
    const links = this.props.links || [];
    const texture = this.props.texture;
    return (
      <div className={`polaroid ${alignment} ${theme}`}>
        <div className="polaroid--picture">
          <img src={image.src} alt={image.alt} />
          <div className="icon-wrapper">
            <Icon name={icon} />
          </div>
        </div>
        <div className={`polaroid--content ${texture}`}>
          <h3 className="polaroid--heading">{heading}</h3>
          <p className="polaroid--body">{body}</p>
          {/* {TODO ADD links} */}
          <Link to={button.href} className="polaroid--button">
            {button.label}
          </Link>
        </div>
      </div>
    );
  }
}

React.propTypes = {};
