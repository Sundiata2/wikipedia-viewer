import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedResult } from "../actions/search-actions";

class ResultItem extends Component {

  openURL(urlString) {
    const win = window.open(urlString, '_blank');
  }

  render() {
    const urlString = this.props.result.url;
    const description = this.props.result.description;
    const title = this.props.result.title;
    return (
      <div className="result-item" onClick={this.props.setSelectedResult}>
        <div className="result-title">{title}</div>
        <div className="result-description">{description}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSelectedResult: () => {
      dispatch(setSelectedResult(ownProps.resultIndex));
    }
  }
}

export default connect(null, mapDispatchToProps)(ResultItem);
