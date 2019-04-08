import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import Calculator from './components/calculator/calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders a child calculator', () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains([
    <Calculator />
  ]));
});