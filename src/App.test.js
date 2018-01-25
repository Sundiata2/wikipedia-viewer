import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';


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
const initialState = {
  results: [
    { title: 'First title', description: 'First Description', url: 'www.foo.com' },
    { title: 'Second title', description: 'Second Description', url: 'www.foo.com' },
    { title: 'Third title', description: 'Third Description', url: 'www.foo.com' },
    { title: 'First title', description: 'First Description', url: 'www.foo.com' },
    { title: 'Second title', description: 'Second Description', url: 'www.foo.com' },
    { title: 'First title', description: 'First Description', url: 'www.foo.com' },
    { title: 'Second title', description: 'Second Description', url: 'www.foo.com' },
    { title: 'First title', description: 'First Description', url: 'www.foo.com' },
    { title: 'Second title', description: 'Second Description', url: 'www.foo.com' },
    { title: 'Second title', description: 'Second Description', url: 'www.foo.com' }
  ]
};

test('renders without crashing', (t) => {
  const div = document.createElement('div');
  const store = mockStore(initialState);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  //Just a true assertion so that ava doesn't trip up on not having an assertion
  t.is(4, 4);
});
