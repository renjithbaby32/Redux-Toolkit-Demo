import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetails from './components/moviedetails/MovieDetails';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path={'/'} element={<Home />}></Route>
          <Route path={'/movie/:omdbid'} element={<MovieDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
