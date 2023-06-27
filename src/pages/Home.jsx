import React from 'react'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'
import Choose from '../components/Choose'

const Home = () => {
  return (
    <div className='container-fluid'>
      <HeroSection />
      <CardComponent />
      <Choose />
    </div>
  )
}

export default Home