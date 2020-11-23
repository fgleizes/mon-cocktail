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

  componentDidMount() {
    this.updateResultsFromURL();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      // changed location; redo the search
      this.updateResultsFromURL();
    }
  }

  async updateResultsFromURL() {
    // get parameters from URL
    const query = this.props.match.params.query;

    // update results using these parameters
    const queryResult = await makeSearch(query);
    this.setState({ results: queryResult })
  }


  buildSearchURL(query) {
    return "/search/" + query;
  }

  handleSearch(query) {
    // only update update URL
    const newURL = this.buildSearchURL(query);
    this.props.history.push(newURL);
  }

  render() {
    const results = this.state.results
    const { myCocktails, selectCocktail } = this.props

    return (
      <section id="search-page">
        <SearchBox handleSearch={this.handleSearch} numberOfResults={results.length} />

        {results.length > 0 && 
          <DisplayCocktailList 
            cocktails={results}
            myCocktails={myCocktails}
            selectCocktail={selectCocktail}
          />
        }
      </section>
    );
  }
}