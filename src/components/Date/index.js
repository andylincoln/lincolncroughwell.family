import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Date extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { date } = this.props;
    console.log(date);
    const day = date;
    const month = date;

    return (
      <div className="date-wrapper">
        <time className="date">
          <span className="month">{month.toString()}</span>
          <span className="day">{day.toString()}</span>
        </time>
        {this.props.children}
      </div>
    );
  }
}

Date.propTypes = {
  date: PropTypes.object.isRequired,
};
