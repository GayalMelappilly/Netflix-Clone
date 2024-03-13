
import React, { useState } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Movies from './Components/Movies/Movies';
import { originals, now_playing, ml_movies, hi_movies } from './url';
import { AppContext } from './AppContext';

// import axios from 'axios'

function App() {
  const [id, setId] = useState()
  return (
    <div className="App">
      <AppContext.Provider value={{id, setId}}>
        <NavBar />
        <Banner />
        <RowPost title='Now Playing' url={now_playing} />
        <RowPost title='Netflix Originals' url={originals} isSmall />
        <RowPost title='Mollywood Movies' url={ml_movies} isSmall />
        <RowPost title='Bollywood Movies' url={hi_movies} isSmall />

        <Router>
          <Routes>
            <Route path={'/movis/'+id} Component={Movies} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
