import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavbarComponent from './components/NavbarComponent'
import './App.css'
const App = () => {
  return (
   <>
   <NavbarComponent />
    <Routes>
      <Route path='' element={<Home />}/>
    </Routes>
   </>
  )
}

export default App