import React from 'react';
import CocktailCard from './CocktailCard'

import Container from 'react-bootstrap/Container';


export default function MyCocktails(props) {
  const { myCocktails, selectCocktail } = props

  return (
    <section id="my-cocktails">
      <Container>
        <h1 className="text-center text-dark">My Cocktails</h1>
        
        {myCocktails.length > 0 &&
          <div id="cocktail-list pb-5">
            <div className="cocktail-list pt-3">  
              {myCocktails.map((myCocktail, index) => (
                <CocktailCard
                  key={index}
                  cocktail={myCocktail}
                  myCocktails={myCocktails}
                  selectCocktail={selectCocktail}
                />
              ))}
            </div>
          </div>
        }
      </Container>
    </section>
  );
}