import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieForm from "./Component/MovieForm";
// import DisplayWatchList from './Component/DisplayWatchList';
import MovieResults from "./Component/MovieResults";
import {MovieContextProvider} from "./Context/MovieContext";
import DisplayWatchList from "./Component/DisplayWatchList";

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <div className="MovieFormDiv">
          <MovieForm />
          <DisplayWatchList/>
        </div>
      </MovieContextProvider>
    </div>
  );
}

export default App;
