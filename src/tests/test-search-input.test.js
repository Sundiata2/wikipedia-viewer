import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UnconnectedSearchBar } from '../components/search-bar';
import { search, clearResults } from '../actions/search-actions';


//Set up our DOM environment so that we can test using mount()
function setUpDomEnvironment() {
  const { JSDOM } = jsdom;
  const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost/'});
  const { window } = dom;
  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js'
  };
  copyProps(window, global);
}

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src).filter(prop => {
    return typeof target[prop] === 'undefined';
  }).map(prop => {
    return Object.getOwnPropertyDescriptor(src, prop)
  });
  Object.defineProperties(target, props)
}

setUpDomEnvironment();

configure({ adapter: new Adapter() });

const mockStore = configureStore();

//Test both actions on search bar component
test('hitting key runs a search action', (t) => {

});


test('clicking the button clears the search', (t) => {

});
