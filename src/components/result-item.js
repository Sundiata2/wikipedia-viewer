import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedResult } from "../actions/search-actions";

class ResultItem extends Component {

  openURL(urlString) {
    const win = window.open(urlString, '_blank');
  }

  render() {
    const urlString = this.props.url;
    const description = this.props.description;
    const title = this.props.title;
    return (
      <div className="result-item" onClick={this.props.setSelectedResult}>
        <div className="result-title">{title}</div>
        <div className="result-description">{description}</div>
      </div>
    );
  }
}

export const UnconnectedResultItem = ResultItem;

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setSelectedResult: () => {
      dispatch(setSelectedResult(ownProps.resultIndex));
    }
  }
}

export default connect(null, mapDispatchToProps)(ResultItem);
