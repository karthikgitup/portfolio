import React, { useEffect, useState } from 'react';
import './About.css';
import AboutMe from './AboutMe';

const About = () => {
const [contentvisible,setContentvisible]=useState(false);
useEffect(()=>{
  setTimeout(()=>{
    setContentvisible(true)
  },500)
})

  return (
    <>
    <div className='about'>
      <div className='about-container'>
        <div className='about-left'>
          <h3 className={`content ${contentvisible ? 'show':""}`}>Hello, It's Me</h3>
          <h2 className={`content ${contentvisible ? 'show':""}`} style={{fontWeight:"bolder"}}><span>kar</span><span style={{color:"#ffa600",textShadow:"2px 2px 20px  #ffa600"}}>thik</span></h2>
          <h3 className={`content ${contentvisible ? 'show':""}`}> And I'm a <span style={{color:"#ffa600", fontWeight:"bold",textShadow:"4px 4px 20px  #ffa600"} }>Full-stack Web Developer</span></h3>
          <p className={`content ${contentvisible ? 'show':""}`}>I'm  a full-stack web developer on a mission to craft digital wonders. My roots trace back to a picturesque village near Thoothukudi in Tamil Nadu, India.</p>
          
        </div>
        <div className='about-right'>
         
       <img className={`imgcontent ${contentvisible ? 'show':""}`} src="https://static-00.iconduck.com/assets.00/web-developer-illustration-503x512-mega3xxj.png" />
          

        </div>

      </div>
        
    </div>
 <AboutMe />
    </>
  )
}

export default About
