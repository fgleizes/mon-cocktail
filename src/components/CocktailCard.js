import React from 'react'

export default class CocktailCard extends React.Component {

  render() {

    return (
      <div className="cocktail">
        <img src={this.props.cocktail.previewURL} alt={"Cocktail " + this.props.cocktail.name} title={"Cocktail " + this.props.cocktail.name} />
      </div>
    );
  }
}