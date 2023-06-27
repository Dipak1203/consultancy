import React from 'react'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'

const Home = () => {
  return (
    <div className='container-fluid'>
      <HeroSection />
      <CardComponent />
    </div>
  )
}

export default Home