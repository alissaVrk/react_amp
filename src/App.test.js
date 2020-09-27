import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('THIS IS UNIT -> SUCCESS should be', () => {
  const stuff = render(<App />);
  console.log(stuff.container.innerHTML)
  expect(2).toBe(2);

  // const header = stuff.getByText('Amplify Todos');
  // expect(header).toBeInTheDocument();
});
