import React, { Component } from 'react';

export default class Polaroid extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const date = this.props.date;
		return (
			<div className="date-wrapper">
				<time className="date">{this.props.date}</time>
				{this.props.children}
			</div>
		);
	}
}

React.propTypes = {};
