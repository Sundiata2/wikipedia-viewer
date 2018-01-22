import React, { Component } from 'react';
import ResultItem from './result-item';
import { connect } from 'react-redux';
import { clearSelectedResult } from "../actions/search-actions";

class ResultsWrapper extends Component {

  renderResultItems() {
    const resultItems = this.props.results.map((result, i) => {
      const { url, title, description } = result;
      return (
        <ResultItem url={url} title={title} description={description} key={i} resultIndex={i} />
      );
    });
    return resultItems;
  }

  goToPage(url) {
    var wind = window.open(url, '_blank');
    wind.focus();
  }

  clearSelectedResult() {
    this.props.clearSelectedResult();
  }

  renderFrame() {
    return (
      <div className="frame-wrapper">
        <div className="frame-header">
          <div onClick={this.goToPage.bind(this, this.props.selectedResult.url)}>{"Go To Page"}</div>
          <div onClick={this.clearSelectedResult.bind(this)}>{"Back to Results"}</div>
        </div>
        <iframe src={this.props.selectedResult.url} />
      </div>
    );
  }


  render() {
    const resultsWrapperClass = this.props.results.length ? "results-wrapper" : "results-wrapper hidden";
    return (
      <div className={resultsWrapperClass}>
        {this.props.selectedResult ? this.renderFrame() : this.renderResultItems()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    results: state.results,
    selectedResult: state.selectedResult
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    clearSelectedResult: () => {
      dispatch(clearSelectedResult())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsWrapper);
