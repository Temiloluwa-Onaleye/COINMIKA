import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';

import Home from './pages/HomePage/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Home/>
    <Footer/>
    <Routes>
    <Route path='/'/>
    </Routes>
        
    </Router>
    
      
    </>
  );
}

export default App;
