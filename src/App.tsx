// import React from "react";
import "./App.css";
import MovieForm from "./Component/MovieForm";
// import MovieResults from "./Component/MovieResults";
import {MovieContextProvider} from "./Context/MovieContext";
import DisplayWatchList from "./Component/DisplayWatchList";
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Movie Explorer</h1>
        <nav>
          <Link to="/search">Find Movies</Link>
          <Link to="/watchlist">View my watchlist</Link>
        </nav>
      
        <MovieContextProvider>
          <Switch>
            <Route path="/search">
                <div className="MovieFormDiv">
                  <MovieForm />
                </div>
            </Route>
            <Route path="/watchlist">
                <div className="WatchListDiv">
                <DisplayWatchList/>
                </div>
            </Route>
            <Route path="/">
              <Redirect to="/search"/>
            </Route>
          </Switch>
        </MovieContextProvider>
      </Router>
    </div>
  );
}

export default App;
