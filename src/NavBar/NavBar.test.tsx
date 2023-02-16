import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter } from "react-router-dom";

test('Main btn exists', () => {
  render(<BrowserRouter><NavBar /></BrowserRouter>);
  const Main = screen.getByText(/Main/i);
  expect(Main).toBeInTheDocument();
});
