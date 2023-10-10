import React from 'react'

import contactData from '../data/contactData.jsx';

import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='contact'>
    <div className='title'>
      <h1>Let's Connect!</h1>
    </div>
    <div className='main-content'>
      <div className='content'>
          {
              contactData.map((data, index) => {
                  return (
                      <a key={index} href={data.link} target={data.target} className='contact-data'>
                          <span>{data.svg}</span>
                          <p>{data.value}</p>
                      </a>
                  )
              })
          }
      </div>
    </div>
  </div>
  )
}

export default Footer