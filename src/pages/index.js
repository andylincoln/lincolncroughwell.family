import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FrontPageHero from '../components/FrontPageHero';
import ThreeCol from '../components/ThreeCol';
import Polaroid from '../components/Polaroid';
import image from '../static/andy_sarah_engagement_portrait.jpg';
import image2x from '../static/andy_sarah_engagement_portrait@2x.jpg';

const polaroid_announcement = {
  image: {
    src: image2x,
    src2x: image2x,
    alt: '',
  },
  icon: 'fireworks',
  heading: 'Sarah and Andy are getting married!',
  body:
    'After nine years, including two band camps, senior prom, eleven snowboard trips, college, a long distance relationship, sixteen jobs, hundreds of movies, thousands of photos, and everyone we’ve ever met asking us when we were going to get hitched, its finally happening.',
  alignment: 'left',
  button: {
    label: 'Our Story',
    href: '/our-story',
  },
};
const polaroid_location = {
  image: {
    src: image2x,
    src2x: image2x,
    alt: '',
  },
  icon: 'location',
  heading: 'The Wedding',
  body:
    'A little of Methuen and a little of Lowell. We’re getting married at the Methuen Memorial Music Hall and we’re celebrating at the Lowell Memorial Auditorium.',
  alignment: 'right',
  button: {
    label: 'More Info',
    href: '/',
  },
  texture: 'monogram',
};
const polaroid_accomodations = {
  image: {
    src: image2x,
    src2x: image2x,
    alt: '',
  },
  icon: 'hotel',
  heading: 'Accomodations',
  body:
    'You have a couple options for accomodations. You can book at the UMass Inn and Conference Center or at the Fairfield. These rooms are based on availability so don’t wait to book!',
  links: [
    { label: 'Book at the Inn and Conference Center', href: '/' },
    { label: 'Book at the Fairfield', href: '/' },
  ],
  alignment: 'left',
  button: {
    label: 'More Info',
    href: '/',
  },
  texture: 'fern',
};

const IndexPage = () => (
  <div className="front-page">
    <Header front_page={true} />
    <FrontPageHero
      heading="We're saying &ldquo;I Do&rdquo;"
      subheading={`Methuen, Massachusetts November 24, 2018`}
    />
    <ThreeCol facebook_url="/" />
    <Polaroid {...polaroid_announcement} />
    <Polaroid {...polaroid_location} />
    <Polaroid {...polaroid_accomodations} />
    <Footer />
  </div>
);

export default IndexPage;
