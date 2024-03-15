
import React, { useState } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Overview from './Container/Overview';
import Home from './Container/Home'
import ScrollToTop from './ScrollToTop';

// import axios from 'axios'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <ScrollToTop>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<Overview />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div >
  );
}

export default App;
