import React from 'react';
import SearchBox from './SearchBox'
import { makeSearch } from '../services/search'
import DisplayResult from './DisplayResult';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: [] }

    this.handleSearch = this.handleSearch.bind(this)
  }

  async handleSearch(query) {
    // makeSearch(query)
    //   .then((results) => {
    //     this.setState({ result: results })
    //   })

    const results = await makeSearch(query);
    this.setState({ result: results })
  }

  render() {
    return (
      <div>
        <SearchBox handleSearch={this.handleSearch} />
        <p>nombre de drinks: {this.state.result.length}</p>

        <DisplayResult result={this.state.result} />
      </div>

    );
  }
}