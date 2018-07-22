import React, { Component } from 'react'
import Choices from 'choices.js'

export default class WeddingDetailsNav extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const select = document.getElementById('wedding-details-nav-select')
    new Choices(select, {
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
  }
  handleSelectOnChange(e) {
    window.location.hash = e.target.value
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
