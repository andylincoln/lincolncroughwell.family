import React from 'react'
import Hero from '../components/Hero'
import WeddingDetailsNav from '../components/WeddingDetailsNav'
import Agenda from '../components/Agenda'
import AgendaItem from '../components/AgendaItem'
import DateMarker from '../components/DateMarker'
import Header from '../components/Header'
import Footer from '../components/Footer'

import auditorium from '../static/auditorium@2x.jpg'
import beer from '../static/beer@2x.jpg'
import music_hall2 from '../static/music_hall2@2x.jpg'

const nov23 = new Date('2018-11-23T00:00:00')
const nov24 = new Date('2018-11-24T00:00:00')
const nov25 = new Date('2018-11-25T00:00:00')

const img_auditorium = {
  src: auditorium,
  alt: '',
}
const img_beer = {
  src: beer,
  alt: '',
}
const img_musichall2 = {
  src: music_hall2,
  alt: 'The organ and ceiling of the Methuen Memorial Music Hall',
}

const drinks_at_old_court = {
  name: 'Casual Drinks',
  time: 'Friday, November 23, 2018 | 9–11 PM',
  location: 'Old Court Pub',
  description:
    'If you’re arriving the Friday before we would love to say hello.',
  cta_link: {
    type: 'Directions',
    url: '#',
  },
}

const ceremony = {
  name: 'Ceremony',
  time: 'Friday, November 23, 2018 | 9–11 PM',
  location: 'Methuen Memorial Music Hall',
  description:
    'If you’re arriving the Friday before we would love to say hello.',
  cta_link: {
    type: 'Directions',
    url: '#',
  },
}

const cocktail_hour = {
  name: 'Cocktail Hour',
  time: '',
  location: '',
  description:
    'If you’re arriving the Friday before we would love to say hello.',
  cta_link: {
    type: 'Directions',
    url: '#',
  },
}

const reception = {
  name: 'Cocktail Hour',
  time: '',
  location: '',
  description:
    'If you’re arriving the Friday before we would love to say hello.',
}

const brunch = {
  name: 'Sunday Brunch',
  time: '',
  location: "The Lincoln's",
  description:
    'If you’re arriving the Friday before we would love to say hello.',
  cta_link: {
    type: 'RSVP',
    url: '#',
  },
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
    <Agenda>
      <DateMarker date={nov23}>
        <AgendaItem type="image" image={img_beer} event={drinks_at_old_court} />
      </DateMarker>
      <DateMarker date={nov24}>
        <AgendaItem type="image" image={img_musichall2} event={ceremony} />
        <AgendaItem type="icon" icon="clinking" event={cocktail_hour} />
        <AgendaItem type="icon" image={img_auditorium} event={reception} />
      </DateMarker>
      <DateMarker date={nov25}>
        <AgendaItem type="icon" icon="brunch" event={brunch} />
      </DateMarker>
    </Agenda>
    <Footer />
  </div>
)

export default WeddingDetailsPage
