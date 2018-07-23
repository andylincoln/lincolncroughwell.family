import React from 'react'
import moment from 'moment'
import twix from 'twix'

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
  startTime: moment('2018-11-23 9:00 PM'),
  endTime: moment('2018-11-23 11:00 PM'),
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
  startTime: moment('2018-11-24 2:00 PM'),
  endTime: moment('2018-11-24 4:00 PM'),
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
  startTime: moment('2018-11-24 5:00 PM'),
  endTime: moment('2018-11-24 6:00 PM'),
  location: 'Lowell Memorial Auditorium',
  description:
    'Join us in the lobby of the LMA to enjoy some hors d’oeuvre before kicking off the party.',
}

const reception = {
  name: 'Reception',
  startTime: moment('2018-11-24 6:00 PM'),
  endTime: moment('2018-11-24 11:00 PM'),
  location: 'Lowell Memorial Auditorium',
  description: '',
}

const brunch = {
  name: 'Sunday Brunch',
  startTime: moment('2018-11-25 10:00 AM'),
  endTime: moment('2018-11-25 2:00 PM'),
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
      <DateMarker date={drinks_at_old_court.startTime}>
        <AgendaItem type="image" image={img_beer} event={drinks_at_old_court} />
      </DateMarker>
      <DateMarker date={ceremony.startTime}>
        <AgendaItem type="image" image={img_musichall2} event={ceremony} />
        <AgendaItem type="icon" icon="clinking" event={cocktail_hour} />
        <AgendaItem type="image" image={img_auditorium} event={reception} />
      </DateMarker>
      <DateMarker date={brunch.startTime}>
        <AgendaItem type="icon" icon="brunch" event={brunch} />
      </DateMarker>
    </Agenda>
    <Footer />
  </div>
)

export default WeddingDetailsPage
