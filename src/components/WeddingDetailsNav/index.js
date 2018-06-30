import React, { Component } from 'react';

export default class WeddingDetailsNav extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="wedding-details-nav">
				<ul>
					<li>
						<a href="#agenda"> </a>
					</li>
					<li>
						<a href="#accomodations" />
					</li>
					<li>
						<a href="#directions" />
					</li>
					<li>
						<a href="#wedding-party" />
					</li>
				</ul>
			</nav>
		);
	}
}

React.propTypes = {};
