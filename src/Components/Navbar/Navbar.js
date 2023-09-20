import React from 'react';
import './Navbar.css';
import {Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className='navbarout'>
        <nav className="navbar  navbar-expand-lg  d-flex justify-content-between w-100">
  <div className="container-fluid  nav-container" >
    <Link className="navbar-brand w-25 " to="/">Karthik</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
        <li className="nav-item">
          <Link className="nav-Link "  to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="about" smooth={true} duration={500}>AboutMe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link " to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link " to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link "to="education" smooth={true} duration={500}>Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link " to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar