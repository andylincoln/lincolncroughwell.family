import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <link rel="dns-prefetch" href="https://use.typekit.net" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex" />
      <link rel="stylesheet" href="https://use.typekit.net/ivl3jxo.css" />
      <title>The wedding of Andy Lincoln &amp; Sarah Croughwell</title>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/choices.js/3.0.4/choices.min.js"
        integrity="sha256-fn42zDIZe73UQx/PAcZ9Wmq4/cUaiIzaW+wGLNuXMWI="
        crossorigin="anonymous"
        defer
      />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
