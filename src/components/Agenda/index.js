import React, { Component } from 'react';
import Link from 'gatsby-link';
import Icon from '../Icon';

export default class Agenda extends Component {
	render() {
		return <section className="agenda">{this.props.children}</section>;
	}
}

React.propTypes = {};
