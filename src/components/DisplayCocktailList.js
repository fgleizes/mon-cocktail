import React from 'react';
import CocktailCard from './CocktailCard'

import Container from 'react-bootstrap/Container';


export default function DisplayCocktailList(props) {
  const { cocktails, myCocktails, selectCocktail } = props

  return (
    <Container>
      <div id="cocktail-list pb-5">
        <h2 className="text-dark">Cocktails :</h2>

        <div className="cocktail-list pt-3">  
          {cocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              cocktail={cocktail}
              myCocktails={myCocktails}
              selectCocktail={selectCocktail}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}