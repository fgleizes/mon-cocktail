import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function confirmationModal({ show, onClose, onConfirm, thisCocktailName }) {
  return (
    <Modal show={show} onHide={onClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{thisCocktailName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Remove the <strong>{thisCocktailName}</strong> from your "My Cocktails" list?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="dark" onClick={onConfirm}>Remove</Button>
      </Modal.Footer>
    </Modal>
  )
}