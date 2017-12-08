import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, clearResults } from "../actions/search-actions";


class SearchBar extends Component {

  search(evt) {
    const searchText = evt.target.value;
    this.props.search(searchText);
  }

  clearResults() {
    this.props.clearResults();
  }

  render() {
    return (
      <form className="inputbox">
        <input type="text" required autoFocus onChange={this.search.bind(this)} className="input" />
        <button className="del" type="reset" onClick={this.clearResults.bind(this)}/>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    results: state.results
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    clearResults: () => {
      return dispatch(clearResults());
    },

    search: (searchText) => {
      return dispatch(search(searchText));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
