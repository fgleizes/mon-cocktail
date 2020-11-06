import React from 'react';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { makeSearch } from '../services/search';

export default function CocktailView() {
  const cocktail = useParams();
  console.log(cocktail)
  console.log(cocktail.name)
  console.log(cocktail.id)

  const cocktailId = parseInt(cocktail.id);

  // if (!) return <div>Cocktail not found</div>;

  makeSearch(cocktailId)
  return (

    <Container>
      <h1>{cocktail.name}</h1>
    </Container>
  );
}