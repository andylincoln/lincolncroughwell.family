import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DateMarker extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { date } = this.props
    const day = date.getDay()
    const month = date.getMonth()

    return (
      <div className="date-wrapper">
        <time className="date" dateTime={date.toISOString()}>
          <span className="month">{month}</span>
          <span className="day">{day}</span>
        </time>
        {this.props.children}
      </div>
    )
  }
}

DateMarker.propTypes = {
  date: PropTypes.object.isRequired,
}
