
import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals, now_playing, ml_movies } from './url';
// import axios from 'axios'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Now Playing' url={now_playing} />
      <RowPost title='Netflix Originals' url={originals} isSmall/>
      <RowPost title='Mollywood Movies' url={ml_movies} isSmall/>
      
      
    </div>
  );
}

export default App;
