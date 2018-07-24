import React, { Component } from 'react'
import Helmet from 'react-helmet'
const GOOGLE_MAPS_API_KEY = 'AIzaSyCB6CQ2mpEFZ7W8TsKKUG9DKqvUzb9goPM'

export default class Accomodations extends Component {
  constructor(props) {
    super(props)
    this.ceremonyMapRef = null
    this.receptionMapRef = null
  }

  initMaps() {
    try {
      const ceremonyMap = new google.maps.Map(this.ceremonyMapRef, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })
      const receptionMap = new google.maps.Map(this.receptionMapRef, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })
    } catch (e) {
      console.log(e)
    }
  }

  setCeremonyMapRef = (element) => {
    this.ceremonyMapRef = element
  }

  setReceptionMapRef = (element) => {
    this.receptionMapRef = element
  }

  componentDidMount = () => {
    this.initMaps()
  }

  render() {
    const ceremony = {
      heading: 'Directions to the Ceremony:',
      subheading: 'From 495:',
      description:
        'The wedding ceremony will begin at 4:00pm in the little theater of the historic Lowell Memorial Auditorium. A cocktail hour will follow so you can start partying while we get our photos taken.',
      refFunc: this.setCeremonyMapRef,
    }
    const reception = {
      heading: 'Directions to the Reception:',
      subheading: 'From 495:',
      description:
        'The wedding ceremony will begin at 4:00pm in the little theater of the historic Lowell Memorial Auditorium. A cocktail hour will follow so you can start partying while we get our photos taken.',
      refFunc: this.setReceptionMapRef,
    }

    return (
      <section className="accomodations">
        <Helmet>
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`}
            async
          />
        </Helmet>
        <DirectionsForm> </DirectionsForm>
        <DirectionsBlock {...ceremony}> </DirectionsBlock>
        <DirectionsBlock {...reception}> </DirectionsBlock>
        {this.props.children}
      </section>
    )
  }
}

const DirectionsForm = () => {
  return (
    <form className="get-directions">
      <label>Where are you coming from?</label>
      <input type="text" name="address" />
      <button className="submit" type="submit">
        Get Directions
      </button>
    </form>
  )
}

const DirectionsBlock = ({ heading, subheading, description, refFunc }) => {
  return (
    <div className="directions-block">
      <div className="steps">
        <span className="h1">{heading}</span>
        <span className="h2">{subheading}</span>
        <p>{description}</p>
      </div>
      <div className="map" ref={refFunc} />
    </div>
  )
}
