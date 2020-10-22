import React from 'react';
import CocktailCard from './CocktailCard'

export default class DisplayResult extends React.Component {

  render() {
    const cocktails = this.props.result

    return (
      <div className="list-cocktails">
        <h1>Liste des cocktails</h1>
        
        {cocktails.map((cocktail, index) => (
          <CocktailCard
            cocktail={cocktail}
            key={index}
          />
        ))}
      </div>
    );
  }
}