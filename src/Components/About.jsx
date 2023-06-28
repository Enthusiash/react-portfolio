import React from 'react'

import '../Styles/About.css'

import Footer from '../Components/Footer'

import Basketball from '../assets/basketball.jpg'
import Code from '../assets/code-icon.png'

const About = () => {
  return (
    <div id="about-section">

      <div id="about-title">
      <h1>About</h1>
      </div>

      <div className="about-container">

       <div className="about-1stcontainer">
            <div className="basketball-logo">
              <img className="ballball" src={Basketball} alt='basketball'></img>
            </div>

            <div className="about-paragraph">
              <p>Since I was 7 years old, I love playing basketball. I gained some achievements in playing Basketball. This is one of my source of happiness up until now.</p>
            </div>
        </div>

        <div className="about-2ndcontainer">
            <div className="code-logo">
              <img className="codecode" src={Code} alt='code'></img>
            </div>

            <div className="about-paragraph">
              <p>When I came to college, I took Information Technology and that's where I learned how to code and improve as well as the basics about technology and until now I continue to pursue what I do.</p>
            </div>
        </div>

        
      </div>
    <Footer />
    </div>
  )
}

export default About
