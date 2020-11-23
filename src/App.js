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
    this.state = {
      myCocktails: [
        {
          id: "11000",
          name: "Mojito",
          previewURL: "https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg/preview"
        },
        {
          id: "15841",
          name: "Mojito #3",
          previewURL: "https://www.thecocktaildb.com/images/media/drink/vwxrsw1478251483.jpg/preview"
        }
      ]
    }

    this.selectCocktail = this.selectCocktail.bind(this)
  }

  selectCocktail(cocktail) {
    const myCocktails = [...this.state.myCocktails]

    // if (myCocktails.indexOf(cocktail) === -1) {
    //   console.log(`cocktail ${cocktail.name} non trouvé`)
    //   myCocktails.splice(myCocktails.indexOf(cocktail), 0, cocktail)
    //   // this.setState({ myCocktails: [...myCocktails, cocktail] })
    // } else {
    //   console.log(`cocktail ${cocktail.name} trouvé`)
    //   myCocktails.splice(myCocktails.indexOf(cocktail), 1)
    //   // this.setState({ myCocktails: myCocktails })
    // }

    // this.setState({ myCocktails: myCocktails })
    

    // Si le cocktail sélectionné est déjà dans ma liste "myCocktails", on le supprime de la liste
    for (let index = 0; index < myCocktails.length; index++) {
      if (cocktail.id === myCocktails[index].id) {
        myCocktails.splice(index, 1)
        return this.setState({ myCocktails: myCocktails })
      }
    }

    // Sinon le cocktail sélectionné n'est pas dans ma liste "myCocktails ", on le rajoute à la fin de la liste
    return this.setState({ myCocktails: [...myCocktails, cocktail] })
  }

  render() {
    const myCocktails = this.state.myCocktails

    return (
      <div className="App py-3 py-md-5">
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