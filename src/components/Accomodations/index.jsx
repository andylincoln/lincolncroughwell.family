import React, { Component } from 'react'
const GOOGLE_MAPS_API_KEY = 'AIzaSyCB6CQ2mpEFZ7W8TsKKUG9DKqvUzb9goPM'

export default class Accomodations extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const ceremony = {
      heading: 'Directions to the Ceremony:',
      subheading: 'From 495:',
      description:
        'TODO Ceremony Descriptiuon at the Methuen Memorial Music Hall',
      place_id: 'ChIJU9dRsWQH44kRwqLjWNgj_Ck',
      maps_direction_slug: 'Methuen+Memorial+Music+Hall'
    }
    const reception = {
      heading: 'Directions to the Reception:',
      subheading: 'From 495:',
      description:
        'TODO description for the reception at the Lowell Memorial Auditorium',
      place_id: 'ChIJNw0xCTyk44kROqVA-dy7sC4',
      maps_direction_slug: 'Lowell+Memorial+Auditorium'
    }

    return (
      <section className="accomodations">
        <div className="wrap">
          <DirectionsBlock {...ceremony}> </DirectionsBlock>
          <DirectionsBlock {...reception}> </DirectionsBlock>
          {this.props.children}
        </div>
      </section>
    )
  }
}

const DirectionsForm = () => {
  const getDirectionsForForm = (e, something, somethingElse) => {
    e.preventDefault()
    const googleMapsURL = `https://www.google.com/maps?saddr=My+Location&daddr=`
    // try {
    //   window.location.href=
    // } catch (e) {
    //   console.log(e)
    // }
  }
  return (
    <form
      className="get-directions"
      autoComplete="on"
      onSubmit={getDirectionsForForm}
    >
      <label htmlFor="street-address">Where are you coming from?</label>
      <input
        type="text"
        name="street-address"
        id="street-address"
        autoComplete="street-address"
      />
      <button className="submit" type="submit">
        Get Directions
      </button>
    </form>
  )
}

const DirectionsBlock = ({
  heading,
  subheading,
  description,
  place_id,
  maps_direction_slug
}) => {
  return (
    <div className="directions-block">
      <div className="steps">
        <span className="h1">{heading}</span>
        <span className="h2">{subheading}</span>
        <p>{description}</p>
        <a
          href={`https://www.google.com/maps?saddr=My+Location&daddr=${maps_direction_slug}`}
          className="directions-link"
        >
          Get Directions
        </a>
      </div>
      <div className="map-wrapper">
        <div className="responsive-iframe-wrapper">
          <iframe
            width="600"
            height="450"
            className="map-iframe"
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:${place_id}&key=${GOOGLE_MAPS_API_KEY}`}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
