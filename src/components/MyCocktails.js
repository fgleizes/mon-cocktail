import React from 'react';
import CocktailCard from './CocktailCard'

import Container from 'react-bootstrap/Container';


export default function MyCocktails(props) {
  // const myCocktails = props.myCocktails
  const myCocktails = [
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

  return (
    <Container>
      <h1 className="text-center text-dark">My Cocktails</h1>

      <div id="cocktail-list pb-5">
        <div className="cocktail-list pt-3">  
          {myCocktails.map((cocktail, index) => (
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