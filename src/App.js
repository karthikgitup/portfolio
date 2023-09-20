import React from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.js';
import AboutMe from './Pages/About/AboutMe.js';
import Skill from './Pages/Skill/Skill.js';
import ProjectPage from './Pages/ProjectPage/ProjectPage.js';

const App = () => {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/skills' element={<Skill />} />
          <Route path='/projects' element={<ProjectPage />} />
        </Routes>
      </Router>
  
  
  )
}

export default App