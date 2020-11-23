import React from 'react';

import Button from 'react-bootstrap/Button';

import { MdLibraryAdd } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';

export default class SelectButton extends React.Component {
  constructor(props){
    super(props)
    this.state = { isSelected: false }

    this.handleSelectCocktail = this.handleSelectCocktail.bind(this)
  }

  componentDidMount() {
    this.isSelected()
  }

  componentDidUpdate(prevProps) {
    if (this.props.myCocktails !== prevProps.myCocktails || this.props.thisCocktail !== prevProps.thisCocktail) {
      this.isSelected()
    }
  }

  isSelected() {
    const { thisCocktail, myCocktails } = this.props

    for (const myCocktail of myCocktails) {
      if (thisCocktail.id === myCocktail.id) {
        return this.setState({ isSelected: true })
      }
    }

    return this.setState({ isSelected: false })
  }

  handleSelectCocktail() {
    const { selectCocktail, thisCocktail } = this.props
    selectCocktail(thisCocktail)
  }

  // selectButton() {
  //   const isSelected = this.state.isSelected

  //   if (isSelected) {
      
  //     return (
  //       <Button variant="dark" onClick={this.handleSelectCocktail}>
  //         <MdDeleteForever /> Remove
  //       </Button>
  //     )
  //   }
    
  //   return (
  //     <Button variant="success" onClick={this.handleSelectCocktail}>
  //       <MdLibraryAdd /> Add to My Cocktails
  //     </Button >
  //   )
  // }

  render() {
    const isSelected = this.state.isSelected

    if (isSelected) {
      return (
        <Button variant="dark" onClick={this.handleSelectCocktail}>
          <MdDeleteForever /> Remove
        </Button>
      )
    }

    return (
      <Button variant="success" onClick={this.handleSelectCocktail}>
        <MdLibraryAdd /> Add to My Cocktails
      </Button >
    )
  }
}