import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import self  from '../../photos/self.png';
import { Link } from 'react-router-dom';
const AboutMe = () => {
    const [text,setText]=useState('');
    const aboutme="Hello! I'm Karthik , a passionate and dedicated Front-End Developer with a strong foundation in web development and a keen interest in crafting exceptional digital experiences. My goal is to leverage my skills and knowledge to contribute to your organization and make my dreams in the world of technology a reality."
    const handleScroll=()=>{
        if (window.scrollY > 250) {
            let currentIndex = 0;
            const interval = setInterval(() => {
              if (currentIndex <= aboutme.length) {
                setText(aboutme.substring(0, currentIndex));
                currentIndex++;
              } else {
                clearInterval(interval);
              }
            }, 25); 
            window.removeEventListener('scroll', handleScroll);
          }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=>{window.removeEventListener("scroll",handleScroll)}
    },[])
    
    
    
    return (
    <div>
           <div className='aboutme'>
      <div className='aboutme-container'>
        <div className='aboutme-left'>
            <div className='image-container'>
                <img src={self} alt="...." />
            </div>


        </div>
        <div className='aboutme-right'>
          <h2>About Me</h2>
          <h4>Full Stack Web Developer!</h4>
          <p>{text}</p>
          <Link className='viewlink' to="">View More</Link>

        </div>

      </div>

    </div>
 
    </div>
  )
}

export default AboutMe