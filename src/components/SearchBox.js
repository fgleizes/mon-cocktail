import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

import { GoSearch } from 'react-icons/go';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      filters: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.query)
  }

  render() {
    return (
      <Container>
        <div className="search-box text-center py-3 pb-md-5 pt-lg-4">
          <h1 className="text-dark pb-4">Search cocktails</h1>
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Col lg={9} className="mx-auto">
                <InputGroup>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="Enter the name of a cocktail"
                    value={this.state.query}
                    onChange={(event) => this.setState({ query: event.target.value })}
                  />

                  <InputGroup.Append>
                    <Button variant="dark" type="submit">
                      <GoSearch />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>

                <Form.Text muted>
                  nombre de résultats: {this.props.numberOfResults}
                </Form.Text>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </Container>
    );
  }
}