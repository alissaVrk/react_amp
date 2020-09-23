import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const stuff = render(<App />);
  console.log(stuff.container.innerHTML)

  // const header = stuff.getByText('Amplify Todos');
  // expect(header).toBeInTheDocument();
});
