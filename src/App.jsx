import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import HeaderWrapper from './components/HeaderWrapper'

import ContentThree from './components/ContentThree'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProjectGallery from './components/ProjectGallery'
import ContactMe from './components/ContactMe'


function App() {
 

  return (
    <>
      <Router>
        <HeaderWrapper />
        <Routes>
          <Route path="/work" element={<ProjectGallery />} />
        
          <Route path="/about-me" element={<ContactMe />} />
    
          <Route path="/content-three" element={<ContentThree />} />
        </Routes>

      </Router>

        
    </>
  )
}

export default App
