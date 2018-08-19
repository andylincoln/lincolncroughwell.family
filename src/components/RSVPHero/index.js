import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RSVPHero extends Component {
  render() {
    return (
      <div className={`hero rsvp-hero`}>
        <h1 className="rsvp-hero--heading">{this.props.heading}</h1>
        <h2 className="rsvp-hero--subheading">{this.props.subheading}</h2>
      </div>
    )
  }
}

RSVPHero.PropTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
}
