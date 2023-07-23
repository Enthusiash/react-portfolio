import React,{ useState } from 'react'

import Footer from './Components/Footer'

// FOR ROUTING //
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS FOR ROUTING //
import Navbar from './Components/Navbar'
import Routing from './Components/Routing'

const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
           <div className='main'>
             <Routing />
            </div>
            <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
