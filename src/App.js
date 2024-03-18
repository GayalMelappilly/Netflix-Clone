
import React, { useState } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import About from './Container/About';
import Home from './Container/Home'
import Mylist from './Container/Mylist';
import ScrollToTop from './ScrollToTop';
import Footer from './Components/Footer/Footer';
import Browse from './Container/Browse';

// import axios from 'axios'

function App() {
  return (
    <div className="App">
      <br />
      <Router>
        <ScrollToTop>
          <NavBar />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<About />} />
            <Route path='/mylist' element={<Mylist />} />
            <Route path='/browse' element={<Browse />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
