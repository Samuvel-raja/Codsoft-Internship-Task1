import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/Projects.css'


const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      <h1 className='proj-title' id="projects">Projects</h1>
      <div className="project-container" data-aos="fade-right">
        <div className="project-left-cont">
          <img src="https://c.tenor.com/rmNGGmy9nKgAAAAd/project-app.gif" alt="" />
        </div>
        <div className="project-right-cont">
          <div className="proj-1">
            <h4>
              <ul>
                <li><strong>LearnTech</strong>— Mastering Web Development, Step by Step <br />
                  <span>Build using Html,Css,Javascript and Bootstrap.</span></li>
                <li><strong>FashionFlex</strong>— Discover, Shop, and Be Inspired  <br />
                  <span>Build using Html,Css,Javascript and Bootstrap.</span></li>
                <li><strong>MovieMagic</strong>— Simplifying Movie Ticket Reservations  <br />
                  <span>Build using MERN Stack.</span></li>
              </ul>
            </h4>
          </div>

          <div className="proj-2">
            <h4>
            <strong>Developed a series of mini projects showcasing proficiency in HTML, CSS, and JavaScript, including but not limited to:</strong>
              <ul>
                
                <li>TodoList</li>
                <li>Simple Calculator</li>
                <li>Weather Application</li>
                <li>Drawing App</li>
                <li>Quotes Generator</li>
                <li>Counter</li>
                <li>Stopwatch</li>

              </ul>
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
