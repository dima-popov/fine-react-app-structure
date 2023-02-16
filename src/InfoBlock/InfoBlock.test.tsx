import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoBlock from './InfoBlock';
import { store } from "../store/store";
import { Provider } from "react-redux";

test('text in doc', () => {
  render(<Provider store={store}><InfoBlock /></Provider>);
  const text = screen.getByText("Some random number on counter 1 change:");
  expect(text).toBeInTheDocument();
});
