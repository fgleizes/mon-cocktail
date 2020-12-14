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

const addAnimation = () => {
  document.querySelector(".myCocktails-cart.nav-link").className = "myCocktails-cart nav-link";

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      document.querySelector(".myCocktails-cart").className = "myCocktails-cart nav-link cocktail-added";
    });
  });
}

export default function SelectButton(props) {
  const { thisCocktail, myCocktails, selectCocktail } = props

  const onClickAddButton = () => {
    selectCocktail(thisCocktail)
    addAnimation()
  }

  return (
    myCocktails.some(myCocktail => myCocktail.id === thisCocktail.id)
      ? <RemoveButton onClick={() => selectCocktail(thisCocktail)} />
      : <AddButton onClick={onClickAddButton} />
  )
}