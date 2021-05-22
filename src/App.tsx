// import React from "react";
import "./App.css";
import MovieForm from "./Component/MovieForm";
// import MovieResults from "./Component/MovieResults";
import {MovieContextProvider} from "./Context/MovieContext";
import DisplayWatchList from "./Component/DisplayWatchList";
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { amber } from "@material-ui/core/colors";

const theme = createMuiTheme ({
 palette:{
   primary: {
     main: "#fff8dc"
   },
     secondary: amber
   
 }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <h1>Movie Explorer</h1>
        <nav>
          <NavLink to="/search"><button className="nav">Find Movies</button></NavLink>
          <NavLink to="/watchlist"><button className="nav">View my watchlist</button></NavLink>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
