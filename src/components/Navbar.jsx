import React from 'react'
// import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <div className="nav-links">
          {/* <Link to={'/about'} style={{textDecoration:"none",color:"black",fontWeight:900,marginRight:"20px"}}>About</Link>
          <Link to={'/skills'} style={{textDecoration:"none",color:"black",fontWeight:900,marginRight:"20px"}}>Skills</Link>
          <Link to={'/projects'} style={{textDecoration:"none",color:"black",fontWeight:900,marginRight:"20px"}}>Projects</Link> */}
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
