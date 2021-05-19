import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from './Component/MovieForm';
import DisplayWatchList from './Component/DisplayWatchList';

function App() {
  return (
    <div className="App">
      <div className="MovieFormDiv">
        <MovieForm/>
        <DisplayWatchList/>
      </div>
    </div>
  );
}

export default App;
