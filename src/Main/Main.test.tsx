import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Main title exists', () => {
  render(<Main />);
  const h2 = screen.getByText(/Main/i);
  expect(h2).toBeInTheDocument();
});
