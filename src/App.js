import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home} from './pages/Home';
import Favourites from './pages/Favourites';
import {NavBar} from './components/NavBar';
import { SearchResults } from './components/SearchResults';


function App() {

  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <hr />

          <Switch>
            <Route exact path="/search/:keyword" component={SearchResults}  />
            <Route exact path="/favourites" component={Favourites}  />
            <Route exact path="/:id?" component={Home}  />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
