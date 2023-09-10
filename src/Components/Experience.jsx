import React from 'react'

import '../Styles/Experience.css'

import CHARS from '../assets/CHARS.png'
import SimpleCRUD from '../assets/SimpleCRUD.png'
import QA from '../assets/QAtesting.png'

import ReactIcon from '../assets/react-icon.png'
import MUI from '../assets/mui-logo.png'
import AntD from '../assets/ant-design.png'
import MongoDB from '../assets/mongodb-logo.png'
import ManualTesting from '../assets/manualTesting.png'

const Experience = () => {
  return (
    <div id="experience-section">

      <div id="experience-title">
        <h1>Experience</h1>
      </div>

      <div id="experience-body">
        <div className="first-container">
          <div className="chars-logo">
            <img className="charschars" src={CHARS} alt='chars'></img>
          </div>

          <div className="first-text">
            <h2>Camella House Interior Recommendation System</h2>
          </div>

          <div className="paragraphs">
            <p>During our Capstone, We created a system that Recommend Interior Materials based on what you want to Renovate and there are 3 types of classes u want to choose to buy such as High-end, Mid and Basic.</p>
          </div>

          <div className="frameworks">
            <div className="frameworks-logo">
              <img className="icons" src={ReactIcon} alt='react'></img>
              <img className="icons" src={MUI} alt='mui'></img>
              <img className="icons" src={AntD} alt='antd'></img>
              <img className="icons" src={MongoDB} alt='mongodb'></img>
            </div>
          </div>

          <div className="btn-btn">
            <button className="button-view">VIEW</button>
          </div>
        </div>

        <div className="second-container">
          <div className="scrud-logo">
            <img className="crudcrud" src={SimpleCRUD} alt='simpleCRUD'></img>
          </div>

          <div className="first-text">
            <h2>Simple-CRUD</h2>
          </div>

          <div className="paragraphs">
            <p>My First React Framework, Software Website that I created to enhance more my skills and abilities using React Framework.</p>
          </div>

          <div className="frameworks">
            <div className="frameworks-logo">
              <img className="icons" src={ReactIcon} alt='react'></img>
              <img className="icons" src={MUI} alt='mui'></img>
              <img className="icons" src={MongoDB} alt='mongodb'></img>
            </div>
          </div>

          <div className="btn-btn">
            <button className="button-view">VIEW</button>
          </div>
        </div>

        <div className="third-container">
          <div className="qa-logo">
            <img className="qaqa" src={QA} alt='QA'></img>
          </div>

          <div className="first-text">
            <h2>Quality Assurance Tester</h2>
          </div>

          <div className="paragraphs">
            <p>On my On-The-Job Training, I interned at BMWare Business Solution as a Quality Assurance Tester. I've been testing different kind of development such as Software Website Application, Software App and Mobile App.</p>
          </div>

          <div className="frameworks">
            <div>
              <img className="icons" src={ManualTesting} alt='manual'></img>
            </div>
          </div>

          <div className="btn-btn">
            <button className="button-view">VIEW</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
