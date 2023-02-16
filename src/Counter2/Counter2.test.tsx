import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter2 from './Counter2';
import { store } from "../store/store";
import { Provider } from "react-redux";

test('check counter 2 name', () => {
  render(<Provider store={store}><Counter2 /></Provider>);
  const counterName = screen.getByText("Counter 2");
  expect(counterName).toBeInTheDocument();
});
