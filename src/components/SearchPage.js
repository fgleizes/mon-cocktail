import React from 'react';
import SearchBox from './SearchBox'
import { makeSearch } from '../services/search'
import DisplayResult from './DisplayResult';

export default class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { result: [] }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(query) {
    const resultQuery = makeSearch()
    
    this.setState({ result: resultQuery })
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