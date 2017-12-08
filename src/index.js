import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import search from "./reducers/search";
import thunkMiddleware from 'redux-thunk'


const store = createStore(search, applyMiddleware(
  thunkMiddleware
  ));
window.store = store;

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
