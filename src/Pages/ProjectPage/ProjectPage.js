import React, { useState } from 'react';
import { useEffect } from 'react';
import "./ProjectCard.css";
const ProjectPage=()=>{
  const [visible,setVisible]=useState(false);
  

const handleProject=()=>{
  if(window.scrollY > 1600){
    setVisible(true);


  }
}

  useEffect(()=>{
    
    window.addEventListener("scroll",handleProject);
    return ()=>{window.removeEventListener("scroll",handleProject)}
  },[])

    return (
     <> 
     <div id="projects">
     <h2 className='text-center pb-4'>Projects</h2>
     <div className={`card text-center container container-md mt-4  leftside ${visible ? "show" :""}`} style={{backgroundColor:"#ffa600"}}>
  <div className="card-body ">
    <h5 className="card-title ">FlipkartClone</h5> 
    <p className="card-text text-dark">Created a remarkable replica of the popular e-commerce giant, Flipkart, using React, Redux, and Firebase</p>
    <p className="card-text text-dark">Ensured the utmost security of user data and authentication by effectively implementing Firebase's authentication services.</p>
   
  </div>
  <div className="card-footer text-body-secondary">
  <a href="https://github.com/karthikgitup/FlipkartClone" className="btn btn-dark">GitHub Repository</a>
  </div>
</div>
<div className={`card text-center container mt-4  rightside ${visible ? "show" :""}`} style={{backgroundColor:"#ffa600"}}>
  <div className="card-body ">
    <h5 className="card-title ">Netflix Clone</h5>
    <p className="card-text text-dark">Developed a stunning Netflix clone website using cutting-edge technologies like React, Redux, and Firebase.</p>
    <p className="card-text text-dark">Overcame complex challenges related to data retrieval and rendering by seamlessly integrating API calls to fetch movie and TV show data from external sources.</p>
   
  </div>
  <div className="card-footer text-body-secondary">
  <a href="https://github.com/karthikgitup/NetflixClone" className="btn btn-dark">GitHub Repository</a>
  </div>
</div>
<div className={`card text-center container mt-4 leftside ${visible ? "show" :""}`} style={{backgroundColor:"#ffa600"}}>
  <div className="card-body ">
    <h5 className="card-title ">Mini Bus Reservation System</h5>
    <p className="card-text text-dark">Developed a practical and efficient mini Bus Reservation project using core Java.</p>
    <p className="card-text text-dark">Designed a user-friendly system for booking bus seats, showcasing my problem-solving skills and attention to detail.</p>
   
  </div>
  <div className="card-footer text-body-secondary">
  <a href="#" className="btn btn-dark">Go somewhere</a>
  </div>
</div>
<div className={`card text-center container mt-4 rightside ${visible ? "show" :""}`} style={{backgroundColor:"#ffa600"}}>
  <div className="card-body ">
    <h5 className="card-title ">Mini EB Bill Calculator</h5>
    <p className="card-text text-dark">Crafted a handy mini EB Bill calculator application using Java.</p>
    <p className="card-text text-dark">Empowered users to calculate and estimate their monthly electricity bills based on consumption data, demonstrating my commitment to creating useful, real-world solutions.</p>
   
  </div>
  <div className="card-footer text-body-secondary">
  <a href="" className="btn btn-dark">Go somewhere</a>
  </div>
</div>
</div>
</>  
    )
}

export default ProjectPage;