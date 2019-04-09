import React from 'react';
import ReactDOM from 'react-dom';

import Display from './display'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Display value={''} />, div);
  ReactDOM.unmountComponentAtNode(div);
});