import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hello name="Bob" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
