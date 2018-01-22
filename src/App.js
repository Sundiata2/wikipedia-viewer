import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { search } from "./actions/search-actions";
import WikiSearchRoot from "./components/root";

class App extends Component {

  render() {
    return (
      <div className="App">
        <WikiSearchRoot />
      </div>
    );
  }
}

export default App;
