import React from 'react'

import Hero from '../components/Hero'
import WeddingDetailsNav from '../components/WeddingDetailsNav'
import Agenda from '../components/Agenda'
import Accomodations from '../components/Accomodations'

import Header from '../components/Header'
import Footer from '../components/Footer'

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
    <hr />
    <Accomodations />
    <hr />
    <section className="directions" id="directions" />
    <hr />
    <section className="wedding-party" id="wedding-party" />
    <Footer />
  </div>
)

export default WeddingDetailsPage
