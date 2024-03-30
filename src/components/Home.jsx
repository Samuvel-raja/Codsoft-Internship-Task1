import React from 'react'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import About from '../components/About'
import '../styles/Home.css'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <About />
        <Projects/>
        <Skills />
        <Contact/>
       
      </div>
    </>
  )
}

export default Home