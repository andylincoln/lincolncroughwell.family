import React, { Component } from 'react'
import Icon from '../Icon'

export default class AgendaItem extends Component {
  renderImage = () => {
    const image = this.props.image
    const src = image ? image.src : ''
    const alt = image ? image.alt : ''
    if (this.props.type === 'image') {
      return (
        <div className="event-image">
          <img src={src} alt={alt} />
        </div>
      )
    }

    return (
      <div className="event-icon">
        <Icon name={this.props.icon} />
      </div>
    )
  }

  renderDateTime = () => {
    const { startTime, endTime } = this.props.event
    return startTime.twix(endTime).format({
      monthFormat: 'MMMM',
      dayFormat: 'Do',
      weekdayFormat: 'dddd',
      showDayOfWeek: true,
    })
  }

  renderCallToActionLink = () => {
    const { event } = this.props
    if (event.cta_link) {
      if (event.cta_link.type === 'RSVP') {
        return (
          <a className="action rsvp" href={event.cta_link.url}>
            RSVP
          </a>
        )
      }
      if (event.cta_link.type === 'Directions') {
        return (
          <a className="action rsvp" href={event.cta_link.url}>
            Get Directions
          </a>
        )
      }
    }
  }
  render() {
    const event = this.props.event
    return (
      <div className="agenda-item">
        {this.renderImage()}
        <div className="event-details">
          <h4 className="event-name">{event.name}</h4>
          <h5 className="event-time">{this.renderDateTime()}</h5>
          <h6 className="event-location">{event.location}</h6>
          <p className="event-description">{event.description}</p>
          {this.renderCallToActionLink()}
        </div>
      </div>
    )
  }
}
