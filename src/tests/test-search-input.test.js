import React from 'react';
import ReactDOM from 'react-dom';
import test from 'ava';
import { shallow } from 'enzyme';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UnconnectedSearchBar } from '../components/search-bar';
