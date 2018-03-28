import React from 'react'

export default class FrontPageHero extends React.Component {

	render() {
		return (
			<div className="front-page-hero">
				<h1>{this.props.heading}</h1>
				<h2>{this.props.subheading}</h2>
			</div>
		);
	}
}


