import React from 'react';
import Container from 'react-bootstrap/Container';


export default function Header() {
  return (
    <header className="header text-center text-dark py-3">
      <Container>
        <h1>Cocktailon</h1>
      </Container>
    </header>
  );
}