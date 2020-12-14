import React from 'react';
import SelectButton from './SelectButton'
import { withRouter } from "react-router-dom";
import { searchCocktailDetailsById } from '../services/api';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';


class CocktailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { id, name, imageURL, previewURL, tags, alcoholic, category, glass, instructions, ingredients } = this.state.cocktailDetails
    const { myCocktails, selectCocktail } = this.props
    const thisCocktail = { id, name, previewURL }

    if (this.state.cocktailDetails === "error") return <Container><h3>Cocktail not found!</h3></Container>;
    
    return (
      <section id="cocktail-view">
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
                      </Figure.Caption>
                    }
                  </Figure>

                  <div className="mb-4 mb-md-0">
                    <SelectButton
                      thisCocktail={thisCocktail}
                      myCocktails={myCocktails}
                      selectCocktail={selectCocktail}
                    />
                  </div>
                </Col>

                <Col sm={{ span: 12 }} md={{ span: 6, order: 1 }} lg={7} xl={8}>
                  <div>
                    <h2>{name}</h2>
                    <p>{instructions}</p>
                  </div>

                  <div className="ingredient-list">
                    <h3>Ingredients:</h3>
                    {ingredients &&
                      <ul>
                        {ingredients.map((ingredient, index) =>
                          <li className="ingredient" key={index}>
                            {ingredient.name + (ingredient.quantity && " " + ingredient.quantity)}
                          </li>
                        )}
                      </ul>
                    }
                  </div>

                  <div>
                    <h4>Details:</h4>
                    <ul className="m-md-0">
                      <li>{category}</li>
                      <li>{alcoholic}</li>
                      <li>Glass type : {glass}</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            }
          </div>
        </Container>
      </section>
    );
  }
}

export default withRouter(CocktailView);