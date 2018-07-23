import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default class DateMarker extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { date } = this.props
    const day = moment(date).format('DD')
    const month = moment(date).format('MMM')

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
