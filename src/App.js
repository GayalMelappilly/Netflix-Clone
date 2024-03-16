
import React, { useState } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Overview from './Container/About';
import Home from './Container/Home'
import ScrollToTop from './ScrollToTop';
import Footer from './Components/Footer/Footer';

// import axios from 'axios'

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
      <Router>
        <ScrollToTop>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<Overview />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
