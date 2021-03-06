import React from 'react'
import RSVPHero from '../components/RSVPHero'
import RSVPForm from '../components/RSVPForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const heading = 'We’re getting married on November 24th.'
const subheading = `
  In Methuen, there’s an amazing music hall with a two hundred-year-old organ.
  It’s beautiful and we would love for you to see it when we get married.
`

const RSVPPage = () => (
  <div className="rsvp-page">
    <Header />
    <RSVPHero heading={heading} subheading={subheading} />
    <RSVPForm />
    <Footer />
  </div>
)
export default RSVPPage
