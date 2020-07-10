import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {HomePage} from './pages/Home';
import {NavBar} from './components/NavBar';
import { SearchResults } from './components/SearchResults';
import {SearchForm} from './components/SearchForm';
import {ListOfFavourites} from './components/ListOfFavourites';


function App() {

  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <hr />
          <SearchForm />
          <Switch>
            <Route exact path="/search/:keyword" component={SearchResults}  />
            <Route exact path="/favourites" component={ListOfFavourites}  />
            <Route exact path="/:id?" component={HomePage}  />

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
