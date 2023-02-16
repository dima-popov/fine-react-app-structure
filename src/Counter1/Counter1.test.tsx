
import Counter1 from './Counter1';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { store } from "../store/store";
import { Provider } from "react-redux";

test('check counter minus btn', () => {
  render( <Provider store={store}><Counter1 /></Provider>);
  const minus_btn = screen.getByTestId('minus');
  const counter = screen.getByTestId('counter');
  expect(minus_btn).toBeInTheDocument();
  expect(counter).toBeInTheDocument();
  fireEvent(
    minus_btn,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
 // expect(counter).toContain('-1');
 expect(counter).toHaveTextContent('-1');
});

test('check counter plus btn', () => {
  render( <Provider store={store}><Counter1 /></Provider>);
  const plus_btn = screen.getByTestId('plus');
  const counter = screen.getByTestId('counter');
  expect(plus_btn).toBeInTheDocument();
  expect(counter).toBeInTheDocument();
  fireEvent(
    plus_btn,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );

 expect(counter).toHaveTextContent('0');
});