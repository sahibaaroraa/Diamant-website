import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Router,Routes} from 'react-router-dom';




function App() {

   
  return (
    <BrowserRouter>
    <Router>
    <Routes>
    <Navbar />
    </Routes>
    </Router>
    </BrowserRouter>
    
  
      
   
  )
  
  }
export default App;

  