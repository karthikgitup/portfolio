import React from 'react'
import About from '../About/About'
import Skill from '../Skill/Skill'
import ProjectPage from '../ProjectPage/ProjectPage'
import Education from '../Education/Education'
import ContactPage from '../Contact/ContactPage'

const Home = () => {
  return (
    <div>
        <About/>
        <Skill />
        <ProjectPage />
        <Education />
        <ContactPage />
    </div>
  )
}

export default Home