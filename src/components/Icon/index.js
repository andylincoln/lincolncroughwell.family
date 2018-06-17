import React from 'react';

import MenuIcon from './MenuIcon';
import InstagramIcon from './InstagramIcon';
import BrunchIcon from './BrunchIcon';
import ChatIcon from './ChatIcon';
import ClinkingGlassesIcon from './ClinkingGlassesIcon';
import EvergreenBudsIcon from './EvergreenBudsIcon';
import FacebookIcon from './FacebookIcon';
import FacebookGroupIcon from './FacebookGroupIcon';
import FireworksIcon from './FireworksIcon';
import FloralBudsIcon from './FloralBudsIcon';
import FlowersIcon from './FlowersIcon';
import HotelIcon from './HotelIcon';
import LocationIcon from './LocationIcon';
import MapIcon from './MapIcon';
import PoppinChampagneIcon from './PoppinChampagneIcon';
import QuestionIcon from './QuestionIcon';
import RegistryIcon from './RegistryIcon';
import RingsIcon from './RingsIcon';
import RSVPIcon from './RSVPIcon';
import WeddingCakeIcon from './WeddingCakeIcon';
import CloseIcon from './CloseIcon';

export default class Icon extends React.Component {
	render() {
		const { name } = this.props;
		return this.get_svg_by_name(name);
	}

	get_svg_by_name(name) {
		switch (name) {
			case 'menu':
				return <MenuIcon />;
			case 'close':
				return <CloseIcon />;
			case 'instagram':
				return <InstagramIcon />;
				break;
			case 'brunch':
				return <BrunchIcon />;
				break;
			case 'chat':
				return <ChatIcon />;
				break;
			case 'clinking':
				return <ClinkingGlassesIcon />;
				break;
			case 'evergreen-buds':
				return <EvergreenBudsIcon />;
				break;
			case 'facebook':
				return <FacebookIcon />;
				break;
			case 'facebook-group':
				return <FacebookGroupIcon />;
				break;
			case 'fireworks':
				return <FireworksIcon />;
				break;
			case 'floral-buds':
				return <FloralBudsIcon />;
				break;
			case 'flowers':
				return <FlowersIcon />;
				break;
			case 'hotel':
				return <HotelIcon />;
				break;
			case 'location':
				return <LocationIcon />;
				break;
			case 'map':
				return <MapIcon />;
				break;
			case 'poppin-champagne':
				return <PoppinChampagneIcon />;
				break;
			case 'question':
				return <QuestionIcon />;
				break;
			case 'registry':
				return <RegistryIcon />;
				break;
			case 'rings':
				return <RingsIcon />;
				break;
			case 'rsvp':
				return <RSVPIcon />;
				break;
			case 'wedding-cake':
				return <WeddingCakeIcon />;
				break;
			default:
				return null;
		}
	}
}
