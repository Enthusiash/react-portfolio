import React from 'react'

import '../Styles/About.css'

const About = () => {
  return (
    <div id="about-section">

      <div id="about-title">
        <h1>About me</h1>
      </div>

      <div className="ash-cover"></div>

      <div className="about-container">
        <div className="about-1stcontainer">
          <div className="basketball-logo">
            <span className="ballball"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10-10.002 10c-5.524.001-10-4.477-10-10C1.999 6.476 6.476 1.998 12 1.998Zm0 1.5a8.502 8.502 0 1 0 0 17.003a8.502 8.502 0 0 0 0-17.003Zm-.004 7a.75.75 0 0 1 .744.648l.007.102l.004 5.502a.75.75 0 0 1-1.494.102l-.006-.101l-.004-5.502a.75.75 0 0 1 .75-.75Zm.005-3.497a.999.999 0 1 1 0 1.997a.999.999 0 0 1 0-1.997Z"/></svg></span>
          </div>

          <div className="about-paragraph">
            <p>I'm an enthusiastic individual with a eager to learn for web development focuses on minimalism and simplicity. Also loves to explore every single thing that piques my curiosity. When I'm not immersed in coding, you'll find me on the basketball court, where I channel my energy and competitiveness. My love for playing basketball perfectly complements my tech-savvy side, creating a well-rounded balance in my life. Whether it's crafting innovative websites or sinking hoops, I approach every endeavor with the same enthusiasm and dedication, always eager to learn and grow.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
