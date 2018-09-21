import React from 'react'
import RSVPHero from '../components/RSVPHero'
import RSVPForm from '../components/RSVPForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const heading = 'Thank you!'
const subheading = `
  We've received your RSVP!
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
