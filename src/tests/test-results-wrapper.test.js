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

configure({ adapter: new Adapter() });

//Set up global document setup (DOES NOT WORK)
global.document = new jsdom.jsdom('<body></body>');
global.window =  document.defaultView;
global.navigator = window.navigator;


const mockStore = configureStore();
const initialState = [
  { title: 'First title', description: 'First Description', url: 'www.foo.com' },
  { title: 'Second title', description: 'Second Description', url: 'www.foo.com' },
  { title: 'Third title', description: 'Third Description', url: 'www.foo.com' }
];

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
