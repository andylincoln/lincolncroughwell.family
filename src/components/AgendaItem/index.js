import React, { Component } from 'react';
import Date from '../Date';

export default class AgendaItem extends Component {
  getImage() {
    const image = this.props.image;
    const src = image ? image.src : '';
    const alt = image ? image.alt : '';
    if (this.props.type === 'image') {
      return (
        <div className="event-image">
          <img src={src} alt={alt} />
        </div>
      );
    }

    return <div className="event-icon" />;
  }
  render() {
    const event = this.props.event;
    return (
      <div className="agenda-item">
        <div className="event">
          {this.getImage()}
          <div className="event-details">
            <h4>{event.name}</h4>
            <h5>{event.time}</h5>
            <h6>{event.description}</h6>
            <a href={event.directions_link}>Get Directions</a>
          </div>
        </div>
      </div>
    );
  }
}
