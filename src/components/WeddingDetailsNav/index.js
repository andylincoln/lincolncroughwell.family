import React, { Component } from 'react'

if (typeof document !== 'undefined') {
  let Choices = require('choices.js')
}

export default class WeddingDetailsNav extends Component {
  constructor(props) {
    super(props)
    this.selectRef = null
    this.setSelectRef = (element) => {
      this.selectRef = element
    }
  }

  componentDidMount() {
    try {
      new Choices(this.selectRef, {
        disabled: false,
        addItems: false,
        removeItems: false,
        type: 'select-single',
        searchEnabled: false,
        choices: [
          {
            value: 'agenda',
            label: 'Agenda',
            // selected: true,
            disabled: false,
          },
          {
            value: 'accomodations',
            label: 'Accomodations',
            disabled: false,
          },
          {
            value: 'directions',
            label: 'Directions',
            disabled: false,
          },
          {
            value: 'wedding-party',
            label: 'Wedding Party',
            disabled: false,
          },
        ],
      })
    } catch (e) {
      console.log(e)
    }
  }
  handleSelectOnChange(e) {
    if (typeof window !== 'undefined') {
      window.location.hash = e.target.value
    }
  }

  render() {
    return (
      <nav className="wedding-details-nav">
        <div className="select-nav">
          <label htmlFor="wedding-details-nav" className="a11y">
            Select wedding details
          </label>
          <select
            name="wedding-details-nav"
            id="wedding-details-nav-select"
            onChange={this.handleSelectOnChange}
            ref={this.setSelectRef}
          />
        </div>
        <ul>
          <li>
            <a href="#agenda">Agenda</a>
          </li>
          <li>
            <a href="#accomodations">Accomodations</a>
          </li>
          <li>
            <a href="#directions">Directions</a>
          </li>
          <li>
            <a href="#wedding-party">Wedding Party</a>
          </li>
        </ul>
      </nav>
    )
  }
}

React.propTypes = {}
