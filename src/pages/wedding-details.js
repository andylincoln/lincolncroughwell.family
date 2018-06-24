import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Polaroid from '../components/Polaroid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WeddingDetailsPage = () => (
	<div>
		<Header />
		<Hero
			heading="Wedding Details"
			subheading="Celebrations, Directions, Accomodations, and more!"
		/>
		<Footer />
	</div>
);

export default WeddingDetailsPage;
