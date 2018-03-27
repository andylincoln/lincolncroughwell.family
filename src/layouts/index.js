import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header';
import Footer from '../components/Footer';
import "../scss/main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
        <link rel="dns-prefetch" href="https://use.typekit.net"/>
        <link rel="dns-prefetch" href="https://www.eventbriteapi.com/"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <link rel="stylesheet" href="https://use.typekit.net/ivl3jxo.css"/>
      </Helmet>
    <Header />  
    {children()}
    <Footer />  
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
