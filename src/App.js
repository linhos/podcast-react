import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Home} from './pages/Home';
import Favourites from './pages/Favourites';
import Login from './pages/Login';
import Register from './pages/Register';
import Properties from './pages/Properties';
import Dashboard from './pages/Dashboard';
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard}  />
            <Route exact path="/search/:keyword" component={SearchResults}  />
            <Route exact path="/favourites" component={Favourites}  />
            <Route exact path="/properties" component={Properties}  />
            <Route exact path="/:id?" component={Home}  />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
