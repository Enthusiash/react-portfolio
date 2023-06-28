import React from 'react';

// IMAGES //
import Ash from '../assets/AshLogo01.png';

// CSS //
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <img className="logo" onClick={()=>window.location.href="#"} src={Ash} alt="AshLogo" />

      <ul className="nav-links">

        <a href="#home" className="home">
          <li>Home</li>
        </a>

        <a href="#experience-section" className="experience">
          <li>Experiences</li>

        </a>
        <a href="#about-section" className="about">
          <li>About</li>
        </a>

      </ul>
    </nav>
  );
};

export default Navbar;
