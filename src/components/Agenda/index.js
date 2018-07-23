import React, { Component } from 'react'
import Link from 'gatsby-link'
import Icon from '../Icon'

export default class Agenda extends Component {
  render() {
    return (
      <section className="agenda">
        <div className="agenda-items">{this.props.children}</div>
      </section>
    )
  }
}

React.propTypes = {}
