import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('is a dummy but it might work', () => {
  const tendered = true;
  expect(tendered).toBeTruthy();
});
