import { render, screen } from "@testing-library/react";
import Example from "./Example";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store/store";
import { Provider } from "react-redux";

test("Check title", () => {
  render(
    <Provider store={store}>
      <Router>
        <Example />
      </Router>
    </Provider>
  );
  const title = screen.getByTestId("title");
  expect(title).toHaveTextContent("Example");
});
