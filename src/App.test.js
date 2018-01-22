import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { UnconnectedResultItem } from './components/result-item';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('has a .result-item classname', (t) => {
  const wrapper = shallow(<UnconnectedResultItem />);
  t.true(wrapper.hasClass('.result-item'));
});

//With JSX Helpers

test('renders correct markup', (t) => {
  const actual = renderJSX(<UnconnectedResultItem
    title="foo"
    description="bar"
    />);
  const expected = JSX(
    <div classname="result-item">
      <div classname="result-title">foo</div>
      <div classname="result-description">bar</div>
    </div>
  );
  t.is(actual, expected);
});
