
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AsyncCounter from './AsyncCounter';
import { store } from "../store/store";
import { Provider } from "react-redux";

test('minus btn and counter in document', async () => {
  render( <Provider store={store}><AsyncCounter /></Provider>);
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

  await waitFor(()=>{ return screen.getByText('-1')}, {timeout:2000});
  expect(counter).toHaveTextContent('-1');
});
