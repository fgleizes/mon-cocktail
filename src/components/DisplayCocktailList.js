import React from 'react';
import CocktailCard from './CocktailCard'
import Container from 'react-bootstrap/Container';

export default function DisplayResults(props) {
  const cocktails = props.results

  return (
    <Container>
      <div className="text-center text-dark py-5">
        <h2>Liste des cocktails</h2>

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