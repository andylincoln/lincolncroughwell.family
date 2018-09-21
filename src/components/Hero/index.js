import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hero extends Component {
  render() {
    return (
      <div className={`hero ${this.props.color}`}>
        <h1 className="hero--heading">{this.props.heading}</h1>
        <h2 className="hero--subheading">{this.props.subheading}</h2>
      </div>
    )
  }
}

Hero.PropTypes = {
  color: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired
}
