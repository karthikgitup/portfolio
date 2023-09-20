import React from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.js';


const App = () => {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
      </Router>
  
  
  )
}

export default App