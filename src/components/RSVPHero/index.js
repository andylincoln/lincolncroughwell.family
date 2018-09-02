import React, { Component } from 'react'
import PropTypes from 'prop-types'
import flowers_left from '../../images/svg/rsvp_flowers_left.svg'
import flowers_right from '../../images/svg/rsvp_flowers_right.svg'
export default class RSVPHero extends Component {
  render() {
    return (
      <div className={`hero rsvp-hero`}>
        <h1 className="rsvp-hero--heading">{this.props.heading}</h1>
        <h2 className="rsvp-hero--subheading">{this.props.subheading}</h2>
        <div className="overlay">
          <div className="flowers flowers-left">
            <img src={flowers_left} alt="An illustration of flowers" />
          </div>
          <div className="flowers flowers-right">
            <img src={flowers_right} alt="An illustration of flowers" />
          </div>
        </div>
      </div>
    )
  }
}

RSVPHero.PropTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
}
