import React from 'react'
import Hero from '../components/Hero'
import Polaroid from '../components/Polaroid'
import Header from '../components/Header'
import Footer from '../components/Footer'

import rome from '../images/1x/rome.jpg'
import rome2x from '../images/2x/rome@2x.jpg'
import crate_and_barrel from '../images/1x/crate_and_barrel.jpg'
import crate_and_barrel2x from '../images/2x/crate_and_barrel@2x.jpg'
import ikea from '../images/1x/ikea.jpg'
import ikea2x from '../images/2x/ikea@2x.jpg'

const GIVE_A_GIFT = 'Give a Gift'
const DONATE = 'Donate via PayPal'
const IKEA_URL =
  'https://info.ikea-usa.com/giftregistry/en-us/registry/a08a4c5a-8582-4656-ac1d-ca1d6641aefb'
const PAYPAL_URL = ''
const CRATE_BARREL_URL = ''
const polaroid_crate_and_barrel = {
  image: {
    src: crate_and_barrel,
    src2x: crate_and_barrel2x,
    alt: 'The Colliseum in Rome'
  },
  heading: 'Crate & Barrel',
  body:
    'Browse furniture, home decor, cookware, dinnerware, wedding registry and more.',
  alignment: 'right',
  button: {
    label: GIVE_A_GIFT,
    href: CRATE_BARREL_URL
  }
}
const polaroid_ikea = {
  image: {
    src: ikea,
    src2x: ikea2x,
    alt: ''
  },
  heading: 'IKEA',
  body:
    'Here are a few favorite things from IKEA. Thanks for being part of our special event!',
  alignment: 'right',
  button: {
    label: GIVE_A_GIFT,
    href: IKEA_URL
  }
}
const polaroid_rome = {
  theme: 'light',
  image: {
    src: rome,
    src2x: rome2x,
    alt: ''
  },
  heading: 'Donate to Our Honeymoon',
  body:
    'Chip in to help us pay for our trip to Italy we will be taking in the Spring.',
  links: [
    { label: 'Book at the Inn and Conference Center', href: '/' },
    { label: 'Book at the Fairfield', href: '/' }
  ],
  alignment: 'right',
  button: {
    label: DONATE,
    href: PAYPAL_URL
  }
}
const RegistryPage = () => (
  <div>
    <Header />
    <Hero
      heading="Registry"
      subheading="The best gift, of course, is your attendance, but if you would like to
        get us a gift we are registered at the places below."
      color="green"
    />
    <div className="registry-wrapper">
      <div className="registry">
        <Polaroid {...polaroid_crate_and_barrel} />
        <Polaroid {...polaroid_ikea} />
        <Polaroid {...polaroid_rome} />
      </div>
    </div>
    <Footer />
  </div>
)

export default RegistryPage
