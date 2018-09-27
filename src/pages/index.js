import React from 'react'
import Link, { withPrefix } from 'gatsby-link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FrontPageHero from '../components/FrontPageHero'
import ThreeCol from '../components/ThreeCol'
import Polaroid from '../components/Polaroid'
import image from '../static/andy_sarah_engagement_portrait.jpg'
import image2x from '../static/andy_sarah_engagement_portrait@2x.jpg'
import auditorium from '../static/auditorium@2x.jpg'
import hotel_image from '../static/holiday-inn.png'
import hotel_image2x from '../static/holiday-inn@2x.png'

const polaroid_announcement = {
  image: {
    src: image2x,
    src2x: image2x,
    alt: ''
  },
  icon: 'fireworks',
  heading: 'Sarah and Andy are getting married!',
  body:
    'After nine years, including two band camps, senior prom, eleven snowboard trips, college, a long distance relationship, sixteen jobs, hundreds of movies, thousands of photos, and everyone we’ve ever met asking us when we were going to get hitched, its finally happening.',
  alignment: 'left'
}
const polaroid_location = {
  image: {
    src: auditorium,
    src2x: auditorium,
    alt: ''
  },
  icon: 'location',
  heading: 'The Wedding',
  body:
    'A little of Methuen and a little of Lowell. We’re getting married at the Methuen Memorial Music Hall and we’re celebrating at the Lowell Memorial Auditorium.',
  alignment: 'right',
  button: {
    label: 'More Info',
    href: '/wedding-details'
  },
  texture: 'monogram'
}
const polaroid_accomodations = {
  theme: 'dark',
  image: {
    src: hotel_image,
    src2x: hotel_image2x,
    alt: ''
  },
  icon: 'hotel',
  heading: 'Accomodations',
  body:
    'We have blocked some rooms for you at the Holiday Inn in Tewksbury. If you want to stay call (978) 640-9000 and mention you are booking for the Croughwell/Lincoln Wedding. ',
  links: [
    { label: 'Book at the Inn and Conference Center', href: '/' },
    { label: 'Book at the Fairfield', href: '/' }
  ],
  alignment: 'left',
  texture: 'fern'
}

const IndexPage = () => (
  <div className="front-page">
    <Header front_page={true} />
    <FrontPageHero
      heading="We're saying &ldquo;I Do&rdquo;"
      subheading={`Methuen, Massachusetts November 24, 2018`}
    />
    <ThreeCol facebook_url="https://www.facebook.com/groups/lincolncroughwellwedding/" />
    <Polaroid {...polaroid_announcement} />
    <Polaroid {...polaroid_location} />
    <Polaroid {...polaroid_accomodations} />
    <Footer />
  </div>
)

export default IndexPage
