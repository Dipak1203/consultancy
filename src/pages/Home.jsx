import React from 'react'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'
import Choose from '../components/Choose'
import Featured from '../components/Featured'
import About from '../components/about'
import Count from '../components/Count'
import Testimonial from '../components/Testimonial'
import Partners from '../components/Partners'

const Home = () => {
  return (
    <div className='container-fluid'>
      <HeroSection />
      <CardComponent />
      <Choose />
      <Featured />
      <About />
      <Count />
      <Testimonial />
      <Partners />
    </div>
  )
}

export default Home