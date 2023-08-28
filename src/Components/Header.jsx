import React from 'react'

import ResumeBTN from '../assets/Otchengco-Ashley-G.pdf'

// STYLE //
import  '../Styles/Home.css'

// IMAGES //
import Profile from '../assets/formalpic.png'
import PHFlag from '../assets/philippines-flag-icon.png'

const Header = () => {

  return (
    <div className="main-container">

      <div className="left-container">
        <div className="text">
          <h1>Aspiring<br/>Front-End Web Developer</h1>
          <h2>Hello! I am Otchengco, Ashley G. <span><img className="phflag" src={PHFlag} alt='Philippine Flag'></img></span></h2>
        </div>

        <div className="resume-btn">
          <a href={ResumeBTN} target='_blank'>
          <button className="resume">RESUME</button>
          </a>
        </div>
      </div>

      <div className="ashlogo">
        <img className="ashash" src={Profile} alt='profile'></img>
      </div>
                   
    </div>
  )
}

export default Header
