import React, { Component } from 'react';
import ResultsWrapper from './results-wrapper';
import SearchBar from './search-bar';

class WikiSearchRoot extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ResultsWrapper />
      </div>
    );
  }
}

export default WikiSearchRoot;
