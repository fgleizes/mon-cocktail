import React from 'react';
import CocktailCard from './CocktailCard'

import Container from 'react-bootstrap/Container';


export default function DisplayCocktailList(props) {
  const cocktails = props.results

  return (
    <Container>
      <div id="cocktail-list pb-5">
        <h2 className="text-dark">Cocktails :</h2>

        <div className="cocktail-list pt-3">  
          {cocktails.map((cocktail, index) => (
            <CocktailCard
              cocktail={cocktail}
              key={index}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}