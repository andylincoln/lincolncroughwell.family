import React from 'react';
import monogram from '../../images/svg/monogram.svg';

export default class FrontPageHero extends React.Component {
	render() {
		return (
			<div className="front-page-hero landing-hero">
				<div className="front-page-hero front-page-hero--monogram">
					<img src={monogram} alt="The monogram for the wedding, an S intertwined with an A"/>
				</div>
				<h1 className="front-page-hero--heading">{this.props.heading}</h1>
				<h2 className="front-page-hero--subheading">{this.props.subheading}</h2>
			</div>
		);
	}
}


