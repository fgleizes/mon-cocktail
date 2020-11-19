import React from 'react';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import MyCocktails from './components/MyCocktails';
import CocktailView from './components/CocktailView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myCocktails: [] }
    this.selectCocktail = this.selectCocktail.bind(this)
  }

  selectCocktail(cocktail) {
    const myCocktails = this.state.myCocktails

    if (myCocktails.indexOf(cocktail) === -1) {
      this.setState({ myCocktails: [...myCocktails, cocktail] })
    } else {
      this.setState({ myCocktails: myCocktails.splice(myCocktails.indexOf(cocktail), 1) })
    }
  }

  render() {
    return (
      <div className="App py-3 py-md-5">
        <Router>
          <Header />

          <Switch>
            <Route path='/myCocktails/'>
              <MyCocktails />
            </Route>
            <Route path="/search/:query?" component={SearchPage} />
            <Route path="/cocktail/:id-:name" children={<CocktailView selectCocktail={this.selectCocktail} />} />

            {/* Default route */}
            <Route path="/">
              <Redirect to="/search/" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;