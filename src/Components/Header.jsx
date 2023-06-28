import React from 'react'

// STYLE //
import  '../Styles/Home.css'

// IMAGES //
import Profile from '../assets/formalpic.png'

const Header = () => {

  return (
    <div className="main-container">

      <div className="ashlogo">
        <img className="ashash" src={Profile} alt='profile'></img>
      </div>

      <div className="text">
        <h1>Hi, I'm Ashley G. Otchengco.</h1>
        <h2>Aspiring Front End Web Developer</h2>
      </div>

      <div className="resume-btn">
        <button className="resume">Resume</button>
      </div>
                   
    </div>
  )
}

export default Header
