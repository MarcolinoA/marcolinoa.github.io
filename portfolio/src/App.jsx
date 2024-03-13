import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <div className="pages">
        <Routes>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
