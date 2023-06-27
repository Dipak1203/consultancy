import React from 'react'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'
import Choose from '../components/Choose'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div className='container-fluid'>
      <HeroSection />
      <CardComponent />
      <Choose />
      <Featured />
    </div>
  )
}

export default Home