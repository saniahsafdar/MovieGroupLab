import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from './Component/MovieForm';
// import DisplayWatchList from './Component/DisplayWatchList';
import MovieResults from './Component/MovieResults';

function App() {
  return (
    <div className="App">
      <div className="MovieFormDiv">
        <MovieForm/>
      </div>
    </div>
  );
}

export default App;
