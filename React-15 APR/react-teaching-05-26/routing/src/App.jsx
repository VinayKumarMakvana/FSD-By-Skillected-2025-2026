import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
   <>
   {/* spa(Single page application)
   only one html page loads once 
   react changes components dynamically 
   without refreshing the page
    */}
    {/* 
    routing implementing steps 
    1. npm install react-router-dom
    2. create a folder named pages and create components for each page
    3. main.jsx import browser router and wrap the app component with it
    
    */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
