import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers/>
      <Testimonial />
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home
