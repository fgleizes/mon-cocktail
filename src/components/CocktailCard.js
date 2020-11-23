import React from 'react'
import { Link } from "react-router-dom";
import SelectButton from './SelectButton'

import Figure from 'react-bootstrap/Figure';

export default function CocktailCard(props) {
  const { cocktail, myCocktails, selectCocktail } = props

  return (
    <div className="cocktail-card d-flex flex-column" >
      <Link to={`/cocktail/${cocktail.id}-${cocktail.name.replace(/ /g, "-")}`}>
        <Figure className="cocktail text-center w-100 mb-0">
          <Figure.Caption className="mb-2">
            {cocktail.name}
          </Figure.Caption>

          <div className="position-relative">
            <Figure.Image
              width="100%"
              rounded
              src={cocktail.previewURL} 
              alt={"Photo d'un cocktail " + cocktail.name} 
              title={cocktail.name}
              className="mb-0"
            />
            <div className="hover-effect"></div>
          </div>
        </Figure>
      </Link>

      <SelectButton 
        thisCocktail={cocktail}
        myCocktails={myCocktails}
        selectCocktail={selectCocktail}
      />
    </div>
  );
}