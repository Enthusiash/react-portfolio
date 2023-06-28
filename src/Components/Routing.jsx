import React from 'react'

// ROUTING //
import { Routes, Route } from 'react-router-dom'

// COMPONENTS FOR ROUTING //
import Home from '../Components/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Routing
