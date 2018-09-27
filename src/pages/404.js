import React from 'react'
import Header from '../components/Header'
import FrontPageHero from '../components/FrontPageHero'
import Footer from '../components/Footer'
const NotFoundPage = () => (
  <div className="404-page">
    <Header />
    <FrontPageHero
      heading="404 Page not found"
      subheading={`Sorry about that! Looks like we screwed up somehow`}
    />
    <Footer />
  </div>
)

export default NotFoundPage
