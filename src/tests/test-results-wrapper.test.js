import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResultsWrapper from '../components/results-wrapper';
import { setSelectedResult } from '../actions/search-actions';
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

//Set up global document setup
// const document = (new JSDOM('<!doctype html><html><body></body></html>')).window;
// global.document = document;
// global.window = document.defaultView;

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

test('dispatches setSelectedResult action on click', (t) => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <ResultsWrapper />
    </Provider>
  );
  wrapper.find('ResultItem').at(0).simulate('click');
  t.deepEqual(store.getActions(), [setSelectedResult(0)]);
});

test('given data results wrapper will have 10 resultItems', (t) => {
  const store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <ResultsWrapper />
    </Provider>
  );
  console.log(wrapper.find('.result-item'));
  t.is(10, wrapper.find('.result-item').length);
});
