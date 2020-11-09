import React from 'react';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import CocktailView from './components/CocktailView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route path="/search/:query?" component={SearchPage} />
          <Route path="/cocktail/:id-:name" children={<CocktailView />} />

          {/* Default route */}
          <Route path="/">
            <Redirect to="/search/" />
          </Route>
        </Switch>
      </Router>

      {/* <SearchPage /> */}
    </div>
  );
}

export default App;
