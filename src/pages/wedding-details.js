import React from 'react'

import Hero from '../components/Hero'
import WeddingDetailsNav from '../components/WeddingDetailsNav'
import Agenda from '../components/Agenda'
import Accomodations from '../components/Accomodations'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TwoCol from '../components/TwoCol'

const holiday_inn_phone = {
  tel: 'tel:+19786409000',
  label: '978-640-9000'
}
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
          We have blocked some rooms for you at the Holiday Inn in Tewksbury. If
          you want to stay call the number below and mention you are booking for
          the Croughwell/Lincoln Wedding.
        </p>
        <a href={holiday_inn_phone.tel} className="phone-number">
          {holiday_inn_phone.label}
        </a>
      </div>
      <div>
        <span className="h1">Parking</span>
        <p>
          For the ceremony, a parking lot is located to the left of the building
          and available at the CVS parking lot across the street. There are
          several garages to park at for the reception: The Lower Locks Parking
          Garage is located at 90 Warren Street, and is attached to UML Inn and
          Conference Center.
        </p>
      </div>
    </TwoCol>
    <Divider id="accomodations" />
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
          <li>Alexander Whiting</li>
          <li>William McAndrews</li>
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
