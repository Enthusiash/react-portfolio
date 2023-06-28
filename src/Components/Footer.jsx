import React from 'react'

import Copyright from '../assets/copyright-content-icon.png'
import Facebook from '../assets/facebook-round-line-icon.png'
import Github from '../assets/github-icon.png'
import LinkedIn from '../assets/linkedin-round-icon.png'

import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer-section">

      <div className="section1">
        <div className="copyright-logo">
        <img className="c-logo" src={Copyright} alt='copyright'></img>
        </div>

        <p className="footer-text">2023, build and designed by Ashley G. Otchengco</p>

    </div>

      <div className="section2">
      <div className="social-icons">
      <p>ashleyotchengco@gmail.com / +63-912-217-1667</p>
      <a target="_blank" href="https://www.facebook.com/ashley.otchengco.9/"><img className="c-logo" src={Facebook} alt='facebook'></img></a>
      <a target="_blank" href="https://github.com/Syntaxsh"><img className="c-logo" src={Github} alt='github'></img></a>
      <a target="_blank" href="https://www.linkedin.com/in/ashley-otchengco-341901278/"><img className="c-logo" src={LinkedIn} alt='Linkeln'></img></a>
      </div>
      </div>

    </div>
  )
}

export default Footer