import React from 'react'

import ResumeBTN from '../assets/RESUME_OtchengcoAshleyG.pdf'

// STYLE //
import '../Styles/Home.css'

// IMAGES //
import Profile from '../assets/formalpic.png'

const Header = () => {

  return (
    <div className="main-container">

      <div className="ashlogo">
        <img className="ashash" src={Profile} alt='profile'></img>
      </div>

      <div className="right-container">
        <div className="text">
          <h1>Hello!<br />I am Otchengco, Ashley G.</h1>
          <h2>Aspiring Front-End Web Developer</h2>
        </div>

        <div className="resume-btn">
          <a href={ResumeBTN} target='_blank'>
            <button className="resume">DOWNLOAD CV</button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Header
