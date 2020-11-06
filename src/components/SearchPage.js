import React from 'react';
import SearchBox from './SearchBox'
import DisplayCocktailList from './DisplayCocktailList';

import { makeSearch } from '../services/search'

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] }

    this.handleSearch = this.handleSearch.bind(this)
  }

  async handleSearch(query) {
    // makeSearch(query)
    //   .then((results) => {
    //     this.setState({ result: results })
    //   })

    // const queryResult = await makeSearch(query);
    // this.setState({ results: queryResult })

    const newURL = "/search/" + query;
    this.props.history.push(newURL);
  }

  render() {
    return (
      <section id="search-page">
        <SearchBox handleSearch={this.handleSearch} numberOfResults={this.state.results.length} />

        {this.state.results.length > 0 && <DisplayCocktailList results={this.state.results} />}
      </section>
    );
  }
}