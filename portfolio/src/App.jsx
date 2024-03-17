import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
