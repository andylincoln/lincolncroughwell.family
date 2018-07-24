import React from 'react'

import Hero from '../components/Hero'
import WeddingDetailsNav from '../components/WeddingDetailsNav'
import Agenda from '../components/Agenda'
import Accomodations from '../components/Accomodations'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TwoCol from '../components/TwoCol'

const WeddingDetailsPage = () => (
  <div>
    <Header />
    <Hero
      heading="Wedding Details"
      subheading="Celebrations, Directions, Accomodations, and more!"
      color="green"
    />
    <WeddingDetailsNav />
    <Agenda />
    <Divider />
    <TwoCol className="directions" id="directions">
      <div>
        <span className="h1">Hotel</span>
        <p>
          We have blocked some rooms for you at the UMass Lowell Inn and
          Conference Center. Its in walking distance from the venue! When you
          reserve your room mention that its our wedding.
        </p>
        <a href="tel:" className="phone-number">
          Call 555-555-5555
        </a>
      </div>
      <div>
        <span className="h1">Transportation</span>
        <p>
          Although you can walk fromt he hotel to the venue, we understand that
          if its your first time in the Mill City it can be a little
          intimidating so we’ll have a shuttle that will make rounds from the
          hotel to the venue throughout the course of the night
        </p>
      </div>
    </TwoCol>
    <Divider />
    <Accomodations />
    <Divider />
    <TwoCol className="wedding-party" id="wedding-party">
      <div>
        <span className="h1">Bridesmaids</span>
        <ul>
          <li>Nicole Lynch, Maid of Honor</li>
          <li>Kelsey Barowich</li>
          <li>Dena DiPardo</li>
          <li>Nicole Dubé</li>
          <li>Liz Lincoln Gavriel</li>
          <li>Molly Sheehan</li>
        </ul>
      </div>
      <div>
        <span className="h1">Groomsmen</span>
        <ul>
          <li>Max Markmanrud, Best Person</li>
          <li>Anthony Ferranti</li>
          <li>Thomas Emery</li>
          <li>Miguel Landestoy</li>
          <li>William McAndrews</li>
          <li>Alexander Whiting</li>
        </ul>
      </div>
    </TwoCol>
    <Footer />
  </div>
)

const Divider = () => {
  return (
    <div className="divider">
      <hr />
    </div>
  )
}

export default WeddingDetailsPage
