import React from 'react';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import ConfirmationModal from './components/Modal'
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
    this.state = {
      myCocktails: [],
      showModal: false,
      cocktailToRemove: ""
    }

    this.selectCocktail = this.selectCocktail.bind(this)
    this.removeCocktail = this.removeCocktail.bind(this)
  }

  selectCocktail(cocktail) {
    const myCocktails = this.state.myCocktails

    // Si le cocktail sélectionné est déjà dans ma liste "myCocktails"
    for (let index = 0; index < myCocktails.length; index++) {
      if (cocktail.id === myCocktails[index].id) {
        // on affiche le modal de confirmation de suppression du cocktail
        return this.setState({ showModal: true, cocktailToRemove: {...cocktail, index} })
      }
    }

    // Sinon le cocktail sélectionné n'est pas dans ma liste "myCocktails ", on le rajoute à la fin de la liste
    return this.setState({ myCocktails: [...myCocktails, cocktail] })
  }

  removeCocktail() {
    const cocktailToRemove = this.state.cocktailToRemove
    const myCocktails = [...this.state.myCocktails]

    // Si l'utilisateur à validé le modal de confirmation, on supprime le cocktail de la liste
    myCocktails.splice(cocktailToRemove.index, 1)
    return this.setState({ myCocktails: myCocktails, showModal: false, cocktailToRemove: "" })
  }

  render() {
    const myCocktails = this.state.myCocktails

    return (
      <div className="App py-3 py-md-5">
        <ConfirmationModal
          show={this.state.showModal}
          onConfirm={this.removeCocktail}
          onClose={() => this.setState({ showModal: false, cocktailToRemove: "" })}
          thisCocktailName={this.state.cocktailToRemove.name}
        />

        <Router>
          <Header myCocktails={myCocktails}/>

          <Switch>
            {/*** Route to my Cocktail ***/}
            <Route path='/myCocktails/'>
              <MyCocktails myCocktails={myCocktails} selectCocktail={this.selectCocktail} />
            </Route>

            {/*** Route to search page ***/}
            {/* <Route path="/search/:query?" component={SearchPage} /> */}
            <Route path="/search/:query?" render={(props) => <SearchPage {...props} myCocktails={myCocktails} selectCocktail={this.selectCocktail} />} />

            {/*** Route to cocktail view (=> cocktail details) ***/}
            <Route path="/cocktail/:id-:name" children={<CocktailView myCocktails={myCocktails} selectCocktail={this.selectCocktail} />} />

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