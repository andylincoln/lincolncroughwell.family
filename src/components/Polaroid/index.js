import React from 'react'
import Link from 'gatsby-link'
import Icon from '../Icon'

export default class Polaroid extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const theme = this.props.theme || 'light'
    const image = this.props.image
    const icon = this.props.icon
    const heading = this.props.heading
    const body = this.props.body
    const button = this.props.button
    const alignment = this.props.alignment
    const links = this.props.links || []
    const texture = this.props.texture

    const renderLink = button => {
      if (button) {
        if (button.href.startsWith('http')) {
          return (
            <a
              href={button.href}
              className="polaroid--button"
              target="_blank"
              rel="noref noopener"
            >
              {button.label}
            </a>
          )
        } else {
          return (
            <Link to={button.href} className="polaroid--button">
              {button.label}
            </Link>
          )
        }
      }
      return null
    }
    return (
      <div className={`polaroid ${alignment} ${theme}`}>
        <div className="polaroid--picture">
          <img src={image.src} alt={image.alt} srcSet={`${image.src2x} 2x`} />
          {icon ? (
            <div className="icon-wrapper">
              <Icon name={icon} />
            </div>
          ) : null}
        </div>
        <div className={`polaroid--content ${texture}`}>
          <h3 className="polaroid--heading">{heading}</h3>
          <p className="polaroid--body">{body}</p>
          {renderLink(button)}
        </div>
      </div>
    )
  }
}

React.propTypes = {}
