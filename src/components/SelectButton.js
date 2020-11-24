import React from 'react';

import Button from 'react-bootstrap/Button';

import { MdLibraryAdd } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';


const RemoveButton = (props) => {
  return (
    <Button variant="dark" onClick={props.onClick}>
      <MdDeleteForever /> Remove
    </Button>
  )
}
const AddButton = (props) => {
  return (
    <Button variant="success" onClick={props.onClick}>
      <MdLibraryAdd /> Add to My Cocktails
    </Button >
  )
}

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
    if (
      this.props.myCocktails !== prevProps.myCocktails 
      || this.props.thisCocktail !== prevProps.thisCocktail
    ) {
      this.isSelected()
    }
  }

  isSelected() {
    const { thisCocktail, myCocktails } = this.props
    
    myCocktails.some(myCocktail => myCocktail.id === thisCocktail.id)
      ? this.setState({ isSelected: true }) 
      : this.setState({ isSelected: false })
  }

  handleSelectCocktail() {
    const { selectCocktail, thisCocktail } = this.props
    selectCocktail(thisCocktail)
  }

  render() {
    return (
      <>
        {this.state.isSelected
          ? <RemoveButton onClick={this.handleSelectCocktail} />
          : <AddButton onClick={this.handleSelectCocktail} />
        }
      </>
    )
  }
}