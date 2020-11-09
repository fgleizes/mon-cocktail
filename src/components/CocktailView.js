import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
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
      .then((result) => {
        this.setState({ cocktailDetails: result })
      })
  }
  
  render(){
    const { name, imageURL, tags, alcoholic, category, glass, instructions, ingredients } = this.state.cocktailDetails

    if (!this.state.cocktailDetails) return <Container><h3>Cocktail not found!</h3></Container>;
    
    return (
      <Container>
        <h1>{name}</h1>

        <Row>
          <Col sm={{ span: 12}} md={{ span: 5, order: 2 }} xl={4}>
            <Figure>
              <Figure.Image
                src={imageURL}
                alt={`Photo of a ${name} cocktail`}
                title={name}
              />
              <Figure.Caption>
                {tags}
              </Figure.Caption>
            </Figure>

            <ul className="m-0 py-3">
              <li>{alcoholic}</li>
              <li>Category: {category}</li>
              <li>Glass: {glass}</li>
            </ul>
          </Col>

          <Col sm={{ span: 12}} md={{ span: 7, order: 1 }} xl={8}>
            <p>{instructions}</p>

            <ul className="m-0 py-3">
              {ingredients.map((ingredient, index) => <li key={index}>{ingredient.name + " " + (ingredient.quantity ? ingredient.quantity : "")}</li>)}
            </ul>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default withRouter(CocktailView);