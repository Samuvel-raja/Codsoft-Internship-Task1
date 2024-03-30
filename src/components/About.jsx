import React, { useEffect } from 'react'
import portimage from '../images/sam1-transformed.jpeg'
import '../styles/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'



const About = () => {
    useEffect(() => {
        AOS.init({ duration: 5000 })
    }, [])
    return (
        <>
            
            <div className="about-container" data-aos="fade-up" id="about">
                <div className="about-left-cont">
                    <img src={portimage} alt="" />
                </div>
                <div className="about-right-cont">
                    <div className="about-content" >
                        <h1>MERN Stack Developer &#128521;</h1>
                        <p>As a MERN Stack developer, my portfolio showcases a diverse range of projects demonstrating proficiency in MongoDB, Express.js, React.js, and Node.js. With a strong foundation in JavaScript, HTML/CSS, and RESTful APIs, I present innovative solutions to real-world problems through my projects. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About