import React, { useState, useRef } from 'react';

// IMAGES //
import Ash from '../assets/AshLogo01.png';

// CSS //
import '../Styles/Navbar.css';

const Navbar = () => {

  const navbarRef = useRef(null);

  const [isMenuOpen, setisMenuOpen] = useState (true);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar">
      
      <img className="logo" onClick={()=>window.location.href="#"} src={Ash} alt="AshLogo" />

      <ul ref={navbarRef} className={isMenuOpen ? "nav-links" : "nav-links-mobile"}>

        <a onClick={() => toggleMenu()} href="#home" className="home">
          <li>Home</li>
        </a>

        <a onClick={() => toggleMenu()} href="#experience-section" className="experience">
          <li>Experiences</li>

        </a>
        <a onClick={() => toggleMenu()} href="#about-section" className="about">
          <li>About</li>
        </a>

      </ul>

      <span onClick={toggleMenu}>
        {isMenuOpen ?
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path fill="#DDB892" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20"><path fill="#DDB892" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83l1.41 1.41z"/></svg>}
      </span>

    </nav>
  );
};

export default Navbar;
