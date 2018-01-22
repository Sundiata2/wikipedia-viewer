import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { UnconnectedResultItem } from './components/result-item';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//Basic test to see if result item has a classname
test('has a .result-item classname', (t) => {
  const wrapper = shallow(<UnconnectedResultItem
    result={{
      url: 'www.foo.com',
      title: 'foo',
      description: 'bar'
    }}
  />);
  t.true(wrapper.hasClass('result-item'));
});

//With JSX Helpers
test('renders correct markup', (t) => {
  const actual = renderJSX(<UnconnectedResultItem
    url={'www.foo.com'}
    title={'foo'}
    description={'bar'}
    />);
  const expected = JSX(
    <div className="result-item" onClick={undefined}>
      <div className="result-title">foo</div>
      <div className="result-description">bar</div>
    </div>
  );
  t.is(actual, expected);
});
