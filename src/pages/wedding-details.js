import React from 'react';
import Hero from '../components/Hero';
import WeddingDetailsNav from '../components/WeddingDetailsNav';
import Agenda from '../components/Agenda';
import AgendaItem from '../components/AgendaItem';
import Date from '../components/Date';
import Header from '../components/Header';
import Footer from '../components/Footer';

const image = {
	src: '',
	alt: '',
};

const drinks_at_old_court = {
	name: 'Casual Drinks',
	time: 'Friday, November 23, 2018 | 9–11 PM',
	location: 'Old Court Pub',
	description:
		'If you’re arriving the Friday before we would love to say hello.',
	cta_link: '#',
};

const ceremony = {
	name: 'Ceremony',
	time: 'Friday, November 23, 2018 | 9–11 PM',
	location: 'Methuen Memorial Music Hall',
	description:
		'If you’re arriving the Friday before we would love to say hello.',
	cta_link: '#',
};

const cocktail_hour = {
	name: 'Cocktail Hour',
	time: '',
	location: '',
	description:
		'If you’re arriving the Friday before we would love to say hello.',
	cta_link: '#',
};

const reception = {
	name: 'Cocktail Hour',
	time: '',
	location: '',
	description:
		'If you’re arriving the Friday before we would love to say hello.',
	cta_link: '#',
};

const brunch = {
	name: 'Sunday Brunch',
	time: '',
	location: '',
	description:
		'If you’re arriving the Friday before we would love to say hello.',
	cta_link: '#',
};

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
			<Date date={`Nov 23`}>
				<AgendaItem image={image} event={drinks_at_old_court} />
			</Date>
			<Date date={`Nov 24`}>
				<AgendaItem type="image" image={image} event={ceremony} />
				<AgendaItem type="image" image={image} event={cocktail_hour} />
				<AgendaItem type="icon" icon="cocktails" event={reception} />
			</Date>
			<Date date={`Nov 25`}>
				<AgendaItem type="icon" icon="cocktails" event={brunch} />
			</Date>
		</Agenda>
		<Footer />
	</div>
);

export default WeddingDetailsPage;
