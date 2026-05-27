import React from 'react'
import Banner from './Banner'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Footer from '../../elements/Footer'

const Home = () => {
  return (
    <>
      <Banner />
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Home