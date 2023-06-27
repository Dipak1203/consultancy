import React from 'react'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'
import Choose from '../components/Choose'
import Featured from '../components/Featured'
import About from '../components/about'

const Home = () => {
  return (
    <div className='container-fluid'>
      <HeroSection />
      <CardComponent />
      <Choose />
      <Featured />
      <About />
    </div>
  )
}

export default Home