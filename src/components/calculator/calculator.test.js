import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

import Calculator from './calculator';

import ValueBtn from '../valueBtn/valueBtn';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a display, with various operators, values, and fn buttons', () => {
  const wrapper = mount(<Calculator />);
  const btns = ['*','+','-','/','1','2','3','4','5','6','6','7','8','9','0','.','AC','=']
    .map( i => <div><ValueBtn value={i} /></div>);
  expect(wrapper.contains(btns));
});

it('Display is empty', () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.state()).toMatchObject({ displayValue: ''});
});

it('buttons update display', () => {
  const wrapper = shallow(<Calculator />);
  wrapper.find('[value="3"]').simulate("click");
  expect(wrapper.state().displayValue).toBe('3');
});


