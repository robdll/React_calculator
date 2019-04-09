import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Calculator from './calculator';

import ValueBtn from '../valueBtn/valueBtn';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders a display, with various operators, values, and fn buttons', () => {
  const wrapper = mount(<Calculator />);
  const btns = ['*','+','-','/','1','2','3','4','5','6','6','7','8','9','0','.','AC','='].map( i => <div><ValueBtn value={i} /></div>);
  expect(wrapper.contains(btns));
});