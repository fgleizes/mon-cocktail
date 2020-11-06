import React from 'react';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import CocktailView from './components/CocktailView';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" children={<SearchPage />} />
          {/* <Route path="/cocktail/:id" children={<CocktailView />} /> */}
          <Route path="/cocktail/:id-:name" children={<CocktailView />} />
        </Switch>
      </Router>

      {/* <SearchPage /> */}
    </div>
  );
}

export default App;
