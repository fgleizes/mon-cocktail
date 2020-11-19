import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { MdLibraryBooks } from 'react-icons/md';


export default function Header() {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <Navbar.Brand href="./">Cocktailon</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <NavDropdown title="Search by" id="nav-dropdown">
              <NavDropdown.Item href="./">Name</NavDropdown.Item>
              <NavDropdown.Item href="./">Main ingredient</NavDropdown.Item>
              <NavDropdown.Item href="./">Category</NavDropdown.Item>
              <NavDropdown.Item href="./">Glass</NavDropdown.Item>
              <NavDropdown.Item href="./">Soft or hard drinks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link to={'/myCocktails/'} className="recipes d-flex align-items-center">
              My Cocktails<MdLibraryBooks className="ml-2"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}