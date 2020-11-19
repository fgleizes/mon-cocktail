import React from 'react'
import { Link } from "react-router-dom";

import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

import { MdLibraryAdd } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';

export default function CocktailCard(props) {

  return (
    <div className="cocktail-card d-flex flex-column" >
      <Link to={`/cocktail/${props.cocktail.id}-${props.cocktail.name.replace(/ /g, "-")}`}>
        <Figure className="cocktail text-center w-100 mb-0">
          <Figure.Caption className="mb-2">
            {props.cocktail.name}
          </Figure.Caption>
          <div className="position-relative">
            <Figure.Image
              width="100%"
              rounded
              src={props.cocktail.previewURL} 
              alt={"Photo d'un cocktail " + props.cocktail.name} 
              title={props.cocktail.name}
              className="mb-0"
            />
            <div className="hover-effect"></div>
          </div>
        </Figure>
      </Link>
      
      <Button variant="success">
        <MdLibraryAdd /> Add to My Cocktails
      </Button>
      <Button variant="dark">
        <MdDeleteForever /> Remove
      </Button>
    </div>
  );
}