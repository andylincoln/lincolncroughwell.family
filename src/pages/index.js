import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header';
import Footer from '../components/Footer';
import FrontPageHero from '../components/FrontPageHero';
import ThreeCol from '../components/ThreeCol';
import Polaroid from '../components/Polaroid';

const polaroid = {
  "image_src": "",
  "image_alt": "",
  "icon": "fireworks",
  "copy": {
    "heading": "Sarah and Andy are getting married!",
    "body": "After nine years, including two band camps, senior prom, eleven snowboard trips, college, a long distance relationship, sixteen jobs, hundreds of movies, thousands of photos, and everyone we’ve ever met asking us when we were going to get hitched, its finally happening." 
  }
}

const IndexPage = () => (
  <div className="page-template-homepage">
    <Header front_page={true} />
    <FrontPageHero heading="We're saying &ldquo;I Do&rdquo;" subheading="Methuen, Massachusetts | November 24, 2018"/>
    <ThreeCol facebook_url="/" />
    <Polaroid {...polaroid }/>
    <Footer />
  </div>
)

export default IndexPage
