import React from 'react'

import '../Styles/About.css'

const About = () => {
  return (
    <div id="about-section">

      <div id="about-title">
      <h1>About</h1>
      </div>

      <div className="ash-cover"></div>

      <div className="about-container">
       <div className="about-1stcontainer">
            <div className="basketball-logo">
              <span className="ballball"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5"><path d="M16.95 20.573S16.01 13.982 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073"/><path d="M21.863 12.58c-5.41-1.187-12.804 3.768-14.286 8.238m8.837-17.609c-1.488 4.42-8.74 9.303-14.125 8.242"/><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg></span>
            </div>

            <div className="about-paragraph">
              <p>Since I was 7 years old, I love playing basketball. I gained some achievements in playing Basketball. This is one of my source of happiness up until now.</p>
            </div>
        </div>

        <div className="about-2ndcontainer">
            <div className="code-logo">
              <span className="codecode"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><path d="m2.5 13.5l-2-2l2-2m3 4l2-2l-2-2"/><path d="M2.5 7.5v-6a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-3"/><path d="M8.5.5v5h5"/></g></svg></span>
            </div>

            <div className="about-paragraph">
              <p>When I came to college, I took Information Technology and that's where I learned how to code and improve as well as the basics about technology and until now I continue to pursue what I do.</p>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default About
