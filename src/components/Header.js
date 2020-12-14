import React from 'react';
import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MdLibraryBooks } from 'react-icons/md';


export default function Header(props) {
  const myCocktails = props.myCocktails

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <Navbar.Brand as={Link} to="/">Cocktailon</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="nav-left mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>

          <Nav className='nav-right'>
            <Nav.Link as={Link} to='/myCocktails/' className="myCocktails-cart d-flex align-items-center">
              My Cocktails<MdLibraryBooks className="ml-2" /> 
              {myCocktails.length > 0 && 
                <span className="ml-md-2 d-flex align-items-center justify-content-center">{myCocktails.length}</span>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}