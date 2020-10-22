import React from 'react';

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
      <div className="search-box">
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Saisissez le nom d'un cocktail" 
            value={this.state.query} 
            onChange={(event) => this.setState({ query: event.target.value })}
          />
          <button type="submit">Rechercher</button>
        </form>
      </div>
    );
  }
}