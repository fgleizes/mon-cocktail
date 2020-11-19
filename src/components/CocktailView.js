import React from 'react';
import { withRouter } from "react-router-dom";
import { searchCocktailDetailsById } from '../services/api';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { MdLibraryAdd } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';


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

    if (this.state.cocktailDetails === "error") return <Container><h3>Cocktail not found!</h3></Container>;

    console.log(this.props)
    
    return (
      <Container>
        <div className="cocktail-details py-3 py-lg-5">
          {this.state.cocktailDetails &&
            <Row>
              <Col sm={{ span: 12 }} md={{ span: 6, order: 2 }} lg={5} xl={4}>
                <Figure>
                  <Figure.Image
                    src={imageURL}
                    alt={`Photo of a ${name} cocktail`}
                    title={name}
                  />

                  {tags &&
                    <Figure.Caption>
                      {tags}
                      {/* {tags ? tags.split(",").map((tag, index) => <a href="#" key={index}>{tag}</a>) : ""} */}
                    </Figure.Caption>
                  }
                </Figure>

                <Button variant="success" className="mb-4 mb-md-0">
                  <MdLibraryAdd /> Add to My Cocktails
                </Button>

                <Button variant="dark" className="mb-4 mb-md-0">
                  <MdDeleteForever /> Remove from My Cocktails
                </Button>
              </Col>

              <Col sm={{ span: 12 }} md={{ span: 6, order: 1 }} lg={7} xl={8} className="d-flex flex-column justify-content-between">
                <div>
                  <h2>{name}</h2>
                  <p>{instructions}</p>
                </div>

                <div className="ingredient-list">
                  <h3>Ingredients:</h3>
                  {ingredients &&
                    <ul>
                      {ingredients.map((ingredient, index) => <li className="ingredient" key={index}>{ingredient.name + " " + (ingredient.quantity ? ingredient.quantity : "")}</li>)}
                    </ul>
                  }
                </div>

                <div>
                  <h4>Details:</h4>
                  <ul className="m-md-0">
                    <li>{alcoholic}</li>
                    <li>Category: {category}</li>
                    <li>Glass: {glass}</li>
                  </ul>
                </div>
              </Col>
            </Row>
          }
        </div>
      </Container>
    );
  }
}

export default withRouter(CocktailView);