import React from 'react';
import { withRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { searchCocktailDetailsById } from '../services/api';


class CocktailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // urlParams: this.props.match.params,
      cocktailDetails: ""
    }
  }

  componentDidMount() {
    this.handleSearchById(this.props.match.params.id)
  }

  handleSearchById(id) {
    searchCocktailDetailsById(id)
      .then((results) => {
        this.setState({ cocktailDetails: results })
      })
  }
  
  render(){
    // console.log(this.props.match.params)
    // const cocktailName = this.props.params.name

    if (!this.state.cocktailDetails) return <Container><h3>Cocktail not found!</h3></Container>;
    
    return (
      <Container>
        {/* <h1>{cocktailName}</h1> */}
        <h1>{this.state.cocktailDetails.strDrink}</h1>

        <img 
          src={this.state.cocktailDetails.strDrinkThumb} 
          alt={"Photo d'un cocktail " + this.state.cocktailDetails.strDrink}
          title={this.state.cocktailDetails.strDrink}
        />
        <ul className="m-0 py-3">
          <li>{this.state.cocktailDetails.strAlcoholic}</li>
          <li>Category: {this.state.cocktailDetails.strCategory}</li>
          <li>Glass: {this.state.cocktailDetails.strGlass}</li>
        </ul>
      </Container>
    );
  }
}

export default withRouter(CocktailView);