import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar  navbar-expand-lg  d-flex justify-content-between w-100">
  <div className="container-fluid  nav-container" >
    <Link className="navbar-brand w-25 " to="">Karthik</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
        <li className="nav-item">
          <Link className="nav-link "  to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">AboutMe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">Contact</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar