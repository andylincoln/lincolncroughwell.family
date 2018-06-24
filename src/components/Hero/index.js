import React from 'react';
import monogram from '../../images/svg/monogram.svg';

export default class Hero extends React.Component {
	render() {
		return (
			<div className="hero landing-hero">
				<h1 className="hero--heading">{this.props.heading}</h1>
				<h2 className="hero--subheading">{this.props.subheading}</h2>
			</div>
		);
	}
}
