import React, { Component } from 'react'
import Link, { withPrefix } from 'gatsby-link'
import FacebookGroupIcon from '../Icon/FacebookGroupIcon'
import RSVPIcon from '../Icon/RSVPIcon'
import RegistryIcon from '../Icon/RegistryIcon'

export default class TwoCol extends Component {
  renderChild = (child, i) => {
    return (
      <div className="col" key={`two-col-${i}-${Date.now()}`}>
        {child}
      </div>
    )
  }

  render() {
    const children = this.props.children ? this.props.children : []
    const classNames = this.props.className
    return (
      <section {...this.props} className={`two-col ${classNames}`}>
        <div className="wrap">
          {' '}
          {React.Children.map(children, this.renderChild)}
        </div>
      </section>
    )
  }
}
