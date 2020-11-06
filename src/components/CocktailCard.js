import React from 'react'
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';

export default function CocktailCard(props) {

  return (
    <Link to={`/cocktail/${props.cocktail.id}-${props.cocktail.name.replace(/ /g, "-")}`}>
      <Figure className="cocktail w-100 mb-0">
        <Figure.Image
          width="100%"
          rounded
          src={props.cocktail.previewURL} 
          alt={"Photo d'un cocktail " + props.cocktail.name} 
          title={props.cocktail.name}
        />
        <Figure.Caption>
          {props.cocktail.name}
        </Figure.Caption>
      </Figure>
    </Link>
  );
}